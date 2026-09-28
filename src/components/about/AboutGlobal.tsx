"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

type MapMarker = { name: string; x: number; y: number; size?: "sm" | "md" | "lg" };

const MARKERS: MapMarker[] = [
  { name: "United States", x: 24.6, y: 33.7, size: "md" },
  { name: "United Kingdom", x: 45, y: 21, size: "sm" },
  { name: "Croatia", x: 50.4, y: 28, size: "sm" },
  { name: "Turkey", x: 53, y: 32, size: "sm" },
  { name: "Jordan", x: 52, y: 37, size: "sm" },
  { name: "Egypt", x: 56, y: 38, size: "sm" },
  { name: "Saudi Arabia", x: 57.2, y: 38.5, size: "lg" },
  { name: "Bahrain", x: 58, y: 40, size: "sm" },
  { name: "United Arab Emirates", x: 57, y: 43, size: "sm" },
  { name: "South Korea", x: 69, y: 38, size: "sm" },
  { name: "China", x: 74, y: 34, size: "sm" },
];

const DOT_SIZE: Record<NonNullable<MapMarker["size"]>, string> = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
};

export function AboutGlobal() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
          Local expertise. Global reach.
        </h2>

        <div className="relative w-full px-6 sm:px-12 lg:px-20">
          <Image
            src="/images/globe-plain.png"
            alt="World map of Nesma Infrastructure & Technology's global presence"
            width={1394}
            height={553}
            className="w-full h-auto select-none pointer-events-none"
            priority={false}
          />

          {MARKERS.map((marker) => (
            <div
              key={marker.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onMouseEnter={() => setActiveMarker(marker.name)}
              onMouseLeave={() => setActiveMarker((current) => (current === marker.name ? null : current))}
              onClick={() =>
                setActiveMarker((current) => (current === marker.name ? null : marker.name))
              }
            >
              <button
                type="button"
                aria-label={marker.name}
                className={`block rounded-full bg-[#81D1E8] hover:bg-[#2563EB] transition-colors cursor-pointer ${DOT_SIZE[marker.size ?? "sm"]}`}
              />

              <AnimatePresence>
                {activeMarker === marker.name && (
                  <div className="absolute left-1/2 top-1/2 pointer-events-none">
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute overflow-visible"
                      width="1"
                      height="1"
                    >
                      <line x1={0} y1={0} x2={-42} y2={-34} stroke="#2E368F" strokeWidth={1} />
                    </motion.svg>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute -translate-x-full -translate-y-full -ml-[42px] -mt-[34px] whitespace-nowrap px-3 py-1.5 bg-white border border-[#2E368F] text-[#2E368F] text-[10px] font-semibold tracking-widest uppercase shadow-sm"
                    >
                      {marker.name}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="relative bg-[#F5F5F5] border-l-4 border-[#81D1E8] px-6 py-6 sm:px-8 sm:py-8 max-w-xl mt-6 lg:mt-10">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Nesma Infrastructure & Technology combines strong local and global presence with a vendor-agnostic supply chain built on trusted partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
