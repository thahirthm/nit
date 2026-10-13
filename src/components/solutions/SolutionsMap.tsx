"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Map1 } from "@/components/solutions/Map1";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type Region = {
  id: string;
  name: { en: string; ar: string };
  dot: [number, number];
  stats: { count: string; label: { en: string; ar: string } }[];
};

const statLabels = {
  energy: { en: "Energy Solutions", ar: "حلول الطاقة" },
  water: { en: "Water", ar: "المياه" },
  industrial: { en: "Industrial Installation", ar: "التركيبات الصناعية" },
  om: { en: "O&M", ar: "التشغيل والصيانة" },
};

// Dot coordinates are in Map1's own viewBox space (0 0 1035 621), placed at
// the visually verified centre of each region's own fill path on that map.
const regions: Region[] = [
  {
    id: "northern",
    name: { en: "northern", ar: "الشمالية" },
    dot: [380, 100],
    stats: [
      { count: "09", label: statLabels.energy },
      { count: "02", label: statLabels.water },
      { count: "01", label: statLabels.industrial },
      { count: "01", label: statLabels.om },
    ],
  },
  {
    id: "eastern",
    name: { en: "eastern", ar: "الشرقية" },
    dot: [790, 340],
    stats: [
      { count: "21", label: statLabels.energy },
      { count: "01", label: statLabels.water },
      { count: "01", label: statLabels.industrial },
      { count: "02", label: statLabels.om },
    ],
  },
  {
    id: "southern",
    name: { en: "southern", ar: "الجنوبية" },
    dot: [400, 430],
    stats: [
      { count: "06", label: statLabels.energy },
      { count: "02", label: statLabels.water },
      { count: "01", label: statLabels.industrial },
      { count: "01", label: statLabels.om },
    ],
  },
  {
    id: "central",
    name: { en: "central", ar: "الوسطى" },
    dot: [470, 270],
    stats: [
      { count: "17", label: statLabels.energy },
      { count: "04", label: statLabels.water },
      { count: "02", label: statLabels.industrial },
      { count: "03", label: statLabels.om },
    ],
  },
  {
    id: "western",
    name: { en: "western", ar: "الغربية" },
    dot: [200, 170],
    stats: [
      { count: "14", label: statLabels.energy },
      { count: "03", label: statLabels.water },
      { count: "02", label: statLabels.industrial },
      { count: "01", label: statLabels.om },
    ],
  },
  {
    id: "southwestern",
    name: { en: "southwestern", ar: "الجنوبية الغربية" },
    dot: [290, 330],
    stats: [
      { count: "11", label: statLabels.energy },
      { count: "03", label: statLabels.water },
      { count: "01", label: statLabels.industrial },
      { count: "02", label: statLabels.om },
    ],
  },
  {
    id: "najran",
    name: { en: "najran", ar: "نجران" },
    dot: [520, 450],
    stats: [
      { count: "04", label: statLabels.energy },
      { count: "01", label: statLabels.water },
      { count: "00", label: statLabels.industrial },
      { count: "01", label: statLabels.om },
    ],
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function SolutionsMap() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const activeRegion = useMemo(
    () => regions.find((r) => r.id === hoveredRegion) ?? regions[1],
    [hoveredRegion]
  );

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 lg:gap-6">
        {/* Map card */}
        <Reveal delay={0} duration={0.8} y={30} className="relative bg-[#2E368F] p-8 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden flex flex-col">
          <h3 className="relative z-10 text-white text-[20px] sm:text-[24px] lg:text-[28px] font-extralight leading-snug max-w-xs">
            {isAr ? "مشروعات نسما للبنية التحتية والتقنية الحالية في مختلف أنحاء المملكة" : "NIT current projects across the kingdom"}
          </h3>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[85%] max-w-[620px] aspect-[1035/621]">
              {/* Base map artwork — each province is its own path and highlights on hover/tap */}
              <Map1
                className="absolute inset-0 w-full h-full select-none"
                hoveredRegion={hoveredRegion}
                onHoverRegion={setHoveredRegion}
              />

              {/* Location dots, aligned to the map's own viewBox (0 0 1035 621).
                  pointer-events: none on the root so this overlay doesn't block clicks/hover
                  on the province paths in Map1 underneath it — only the hit-circle below
                  (which sets its own pointer-events: all) should ever intercept. */}
              <svg
                viewBox="0 0 1035 621"
                className="absolute inset-0 w-full h-full overflow-visible"
                style={{ pointerEvents: "none" }}
              >
                {/* Reliable hit-area for "eastern" — it has no solid shape of its own (it's the
                    exposed gap in the base layer), so a dedicated hit-circle guarantees hover works
                    regardless of what decorative bits sit on top of it at any given point. */}
                <circle
                  cx={770}
                  cy={320}
                  r={120}
                  fill="transparent"
                  style={{ pointerEvents: "all", cursor: "pointer" }}
                  onMouseEnter={() => setHoveredRegion("eastern")}
                  onMouseLeave={() => setHoveredRegion((current) => (current === "eastern" ? null : current))}
                  onClick={() => setHoveredRegion("eastern")}
                />

                {regions.map((region) => {
                  const isHovered = hoveredRegion === region.id;
                  return (
                    <circle
                      key={region.id}
                      cx={region.dot[0]}
                      cy={region.dot[1]}
                      r={isHovered ? 7 : 5}
                      className="fill-[#81D1E8] transition-all duration-300 ease-out pointer-events-none"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="text-white text-[42px] sm:text-[52px] lg:text-[64px] font-extralight leading-none">25+</div>
            <div className="text-[#81D1E8] text-[15px] sm:text-[16px] font-light mt-1">
              {isAr ? "مشروعًا قيد التنفيذ" : "Active projects"}
            </div>
          </div>
        </Reveal>

        {/* Info panel */}
        <Reveal delay={0.12} duration={0.8} y={30} className="bg-[#F5F5F5] p-8 sm:p-10 flex flex-col">
          <h3 className="text-gray-900 text-[22px] sm:text-[26px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? `المشروعات في المنطقة ${activeRegion.name.ar}` : `Projects in the ${activeRegion.name.en} area`}
          </h3>

          <div className="flex flex-col divide-y divide-gray-300 border-t border-gray-300">
            {activeRegion.stats.map((item, i) => (
              <div key={`${item.label.en}-${i}`} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-normal w-6 shrink-0">{item.count}</span>
                  <span className="text-gray-600 text-[15px] sm:text-[16px] font-light">
                    {isAr ? item.label.ar : item.label.en}
                  </span>
                </div>
                <ArrowIcon className={`text-gray-300 shrink-0 ${isAr ? "rotate-180" : ""}`} />
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 lg:pt-14">
            <Button href="/projects" variant="primary">
              {isAr ? "استكشفوا مشروعاتنا" : "See our projects"}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
