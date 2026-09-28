"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const years = ["2020", "2021", "2022", "2023", "2024", "2025"];

const tabs = [
  {
    name: "Infrastructure",
    description:
      "NIT's recent project portfolio shows steady growth across critical infrastructure sectors, spanning power, water, communications, industrial systems, and operations support across Saudi Arabia.",
    values: [350, 750, 1150, 1650, 2100, 2450],
    axisTop: 2995,
    axisLabels: ["2995 M", "2410 M", "1825 M", "1240 M", "655 M"],
  },
  {
    name: "Technology",
    description:
      "NIT's technology portfolio has scaled rapidly, driven by digital transformation, cloud, cybersecurity, and managed services demand across the Kingdom.",
    values: [130, 280, 480, 690, 950, 1024],
    axisTop: 1288,
    axisLabels: ["1288 M", "1024 M", "760 M", "496 M", "232 M"],
  },
];

export function SolutionsGrowth() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);

  const activeData = useMemo(() => tabs.find((t) => t.name === activeTab) ?? tabs[0], [activeTab]);

  const points = useMemo(
    () =>
      activeData.values.map((value, i) => {
        const x = (i / (activeData.values.length - 1)) * 100;
        const y = 100 - (value / activeData.axisTop) * 100;
        return [x, y];
      }),
    [activeData]
  );

  const pathD = useMemo(
    () => points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x},${y}`).join(" "),
    [points]
  );

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
          Growth over the past 5 years
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: tabs, description, CTA — button pinned to the bottom, matching the chart card's height */}
        <div className="flex flex-col h-full">
          <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
            {tabs.map((tab) => {
              const isActive = tab.name === activeTab;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                    isActive
                      ? "bg-[#2E368F] text-white border-[#2E368F]"
                      : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed font-light text-[#727272] max-w-md">
            {activeData.description}
          </p>

          <div className="mt-auto pt-10 lg:pt-14">
            <Button href="/projects" variant="primary">
              See our projects
            </Button>
          </div>
        </div>

        {/* Right: growth chart */}
        <div ref={chartRef} className="bg-[#F5F5F5] p-8 sm:p-10">
          <h3 className="text-[#2E368F] text-[20px] sm:text-[24px] font-extralight tracking-tight mb-8">
            Trajectory of our growth
          </h3>

          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide uppercase text-gray-500">
              <span className="w-4 h-[1px] bg-[#2E368F]" /> Project value million (SAR)
            </div>
          </div>

          <div className="flex gap-4">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-[13px] text-gray-500 h-[220px] sm:h-[260px] pb-6">
              {activeData.axisLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>

            {/* Chart area */}
            <div className="relative flex-1 h-[220px] sm:h-[260px]">
              {/* Grid lines */}
              <div className="absolute inset-x-0 bottom-6 top-0 flex flex-col justify-between z-0">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-[1px] bg-gray-200" />
                ))}
              </div>

              <div className="absolute inset-x-0 top-0 bottom-6 z-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <marker id="growthArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path
                        d="M0,0 L10,5 L0,10 z"
                        fill="#2E368F"
                        className={`transition-opacity duration-300 ease-out ${chartVisible ? "opacity-100" : "opacity-0"}`}
                        style={{ transitionDelay: chartVisible ? "1200ms" : "0ms" }}
                      />
                    </marker>
                  </defs>
                  <path
                    d={pathD}
                    pathLength={1}
                    strokeWidth={0.6}
                    markerEnd="url(#growthArrow)"
                    className="stroke-[#2E368F] fill-none"
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: chartVisible ? 0 : 1,
                      transition: "stroke-dashoffset 1200ms ease-out",
                    }}
                  />
                  {points.slice(0, -1).map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="1"
                      className="fill-[#2E368F]"
                      style={{
                        opacity: chartVisible ? 1 : 0,
                        transition: `opacity 300ms ease-out ${260 + i * 200}ms`,
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="font-[family-name:var(--font-anek-latin)] absolute bottom-0 left-0 right-0 flex justify-between text-[13px] text-gray-500">
                {years.map((year) => (
                  <span key={year}>{year}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
