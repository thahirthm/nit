"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { type COBEOptions } from "cobe"

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
  markerColor: [129 / 255, 209 / 255, 232 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [24.7136, 46.6753], size: 0.08 }, // Riyadh
    { location: [21.4858, 39.1925], size: 0.07 }, // Jeddah
    { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
    { location: [29.3759, 47.9774], size: 0.07 }, // Kuwait
  ],
}

const DRAG_DAMPING = 0.004

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

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    isDragging.current = true
    lastPointerX.current = e.clientX
    lastPointerY.current = e.clientY
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

  const onPointerUp = () => {
    isDragging.current = false
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
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
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={onPointerUp}
        style={{
          width: "100%",
          height: "100%",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
          cursor: "grab",
        }}
      />
    </div>
  )
}
