"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

// Dotted world map with NIT's presence markers and an auto-cycling country label.
// Shared by the About page ("Local expertise. Global reach.") and the header mega menu.
//   tone="light" — on a white background (About page)
//   tone="dark"  — on the brand blue (mega menu): white dots, white connector line
//   active       — pauses the auto-cycle when false (e.g. while the mega menu is closed)

type MapMarker = { name: { en: string; ar: string }; x: number; y: number; size?: "sm" | "md" | "lg" };

const MARKERS: MapMarker[] = [
  { name: { en: "United States", ar: "الولايات المتحدة" }, x: 24.6, y: 33.7, size: "md" },
  { name: { en: "United Kingdom", ar: "المملكة المتحدة" }, x: 45, y: 21, size: "sm" },
  { name: { en: "Croatia", ar: "كرواتيا" }, x: 50.4, y: 28, size: "sm" },
  { name: { en: "Turkey", ar: "تركيا" }, x: 53, y: 32, size: "sm" },
  { name: { en: "Jordan", ar: "الأردن" }, x: 52, y: 37, size: "sm" },
  { name: { en: "Egypt", ar: "مصر" }, x: 56, y: 38, size: "sm" },
  { name: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" }, x: 57.2, y: 38.5, size: "lg" },
  { name: { en: "Bahrain", ar: "البحرين" }, x: 58, y: 40, size: "sm" },
  { name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" }, x: 57, y: 43, size: "sm" },
  { name: { en: "South Korea", ar: "كوريا الجنوبية" }, x: 69, y: 38, size: "sm" },
  { name: { en: "China", ar: "الصين" }, x: 74, y: 34, size: "sm" },
];

const DOT_SIZE: Record<NonNullable<MapMarker["size"]>, string> = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
};

// Auto-cycle timing for the country label pop-up
const CYCLE_MS = 2800;
// How long a tapped marker stays pinned before auto-cycling resumes (touch devices)
const TAP_HOLD_MS = 4000;

function pickRandomMarker(exclude: string | null) {
  const pool = MARKERS.filter((m) => m.name.en !== exclude);
  return pool[Math.floor(Math.random() * pool.length)].name.en;
}

type GlobalReachMapProps = {
  tone?: "light" | "dark";
  active?: boolean;
  className?: string;
};

export function GlobalReachMap({ tone = "light", active = true, className = "" }: GlobalReachMapProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const isDark = tone === "dark";
  const [autoMarker, setAutoMarker] = useState<string | null>(null);
  const [userMarker, setUserMarker] = useState<string | null>(null);
  const activeMarker = userMarker ?? autoMarker;

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { amount: 0.3 });
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const running = mapInView && active;

  // Randomly pop up a country label on a loop while the map is visible and the user isn't interacting
  useEffect(() => {
    if (!running || userMarker) return;
    const first = setTimeout(() => setAutoMarker((current) => pickRandomMarker(current)), 600);
    const loop = setInterval(() => setAutoMarker((current) => pickRandomMarker(current)), CYCLE_MS);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
    };
  }, [running, userMarker]);

  useEffect(() => () => {
    if (tapTimer.current) clearTimeout(tapTimer.current);
  }, []);

  return (
    <div ref={mapRef} className={`relative ${className}`}>
      <Image quality={95}
        src="/images/globe-plain.png"
        alt={isAr ? "خريطة العالم لحضور نسما للبنية التحتية والتقنية العالمي" : "World map of Nesma Infrastructure & Technology's global presence"}
        width={1394}
        height={553}
        className={`w-full h-auto select-none pointer-events-none ${isDark ? "brightness-0 invert opacity-[0.3]" : ""}`}
        priority={false}
      />

      {MARKERS.map((marker, markerIndex) => {
        const markerName = isAr ? marker.name.ar : marker.name.en;
        const flipRight = marker.x < 50;
        const flipDown = marker.y < 25;
        const isActive = activeMarker === marker.name.en;
        return (
          <div
            key={marker.name.en}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            onMouseEnter={() => setUserMarker(marker.name.en)}
            onMouseLeave={() => setUserMarker((current) => (current === marker.name.en ? null : current))}
            onClick={() => {
              setUserMarker(marker.name.en);
              setAutoMarker(marker.name.en);
              if (tapTimer.current) clearTimeout(tapTimer.current);
              tapTimer.current = setTimeout(() => setUserMarker(null), TAP_HOLD_MS);
            }}
          >
            {/* Soft pulse ring behind the active dot */}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  key="pulse"
                  aria-hidden
                  className={`absolute left-1/2 top-1/2 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full pointer-events-none ${isDark ? "bg-white/30" : "bg-[#2563EB]/25"}`}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0.7, 0], scale: [0.4, 1.6] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              aria-label={markerName}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.3 + markerIndex * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className={`relative block rounded-full transition-[background-color,transform] duration-500 ease-out cursor-pointer ${
                isActive ? (isDark ? "bg-white scale-125" : "bg-[#2563EB] scale-125") : isDark ? "bg-[#81D1E8] hover:bg-white" : "bg-[#81D1E8] hover:bg-[#2563EB]"
              } ${DOT_SIZE[marker.size ?? "sm"]}`}
            />

            <AnimatePresence>
              {isActive && (
                // LTR wrapper + explicit left/top so the label anchors to the dot in Arabic too
                // (in RTL an auto-positioned box starts from the right edge and drifts away from the line)
                <div dir="ltr" className="absolute left-1/2 top-1/2 pointer-events-none">
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-0 overflow-visible"
                    width="1"
                    height="1"
                  >
                    <motion.line
                      x1={0}
                      y1={0}
                      x2={flipRight ? 42 : -42}
                      y2={flipDown ? 34 : -34}
                      stroke={isDark ? "#FFFFFF" : "#2E368F"}
                      strokeWidth={0.75}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.svg>

                  <motion.div
                    dir={isAr ? "rtl" : "ltr"}
                    initial={{ opacity: 0, scale: 0.9, y: flipDown ? -4 : 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } }}
                    transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute left-0 top-0 whitespace-nowrap px-3 py-1.5 text-[#2E368F] font-semibold shadow-sm ${isDark ? "bg-white/70 backdrop-blur-sm border border-white/40" : "bg-white border border-[#2E368F]"} ${isAr ? "text-[12px]" : "text-[10px] tracking-widest uppercase"} ${
                      flipRight ? "ml-[42px]" : "-translate-x-full -ml-[42px]"
                    } ${flipDown ? "mt-[34px]" : "-translate-y-full -mt-[34px]"}`}
                  >
                    {markerName}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
