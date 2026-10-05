"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Largest Single Project", value: 21, decimals: 0, unit: "B", suffix: "SAR", sub: "Oxagon Village · NEOM", progress: 100 },
  { label: "Recent Water Award", value: 8.5, decimals: 1, unit: "B", suffix: "SAR", sub: "Jubail-Buraydah pipeline · 2025", progress: 100 },
  { label: "Clean Energy Delivered", value: 1.1, decimals: 1, unit: "", suffix: "GW", sub: "Al Henakiyah Solar PV", progress: 100 },
  { label: "Pillar 01 · Saudi Vision 2030", value: 60, decimals: 0, unit: "k", suffix: "+", sub: "Via Nesma Group", progress: 100 },
  { label: "Local Content Score", value: 37, decimals: 0, unit: "", suffix: "%", sub: "Verified · FY 2024", progress: 37 },
  { label: "LC Target", value: 50, decimals: 0, unit: "", suffix: "%", sub: "By 2027 · on track", progress: 74 },
  { label: "Contractor Class", value: 1, decimals: 0, unit: "", suffix: "st", sub: "All activities · MOMRAH", progress: 100 },
  { label: "ISO Certifications", value: 4, decimals: 0, unit: "", suffix: "", sub: "9001 · 14001 · 45001 · 27001", progress: 100 },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1V10.5M8 10.5L4.5 7M8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.5 13H14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export function InvestorsKeyMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => metrics.map(() => 0));

  // Start the count-up + progress bars once the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1600;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(t);
      setCounts(metrics.map((m) => m.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight">
            Key metrics
          </h2>
          <a
            href="/documents/nit-fact-sheet.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-medium tracking-wide uppercase border border-[#2E368F] text-[#2E368F] hover:bg-[#2E368F]/5 transition-colors duration-300"
          >
            Download fact sheet (PDF)
            <DownloadIcon />
          </a>
        </div>

        <div className="mt-8 lg:mt-10 bg-[#2E368F] p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="border-t border-white/20 pt-7">
                <span className="block text-white/50 text-[13px] font-medium tracking-wider uppercase">
                  {metric.label}
                </span>

                <div className="font-[family-name:var(--font-anek-latin)] mt-4 flex items-baseline gap-2 text-white">
                  <span className="text-[46px] sm:text-[54px] font-light leading-none tabular-nums">
                    {counts[i].toFixed(metric.decimals)}
                    {metric.unit}
                  </span>
                  {metric.suffix && <span className="text-[22px] sm:text-[24px] font-normal opacity-80">{metric.suffix}</span>}
                </div>

                <span className="block mt-4 text-white/70 text-[16px] font-light">{metric.sub}</span>

                <div className="mt-5 h-px bg-white/20 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-px bg-[#81D1E8] transition-all duration-[1600ms] ease-out"
                    style={{ width: hasStarted ? `${metric.progress}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
