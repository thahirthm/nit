"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Map1 } from "@/components/solutions/Map1";

type Region = {
  id: string;
  name: string;
  dot: [number, number];
  stats: { count: string; label: string }[];
};

// Dot coordinates are in Map1's own viewBox space (0 0 1035 621), placed at
// the visually verified centre of each region's own fill path on that map.
const regions: Region[] = [
  {
    id: "northern",
    name: "northern",
    dot: [380, 100],
    stats: [
      { count: "09", label: "Energy Solutions" },
      { count: "02", label: "Water" },
      { count: "01", label: "Industrial Installation" },
      { count: "01", label: "O&M" },
    ],
  },
  {
    id: "eastern",
    name: "eastern",
    dot: [850, 260],
    stats: [
      { count: "21", label: "Energy Solutions" },
      { count: "01", label: "Water" },
      { count: "01", label: "Industrial Installation" },
      { count: "02", label: "O&M" },
    ],
  },
  {
    id: "southern",
    name: "southern",
    dot: [400, 430],
    stats: [
      { count: "06", label: "Energy Solutions" },
      { count: "02", label: "Water" },
      { count: "01", label: "Industrial Installation" },
      { count: "01", label: "O&M" },
    ],
  },
  {
    id: "central",
    name: "central",
    dot: [470, 270],
    stats: [
      { count: "17", label: "Energy Solutions" },
      { count: "04", label: "Water" },
      { count: "02", label: "Industrial Installation" },
      { count: "03", label: "O&M" },
    ],
  },
  {
    id: "western",
    name: "western",
    dot: [200, 170],
    stats: [
      { count: "14", label: "Energy Solutions" },
      { count: "03", label: "Water" },
      { count: "02", label: "Industrial Installation" },
      { count: "01", label: "O&M" },
    ],
  },
  {
    id: "southwestern",
    name: "southwestern",
    dot: [290, 330],
    stats: [
      { count: "11", label: "Energy Solutions" },
      { count: "03", label: "Water" },
      { count: "01", label: "Industrial Installation" },
      { count: "02", label: "O&M" },
    ],
  },
  {
    id: "najran",
    name: "najran",
    dot: [520, 450],
    stats: [
      { count: "04", label: "Energy Solutions" },
      { count: "01", label: "Water" },
      { count: "00", label: "Industrial Installation" },
      { count: "01", label: "O&M" },
    ],
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function SolutionsMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const activeRegion = useMemo(
    () => regions.find((r) => r.id === hoveredRegion) ?? regions[1],
    [hoveredRegion]
  );

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 lg:gap-6">
        {/* Map card */}
        <div className="relative bg-[#2E368F] p-8 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden flex flex-col">
          <h3 className="relative z-10 text-white text-[20px] sm:text-[24px] lg:text-[28px] font-extralight leading-snug max-w-xs">
            NIT current projects across the kingdom
          </h3>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[85%] max-w-[620px] aspect-[1035/621]">
              {/* Base map artwork — each province is its own path and highlights on hover/tap */}
              <Map1
                className="absolute inset-0 w-full h-full select-none"
                hoveredRegion={hoveredRegion}
                onHoverRegion={setHoveredRegion}
              />

              {/* Location dots, aligned to the map's own viewBox (0 0 1035 621) */}
              <svg viewBox="0 0 1035 621" className="absolute inset-0 w-full h-full overflow-visible">
                {/* Reliable hit-area for "eastern" — it has no solid shape of its own (it's the
                    exposed gap in the base layer), so a dedicated hit-circle guarantees hover works
                    regardless of what decorative bits sit on top of it at any given point. */}
                <circle
                  cx={850}
                  cy={260}
                  r={90}
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
            <div className="text-[#81D1E8] text-[15px] sm:text-[16px] font-light mt-1">Active projects</div>
          </div>
        </div>

        {/* Info panel */}
        <div className="bg-[#F5F5F5] p-8 sm:p-10 flex flex-col">
          <h3 className="text-gray-900 text-[22px] sm:text-[26px] font-extralight tracking-tight mb-8 lg:mb-10">
            Projects in the {activeRegion.name} area
          </h3>

          <div className="flex flex-col divide-y divide-gray-300 border-t border-gray-300">
            {activeRegion.stats.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-normal w-6 shrink-0">{item.count}</span>
                  <span className="text-gray-600 text-[15px] sm:text-[16px] font-light">{item.label}</span>
                </div>
                <ArrowIcon className="text-gray-300 shrink-0" />
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 lg:pt-14">
            <Button href="/projects" variant="primary">
              See our projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
