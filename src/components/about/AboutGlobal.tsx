"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";

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

export function AboutGlobal() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [autoMarker, setAutoMarker] = useState<string | null>(null);
  const [userMarker, setUserMarker] = useState<string | null>(null);
  const activeMarker = userMarker ?? autoMarker;

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { amount: 0.3 });
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Randomly pop up a country label on a loop while the map is visible and the user isn't interacting
  useEffect(() => {
    if (!mapInView || userMarker) return;
    const first = setTimeout(() => setAutoMarker((current) => pickRandomMarker(current)), 600);
    const loop = setInterval(() => setAutoMarker((current) => pickRandomMarker(current)), CYCLE_MS);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
    };
  }, [mapInView, userMarker]);

  useEffect(() => () => {
    if (tapTimer.current) clearTimeout(tapTimer.current);
  }, []);

  return (
    // Anchor for the "Connected globally" card's arrow in AboutHighlights
    <section id="global-reach" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? "خبرات محلية. حضور عالمي." : "Local expertise. Global reach."}
          </h2>
        </Reveal>

        <Reveal delay={0.1} duration={0.9} y={30} className="relative w-full -mx-6 sm:-mx-4 lg:-mx-8 px-0 sm:px-2 lg:px-4 pt-8 sm:pt-0">
        <div ref={mapRef} className="relative w-[135%] -ml-[17.5%] sm:w-full sm:ml-0">
          <Image quality={95}
            src="/images/globe-plain.png"
            alt={isAr ? "خريطة العالم لحضور نسما للبنية التحتية والتقنية العالمي" : "World map of Nesma Infrastructure & Technology's global presence"}
            width={1394}
            height={553}
            className="w-full h-auto select-none pointer-events-none"
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
                      className="absolute left-1/2 top-1/2 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-[#2563EB]/25 pointer-events-none"
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
                    isActive ? "bg-[#2563EB] scale-125" : "bg-[#81D1E8] hover:bg-[#2563EB]"
                  } ${DOT_SIZE[marker.size ?? "sm"]}`}
                />

                <AnimatePresence>
                  {isActive && (
                    <div className="absolute left-1/2 top-1/2 pointer-events-none">
                      <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute overflow-visible"
                        width="1"
                        height="1"
                      >
                        <motion.line
                          x1={0}
                          y1={0}
                          x2={flipRight ? 42 : -42}
                          y2={flipDown ? 34 : -34}
                          stroke="#2E368F"
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
                        className={`absolute whitespace-nowrap px-3 py-1.5 bg-white border border-[#2E368F] text-[#2E368F] text-[10px] font-semibold tracking-widest uppercase shadow-sm ${
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
        </Reveal>

        <Reveal
          delay={0.3}
          duration={0.7}
          y={24}
          dir={isAr ? "rtl" : "ltr"}
          className={`relative bg-[#F5F5F5] px-6 py-6 sm:px-8 sm:py-8 max-w-xl mt-6 lg:mt-10 ${
            isAr ? "border-r-4" : "border-l-4"
          } border-[#81D1E8]`}
        >
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "تجمع نسما للبنية التحتية والتقنية بين حضور محلي وعالمي قوي، مع سلسلة توريد مستقلة عن الموردين ومبنية على شراكات موثوقة."
              : "Nesma Infrastructure & Technology combines strong local and global presence with a vendor-agnostic supply chain built on trusted partnerships."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
