"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import createGlobe, { type COBEOptions } from "cobe"

const MARKERS: { name: string; location: [number, number]; size: number }[] = [
  { name: "Saudi Arabia", location: [24.7136, 46.6753], size: 0.09 },
  { name: "Bahrain", location: [26.0667, 50.5577], size: 0.06 },
  { name: "China", location: [39.9042, 116.4074], size: 0.07 },
  { name: "Croatia", location: [45.815, 15.9819], size: 0.06 },
  { name: "Egypt", location: [30.0444, 31.2357], size: 0.07 },
  { name: "Jordan", location: [31.9454, 35.9284], size: 0.06 },
  { name: "South Korea", location: [37.5665, 126.978], size: 0.07 },
  { name: "Turkey", location: [39.9334, 32.8597], size: 0.07 },
  { name: "United Arab Emirates", location: [24.4539, 54.3773], size: 0.06 },
  { name: "United Kingdom", location: [51.5074, -0.1278], size: 0.07 },
  { name: "United States", location: [38.9072, -77.0369], size: 0.07 },
]

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [37 / 255, 99 / 255, 235 / 255],
  glowColor: [1, 1, 1],
  markers: MARKERS.map(({ location, size }) => ({ location, size })),
}

const DRAG_DAMPING = 0.004
const CLICK_MOVE_THRESHOLD = 6
const MARKER_HIT_RADIUS = 18

type ActiveMarker = { name: string; x: number; y: number }

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const thetaRef = useRef(0.3)
  const [visible, setVisible] = useState(false)
  const isDragging = useRef(false)
  const lastPointerX = useRef(0)
  const lastPointerY = useRef(0)
  const velocityX = useRef(0)
  const velocityY = useRef(0)
  const pointerDownPos = useRef({ x: 0, y: 0 })
  const [activeMarker, setActiveMarker] = useState<ActiveMarker | null>(null)
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // WebGL can be unavailable (disabled, unsupported, or missing GPU access) —
    // skip rendering gracefully instead of letting cobe throw on a null context.
    let webglSupported = false
    try {
      webglSupported = !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    } catch {
      webglSupported = false
    }
    if (!webglSupported) return

    let globe: ReturnType<typeof createGlobe> | null = null
    try {
      // @ts-ignore
      globe = createGlobe(canvas, {
        ...GLOBE_CONFIG,
        width: canvas.offsetWidth * 2,
        height: canvas.offsetHeight * 2,
        onRender: (state: Record<string, any>) => {
          if (!isDragging.current) {
            // Auto-rotate when not dragging
            phiRef.current += 0.005
            // Apply velocity decay when released
            velocityX.current *= 0.95
            velocityY.current *= 0.95
          }
          state.phi = phiRef.current
          state.theta = thetaRef.current
          state.width = canvas.offsetWidth * 2
          state.height = canvas.offsetHeight * 2
        },
      })
    } catch {
      return
    }

    setVisible(true)

    const handleResize = () => {
      // trigger re-render on resize
    }
    window.addEventListener("resize", handleResize)

    return () => {
      globe?.destroy()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (dismissTimer.current) clearTimeout(dismissTimer.current)
    }
  }, [])

  // Project a marker's lat/lng onto the canvas using the globe's current live
  // rotation (phi/theta), so a tap can be matched to the nearest visible dot.
  const projectMarker = (
    canvas: HTMLCanvasElement,
    location: [number, number]
  ): { x: number; y: number; visible: boolean } | null => {
    const [lat, lng] = location
    const latRad = (lat * Math.PI) / 180
    const lngRad = (lng * Math.PI) / 180 + phiRef.current

    const x = Math.cos(latRad) * Math.sin(lngRad)
    const y = Math.sin(latRad)
    const z = Math.cos(latRad) * Math.cos(lngRad)

    const theta = thetaRef.current
    const yRot = y * Math.cos(theta) - z * Math.sin(theta)
    const zRot = y * Math.sin(theta) + z * Math.cos(theta)

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    const radius = (Math.min(w, h) / 2) * 0.9

    return {
      x: w / 2 + x * radius,
      y: h / 2 - yRot * radius,
      visible: zRot > 0,
    }
  }

  const handleTap = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const tapX = clientX - rect.left
    const tapY = clientY - rect.top

    let closest: ActiveMarker | null = null
    let closestDist = MARKER_HIT_RADIUS

    for (const marker of MARKERS) {
      const projected = projectMarker(canvas, marker.location)
      if (!projected || !projected.visible) continue

      const dist = Math.hypot(projected.x - tapX, projected.y - tapY)
      if (dist < closestDist) {
        closestDist = dist
        closest = { name: marker.name, x: projected.x, y: projected.y }
      }
    }

    if (dismissTimer.current) clearTimeout(dismissTimer.current)

    if (closest) {
      setActiveMarker(closest)
      dismissTimer.current = setTimeout(() => setActiveMarker(null), 2500)
    } else {
      setActiveMarker(null)
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    isDragging.current = true
    lastPointerX.current = e.clientX
    lastPointerY.current = e.clientY
    pointerDownPos.current = { x: e.clientX, y: e.clientY }
    velocityX.current = 0
    velocityY.current = 0
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastPointerX.current
    const dy = e.clientY - lastPointerY.current

    phiRef.current -= dx * DRAG_DAMPING * 2
    thetaRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, thetaRef.current + dy * DRAG_DAMPING))

    velocityX.current = dx
    velocityY.current = dy

    lastPointerX.current = e.clientX
    lastPointerY.current = e.clientY
  }

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = false
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"

    const moved = Math.hypot(
      e.clientX - pointerDownPos.current.x,
      e.clientY - pointerDownPos.current.y
    )
    if (moved < CLICK_MOVE_THRESHOLD) {
      handleTap(e.clientX, e.clientY)
    }
  }

  const onTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging.current || !e.touches[0]) return
    const dx = e.touches[0].clientX - lastPointerX.current
    const dy = e.touches[0].clientY - lastPointerY.current

    phiRef.current -= dx * DRAG_DAMPING * 2
    thetaRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, thetaRef.current + dy * DRAG_DAMPING))

    lastPointerX.current = e.touches[0].clientX
    lastPointerY.current = e.touches[0].clientY
  }

  return (
    <div className={`w-full h-full relative ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onTouchStart={(e) => {
          isDragging.current = true
          lastPointerX.current = e.touches[0].clientX
          lastPointerY.current = e.touches[0].clientY
          pointerDownPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={(e) => {
          isDragging.current = false
          if (canvasRef.current) canvasRef.current.style.cursor = "grab"
          const touch = e.changedTouches[0]
          if (touch) {
            const moved = Math.hypot(
              touch.clientX - pointerDownPos.current.x,
              touch.clientY - pointerDownPos.current.y
            )
            if (moved < CLICK_MOVE_THRESHOLD) handleTap(touch.clientX, touch.clientY)
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
          cursor: "grab",
        }}
      />

      {/* Tap/click highlight + minimal popup */}
      <AnimatePresence>
        {activeMarker && (
          <div
            key={activeMarker.name}
            className="absolute pointer-events-none"
            style={{ left: activeMarker.x, top: activeMarker.y }}
          >
            {/* Pulse ring on the point */}
            <motion.span
              initial={{ scale: 0.4, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2563EB]"
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2563EB]"
            />

            {/* Minimal label popup */}
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-full -mt-3 whitespace-nowrap px-3 py-1.5 bg-[#2E368F] text-white text-xs font-medium shadow-lg"
            >
              {activeMarker.name}
              <span className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#2E368F] rotate-45" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
