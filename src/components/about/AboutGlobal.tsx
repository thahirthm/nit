"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

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

export function AboutGlobal() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
          {isAr ? "خبرات محلية. حضور عالمي." : "Local expertise. Global reach."}
        </h2>

        <div className="relative w-full px-6 sm:px-12 lg:px-20">
          <Image
            src="/images/globe-plain.png"
            alt={isAr ? "خريطة العالم لحضور نسما للبنية التحتية والتقنية العالمي" : "World map of Nesma Infrastructure & Technology's global presence"}
            width={1394}
            height={553}
            className="w-full h-auto select-none pointer-events-none"
            priority={false}
          />

          {MARKERS.map((marker) => {
            const markerName = isAr ? marker.name.ar : marker.name.en;
            return (
              <div
                key={marker.name.en}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                onMouseEnter={() => setActiveMarker(marker.name.en)}
                onMouseLeave={() => setActiveMarker((current) => (current === marker.name.en ? null : current))}
                onClick={() =>
                  setActiveMarker((current) => (current === marker.name.en ? null : marker.name.en))
                }
              >
                <button
                  type="button"
                  aria-label={markerName}
                  className={`block rounded-full bg-[#81D1E8] hover:bg-[#2563EB] transition-colors cursor-pointer ${DOT_SIZE[marker.size ?? "sm"]}`}
                />

                <AnimatePresence>
                  {activeMarker === marker.name.en && (
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
                        dir={isAr ? "rtl" : "ltr"}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -translate-x-full -translate-y-full -ml-[42px] -mt-[34px] whitespace-nowrap px-3 py-1.5 bg-white border border-[#2E368F] text-[#2E368F] text-[10px] font-semibold tracking-widest uppercase shadow-sm"
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

        <div
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
        </div>
      </div>
    </section>
  );
}
