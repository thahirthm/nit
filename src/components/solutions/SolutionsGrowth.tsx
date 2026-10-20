"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const years = ["2020", "2021", "2022", "2023", "2024", "2025"];

const tabs = [
  {
    key: "infrastructure",
    name: { en: "Infrastructure", ar: "البنية التحتية" },
    description: {
      en: "NIT's recent project portfolio shows steady growth across critical infrastructure sectors, spanning power, water, communications, industrial systems, and operations support across Saudi Arabia.",
      ar: "تُظهر محفظة مشاريع نسما للبنية التحتية والتقنية الأخيرة نموًا مطّردًا عبر قطاعات البنية التحتية الحيوية، بما يشمل الطاقة والمياه والاتصالات والأنظمة الصناعية ودعم العمليات في جميع أنحاء المملكة العربية السعودية.",
    },
    values: [350, 750, 1150, 1650, 2100, 2450],
    axisTop: 2995,
    axisLabels: [2995, 2410, 1825, 1240, 655],
  },
  {
    key: "technology",
    name: { en: "Technology", ar: "التقنية" },
    description: {
      en: "NIT's technology portfolio has scaled rapidly, driven by digital transformation, cloud, cybersecurity, and managed services demand across the Kingdom.",
      ar: "شهدت محفظة نسما التقنية توسعًا سريعًا، مدفوعةً بالطلب المتزايد على التحول الرقمي والحوسبة السحابية والأمن السيبراني والخدمات المُدارة في جميع أنحاء المملكة.",
    },
    values: [130, 280, 480, 690, 950, 1024],
    axisTop: 1288,
    axisLabels: [1288, 1024, 760, 496, 232],
  },
];

export function SolutionsGrowth() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);
  // The line is drawn in a stretchable 0–100 box; dots and the arrowhead are fixed-size HTML
  // elements on top, so they always stay round / sharp. The measured size is only used for the
  // arrowhead's rotation angle.
  const plotRef = useRef<HTMLDivElement>(null);
  const [plotSize, setPlotSize] = useState({ w: 100, h: 100 });

  useEffect(() => {
    const el = plotRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setPlotSize({ w: width, h: height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeData = useMemo(() => tabs.find((t) => t.key === activeTab) ?? tabs[0], [activeTab]);

  // Points in percent of the plot area
  const points = useMemo(
    () =>
      activeData.values.map((value, i) => {
        const x = (i / (activeData.values.length - 1)) * 100;
        const y = 100 - (value / activeData.axisTop) * 100;
        return [x, y];
      }),
    [activeData]
  );

  // Direction of the last segment in real pixels, so the arrowhead follows the line
  const arrowAngle = useMemo(() => {
    const [x1, y1] = points[points.length - 2];
    const [x2, y2] = points[points.length - 1];
    const dx = ((x2 - x1) / 100) * plotSize.w;
    const dy = ((y2 - y1) / 100) * plotSize.h;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }, [points, plotSize]);
  const arrowTip = points[points.length - 1];

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
    <section id="our-growth" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? "النمو خلال السنوات الخمس الماضية" : "Growth over the past 5 years"}
          </h2>
        </Reveal>

        {/* RTL in Arabic: the text column moves to the right and the chart to the left */}
        <div dir={isAr ? "rtl" : "ltr"} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: tabs, description, CTA — button pinned to the bottom, matching the chart card's height */}
        <Reveal delay={0.1} duration={0.8} y={30} className="flex flex-col h-full">
          <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                    isActive
                      ? "bg-[#2E368F] text-white border-[#2E368F]"
                      : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                  }`}
                >
                  {isAr ? tab.name.ar : tab.name.en}
                </button>
              );
            })}
          </div>

          <p className="text-[15px] sm:text-[16px] leading-relaxed font-light text-[#727272] max-w-md">
            {isAr ? activeData.description.ar : activeData.description.en}
          </p>

          {/* Desktop only — on mobile the button sits below the chart instead */}
          <div className="hidden lg:block mt-auto pt-14">
            <Button href="/projects" variant="primary">
              {isAr ? "اطّلع على مشاريعنا" : "See our projects"}
            </Button>
          </div>
        </Reveal>

        {/* Right: growth chart */}
        <Reveal delay={0.2} duration={0.8} y={30}>
        <div ref={chartRef} className="bg-[#F5F5F5] p-8 sm:p-10">
          <h3 className="text-[#2E368F] text-[20px] sm:text-[24px] font-extralight tracking-tight mb-8">
            {isAr ? "مسار نمونا" : "Trajectory of our growth"}
          </h3>

          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide uppercase text-gray-500">
              <span className="w-4 h-[1px] bg-[#2E368F]" /> {isAr ? "قيمة المشاريع (مليون ريال)" : "Project value million (SAR)"}
            </div>
          </div>

          {/* Chart stays LTR so years read oldest → newest and the axis sits on the left */}
          <div dir="ltr" className="flex gap-4">
            {/* Y-axis labels — each centred on its grid line. An invisible copy of the widest label
                gives the column its width, since the visible labels are absolutely positioned. */}
            <div className="relative shrink-0 h-[220px] sm:h-[260px] text-[13px] text-gray-500">
              <span aria-hidden className="invisible block h-0 whitespace-nowrap">
                {activeData.axisLabels.reduce((a, b) => (String(b).length > String(a).length ? b : a))} {isAr ? "مليون" : "M"}
              </span>
              <div className="absolute inset-x-0 top-0 bottom-6">
                {activeData.axisLabels.map((label, i) => (
                  <span
                    key={label}
                    className="absolute left-0 -translate-y-1/2 whitespace-nowrap leading-none"
                    style={{ top: `${(i / (activeData.axisLabels.length - 1)) * 100}%` }}
                  >
                    {label} {isAr ? "مليون" : "M"}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart area */}
            <div className="relative flex-1 h-[220px] sm:h-[260px]">
              {/* Grid lines */}
              <div className="absolute inset-x-0 bottom-6 top-0 flex flex-col justify-between z-0">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-[1px] bg-gray-200" />
                ))}
              </div>

              <div ref={plotRef} className="absolute inset-x-0 top-0 bottom-6 z-10">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full overflow-visible"
                  style={{
                    clipPath: chartVisible ? "inset(-10px -10px -10px -10px)" : "inset(-10px 100% -10px -10px)",
                    transition: "clip-path 1200ms ease-out",
                  }}
                >
                  <path
                    d={pathD}
                    strokeWidth={1.2}
                    vectorEffect="non-scaling-stroke"
                    className="stroke-[#2E368F] fill-none"
                  />
                </svg>

                {/* Data dots — fixed-size so they never stretch */}
                {points.slice(0, -1).map(([cx, cy], i) => (
                  <span
                    key={i}
                    className="absolute w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full bg-[#2E368F]"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      opacity: chartVisible ? 1 : 0,
                      transition: `opacity 300ms ease-out ${260 + i * 200}ms`,
                    }}
                  />
                ))}

                {/* Arrowhead at the end of the line, rotated to the last segment's direction */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="absolute overflow-visible"
                  style={{
                    left: `${arrowTip[0]}%`,
                    top: `${arrowTip[1]}%`,
                    transform: `translate(-50%, -50%) rotate(${arrowAngle}deg)`,
                    opacity: chartVisible ? 1 : 0,
                    transition: "opacity 300ms ease-out",
                    transitionDelay: chartVisible ? "1200ms" : "0ms",
                  }}
                >
                  <path d="M1,1 L9,5 L1,9 z" fill="#2E368F" />
                </svg>
              </div>

              {/* X-axis labels — each centred under its data point */}
              <div className="font-[family-name:var(--font-anek-latin)] absolute bottom-0 left-0 right-0 h-4 text-[13px] text-gray-500">
                {years.map((year, i) => (
                  <span
                    key={year}
                    className="absolute bottom-0 -translate-x-1/2 whitespace-nowrap leading-none"
                    style={{ left: `${(i / (years.length - 1)) * 100}%` }}
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Mobile/tablet: CTA below the chart */}
        <Reveal delay={0.25} duration={0.8} y={24} className="lg:hidden">
          <Button href="/projects" variant="primary">
            {isAr ? "اطّلع على مشاريعنا" : "See our projects"}
          </Button>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
