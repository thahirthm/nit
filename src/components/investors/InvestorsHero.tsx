"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const rotatingWords = [
  { en: "returns", ar: "العوائد" },
  { en: "scale", ar: "النمو" },
  { en: "energy", ar: "الطاقة" },
  { en: "water", ar: "المياه" },
  { en: "silicon", ar: "السيليكون" },
];

const chartPoints = [
  { time: "10:00", value: 27.9 },
  { time: "10:20", value: 27.75 },
  { time: "10:40", value: 27.8 },
  { time: "11:00", value: 27.72 },
  { time: "11:20", value: 27.68 },
  { time: "11:40", value: 27.6 },
  { time: "12:00", value: 27.58 },
  { time: "12:20", value: 27.55 },
  { time: "12:40", value: 27.6 },
  { time: "13:00", value: 27.65 },
  { time: "13:20", value: 27.78 },
  { time: "13:40", value: 27.82 },
  { time: "14:00", value: 27.74 },
  { time: "14:20", value: 27.6 },
];

const RiyalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 76" fill="none" className={className}>
    <g clipPath="url(#riyal-icon-clip)">
      <path
        d="M58.7639 48.4837C59.8496 46.0768 60.5672 43.4637 60.8422 40.724L42.9447 44.5305V37.213L58.7633 33.8514C59.849 31.4446 60.5667 28.8315 60.8416 26.0918L42.9441 29.895V3.57918C40.2017 5.11898 37.7662 7.16863 35.7863 9.58632V31.417L28.6285 32.9384V0C25.8861 1.53927 23.4506 3.58946 21.4707 6.00715V34.4592L5.45509 37.8625C4.36938 40.2694 3.65116 42.8825 3.37567 45.6222L21.4707 41.7767V50.9917L2.07834 55.1127C0.992622 57.5196 0.274946 60.1326 0 62.8724L20.2984 58.5587C21.9508 58.215 23.371 57.2381 24.2943 55.8937L28.0169 50.3747V50.3737C28.4034 49.8027 28.6285 49.1142 28.6285 48.3727V40.2553L35.7863 38.7339V53.3688L58.7633 48.4826L58.7639 48.4837Z"
        fill="currentColor"
      />
      <path
        d="M37.8654 67.7565C36.7797 70.1639 36.0621 72.7764 35.7871 75.5161L58.763 70.632C59.8487 68.2252 60.5659 65.6121 60.8413 62.8724L37.8654 67.7565Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="riyal-icon-clip">
        <rect width="60.8422" height="75.5161" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export function InvestorsHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [hovered, setHovered] = useState<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const maxValue = Math.max(...chartPoints.map((p) => p.value));
  const minValue = Math.min(...chartPoints.map((p) => p.value));
  const active = hovered !== null ? chartPoints[hovered] : null;

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div dir="ltr" className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Left: headline + copy */}
        <div dir={isAr ? "rtl" : "ltr"}>
          <h1 className="text-gray-900 text-[32px] sm:text-[44px] lg:text-[54px] font-extralight leading-[1.15] tracking-tight">
            {isAr ? (
              <>
                صُمم لتحقيق{" "}
                <span className="inline-block overflow-hidden align-bottom" style={{ lineHeight: 1 }}>
                  <span key={wordIndex} className="inline-block animate-word-in text-[#2E368F]">
                    {rotatingWords[wordIndex].ar}
                  </span>
                </span>
                <br />
                بُني لتحقيق مستهدفات رؤية 2030.
              </>
            ) : (
              <>
                Engineered for{" "}
                <span className="inline-block overflow-hidden align-bottom" style={{ lineHeight: 1 }}>
                  <span key={wordIndex} className="inline-block animate-word-in text-[#2E368F]">
                    {rotatingWords[wordIndex].en}
                  </span>
                </span>
                <br />
                Built for Vision 2030.
              </>
            )}
          </h1>

          <p className="mt-24 lg:mt-32 text-gray-900 text-[17px] sm:text-[19px] font-light">
            {isAr ? "نبني مستقبل البنية التحتية والتقنية" : "Building the future of infrastructure and technology"}
          </p>

          <p className="mt-6 text-gray-500 text-[16px] sm:text-[17px] leading-relaxed font-light max-w-lg">
            {isAr
              ? "الوصول إلى معلومات الشركة، والتقارير المالية، وتحديثات الحوكمة، وموارد المستثمرين."
              : "Access company information, financial reports, governance updates, and investor resources."}
          </p>
        </div>

        {/* Right: share details card */}
        <div className="bg-[#F7F7F7] p-6 sm:p-8">
          <h3 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] sm:text-[28px] font-extralight tracking-tight">
            {isAr ? "بيانات السهم اليوم" : "Today's share details"}
          </h3>
          <p className="mt-3 text-gray-500 text-[14px] sm:text-[15px] font-semibold tracking-wide uppercase">
            May 21, 2026
            <br />
            02:36 PM (GMT+3)
          </p>

          <div className="mt-5 pt-5 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <RiyalIcon className="w-7 h-9 sm:w-8 sm:h-10 text-gray-900" />
              <span className="font-[family-name:var(--font-anek-latin)] text-gray-900 text-[44px] sm:text-[54px] font-normal leading-none">
                {active ? active.value.toFixed(2) : "27.82"}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <RiyalIcon className="w-2.5 h-3 text-[#81D1E8]" />
              <span className="font-[family-name:var(--font-anek-latin)] text-[#81D1E8] text-[18px] font-normal">
                27.90
              </span>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-gray-200">
            <div
              className="relative h-[110px] flex items-end gap-1"
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tooltip */}
              {active && (
                <div
                  className="absolute -top-9 -translate-x-1/2 bg-[#2E368F] text-white text-[11px] font-medium px-2.5 py-1.5 whitespace-nowrap pointer-events-none z-10 shadow-lg"
                  style={{ left: `${((hovered! + 0.5) / chartPoints.length) * 100}%` }}
                >
                  {active.value.toFixed(2)} {isAr ? "ريال" : "SAR"}
                  <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-[#2E368F] rotate-45" />
                </div>
              )}

              {chartPoints.map((point, i) => {
                const range = maxValue - minValue || 1;
                const heightPct = 25 + ((point.value - minValue) / range) * 75;
                const isActive = hovered === i;
                return (
                  <div
                    key={point.time}
                    className="relative flex-1 h-full flex items-end cursor-pointer"
                    onMouseEnter={() => setHovered(i)}
                  >
                    <div
                      className="w-full transition-all duration-200 ease-out"
                      style={{
                        height: `${heightPct}%`,
                        background: isActive
                          ? "linear-gradient(to bottom, #2E368F, #2E368F)"
                          : "linear-gradient(to bottom, #2E368F, rgba(46,54,143,0.08))",
                        opacity: isActive ? 1 : 0.9,
                        transform: isActive ? "scaleX(1.15)" : "scaleX(1)",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-2 flex justify-between text-gray-400 text-[11px] font-light">
              <span>10:00</span>
              <span>12:00</span>
              <span>14:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
