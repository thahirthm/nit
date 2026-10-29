"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Map1 } from "@/components/solutions/Map1";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type Region = {
  id: string;
  name: { en: string; ar: string };
  label: [number, number];
  stats: { count: string; label: { en: string; ar: string } }[];
};

const statLabels = {
  efficiency: { en: "Energy Efficiency", ar: "كفاءة الطاقة" },
  energy: { en: "Energy Solutions", ar: "حلول الطاقة" },
  ict: { en: "ICT", ar: "الاتصالات وتقنية المعلومات" },
  industrial: { en: "Industrial Installation", ar: "التركيبات الصناعية" },
  mep: { en: "MEP", ar: "الأعمال الكهروميكانيكية" },
  om: { en: "Operations & Maintenance (O&M)", ar: "التشغيل والصيانة" },
};

// Each row opens the projects list on /projects, pre-filtered to the closest tab + sector chip
// (keys from src/data/projects.ts). Energy and Industrial have no dedicated chip yet, so they
// land on Infrastructure → What's hot until those categories exist.
const statLinks: Record<string, string> = {
  [statLabels.efficiency.en]: "/projects?tab=Infrastructure&chip=whats-hot#projects-showcase",
  [statLabels.energy.en]: "/projects?tab=Infrastructure&chip=whats-hot#projects-showcase",
  [statLabels.ict.en]: "/projects?tab=Technology&chip=whats-hot#projects-showcase",
  [statLabels.industrial.en]: "/projects?tab=Infrastructure&chip=whats-hot#projects-showcase",
  [statLabels.mep.en]: "/projects?tab=Infrastructure&chip=water-mep#projects-showcase",
  [statLabels.om.en]: "/projects?tab=Infrastructure&chip=om#projects-showcase",
};

// Counts in statLabels order: efficiency, energy, ICT, industrial, MEP, O&M.
const toStats = (counts: number[]): Region["stats"] =>
  Object.values(statLabels).map((label, i) => ({ count: String(counts[i]).padStart(2, "0"), label }));

// Label positions are in Map1's own viewBox space (0 0 1035 621). Map1 groups its provinces into
// these five regions, so hovering any province of a region highlights the whole region.
const regions: Region[] = [
  { id: "northern", name: { en: "northern", ar: "الشمالية" }, label: [300, 125], stats: toStats([0, 3, 1, 0, 0, 1]) },
  { id: "eastern", name: { en: "eastern", ar: "الشرقية" }, label: [800, 350], stats: toStats([0, 28, 1, 2, 0, 1]) },
  { id: "southern", name: { en: "southern", ar: "الجنوبية" }, label: [470, 448], stats: toStats([0, 5, 1, 0, 0, 1]) },
  { id: "central", name: { en: "central", ar: "الوسطى" }, label: [490, 290], stats: toStats([5, 16, 2, 0, 1, 0]) },
  { id: "western", name: { en: "western", ar: "الغربية" }, label: [320, 305], stats: toStats([1, 10, 0, 1, 0, 0]) },
];

const regionTotal = (region: Region) => region.stats.reduce((sum, s) => sum + Number(s.count), 0);

const totalProjects = regions.reduce((sum, r) => sum + regionTotal(r), 0);

// Sector counts summed over every region — shown in the side panel until a region is picked.
const kingdomStats: Region["stats"] = toStats(
  Object.values(statLabels).map((_, i) => regions.reduce((sum, r) => sum + Number(r.stats[i].count), 0))
);


const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function SolutionsMap() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  // Click/tap pins a region so it stays active after the pointer leaves; hover previews on top of it.
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Region the visitor has pointed at, if any — until then the counter shows the kingdom total.
  const focusedRegion = useMemo(
    () => regions.find((r) => r.id === (hoveredRegion ?? selectedRegion)) ?? null,
    [hoveredRegion, selectedRegion]
  );
  // Sectors with no projects are left out of the list.
  const panelStats = (focusedRegion?.stats ?? kingdomStats).filter((s) => Number(s.count) > 0);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:site-gutter grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 lg:gap-6">
        {/* Map card */}
        <Reveal delay={0} duration={0.8} y={30} className="relative bg-[#2E368F] p-8 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden flex flex-col">
          <h3 className="relative z-10 text-white text-[20px] sm:text-[24px] lg:text-[28px] font-extralight leading-snug max-w-xs">
            {isAr ? "مشاريع نسما للبنية التحتية والتقنية الحالية في مختلف أنحاء المملكة" : "NIT current projects across the kingdom"}
          </h3>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[85%] max-w-[620px] aspect-[1035/621]">
              {/* Base map artwork — each province is its own path and highlights on hover/tap */}
              <Map1
                className="absolute inset-0 w-full h-full select-none"
                hoveredRegion={focusedRegion?.id ?? null}
                onHoverRegion={setHoveredRegion}
                onSelectRegion={setSelectedRegion}
              />

              {/* Hit-area overlay, aligned to the map's own viewBox (0 0 1035 621).
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
                  onClick={() => setSelectedRegion("eastern")}
                />
              </svg>

              {/* Region markers — a small dot with a soft, low-opacity pulse that runs on its own
                  (staggered per region), plus a ring and brighter name on the active region.
                  HTML rather than SVG text so the type keeps a readable size however small the map gets. */}
              {regions.map((region, i) => {
                const isActive = focusedRegion?.id === region.id;
                return (
                  <div
                    key={region.id}
                    className="absolute -translate-x-1/2 -translate-y-[8px] flex flex-col items-center pointer-events-none"
                    style={{ left: `${(region.label[0] / 1035) * 100}%`, top: `${(region.label[1] / 621) * 100}%` }}
                  >
                    <span className="relative flex items-center justify-center w-[16px] h-[16px]">
                      <span
                        className="absolute w-[6px] h-[6px] rounded-full bg-[#81D1E8] opacity-40 animate-ping"
                        style={{ animationDuration: "2.4s", animationDelay: `${i * 0.45}s` }}
                      />
                      <span
                        className={`absolute inset-0 rounded-full border border-[#81D1E8] transition-all duration-300 ease-out ${
                          isActive ? "opacity-70 scale-100" : "opacity-0 scale-50"
                        }`}
                      />
                      <span
                        className={`relative rounded-full bg-[#81D1E8] transition-all duration-300 ease-out ${
                          isActive ? "w-[8px] h-[8px]" : "w-[6px] h-[6px] opacity-80"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-[10px] sm:text-[12px] lg:text-[13px] mt-0.5 capitalize whitespace-nowrap transition-colors duration-300 ${
                        isActive ? "text-white font-normal" : "text-[#81D1E8] font-light"
                      }`}
                    >
                      {isAr ? region.name.ar : region.name.en}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kingdom-wide total until a region is hovered or tapped, then that region's count.
              Keyed so each change fades in. */}
          <div key={focusedRegion?.id ?? "total"} className="relative z-10 mt-auto animate-fade-in">
            <div className="text-white text-[42px] sm:text-[52px] lg:text-[64px] font-extralight leading-none">
              {focusedRegion ? regionTotal(focusedRegion) : totalProjects}
            </div>
            <div className="text-[#81D1E8] text-[15px] sm:text-[16px] font-light mt-1">
              {focusedRegion ? (
                isAr ? (
                  `المنطقة ${focusedRegion.name.ar} (قيد التنفيذ)`
                ) : (
                  <><span className="capitalize">{focusedRegion.name.en}</span> region (ongoing)</>
                )
              ) : isAr ? (
                "إجمالي المملكة (قيد التنفيذ)"
              ) : (
                "Overall Kingdom (ongoing)"
              )}
            </div>
          </div>
        </Reveal>

        {/* Info panel */}
        <Reveal delay={0.12} duration={0.8} y={30} className="bg-[#F5F5F5] p-8 sm:p-10 flex flex-col">
          <h3 className="text-gray-900 text-[20px] sm:text-[24px] font-extralight tracking-tight whitespace-nowrap mb-8 lg:mb-10">
            {focusedRegion
              ? isAr
                ? `المشاريع في المنطقة ${focusedRegion.name.ar}`
                : `Projects in the ${focusedRegion.name.en} area`
              : isAr
                ? "المشاريع في مختلف أنحاء المملكة"
                : "Projects across the kingdom"}
          </h3>

          <div className="flex flex-col divide-y divide-gray-300 border-t border-gray-300">
            {panelStats.map((item, i) => (
              <Link
                key={`${item.label.en}-${i}`}
                href={statLinks[item.label.en]}
                className="group flex items-center justify-between py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-normal w-6 shrink-0">{item.count}</span>
                  <span className="text-gray-600 text-[15px] sm:text-[16px] font-light transition-colors duration-300 group-hover:text-[#2E368F]">
                    {isAr ? item.label.ar : item.label.en}
                  </span>
                </div>
                <ArrowIcon
                  className={`text-gray-300 shrink-0 transition-all duration-300 group-hover:text-[#2E368F] ${
                    isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  }`}
                />
              </Link>
            ))}
            {/* Invisible filler rows so the panel always has room for every sector — keeps the
                section height fixed when a region with fewer sectors is hovered. */}
            {Array.from({ length: Object.keys(statLabels).length - panelStats.length }, (_, i) => (
              <div key={`filler-${i}`} aria-hidden className="invisible flex items-center justify-between py-4">
                <span className="text-[15px] sm:text-[16px] font-light">&nbsp;</span>
                <ArrowIcon className="shrink-0" />
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 lg:pt-14">
            {/* Jumps to the projects list — scrolls down on /projects, navigates there from /solutions */}
            <Button href="/projects#projects-showcase" variant="primary">
              {isAr ? "استكشفوا مشاريعنا" : "See our projects"}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
