"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const metrics = [
  {
    label: { en: "Largest Single Project", ar: "أكبر مشروع منفرد" },
    value: 21,
    decimals: 0,
    unit: "B",
    suffix: "SAR",
    sub: { en: "Oxagon Village · NEOM", ar: "قرية أوكساغون · نيوم" },
    progress: 100,
  },
  {
    label: { en: "Recent Water Award", ar: "أحدث جائزة في قطاع المياه" },
    value: 8.5,
    decimals: 1,
    unit: "B",
    suffix: "SAR",
    sub: { en: "Jubail-Buraydah pipeline · 2025", ar: "خط أنابيب الجبيل–بريدة · 2025" },
    progress: 100,
  },
  {
    label: { en: "Clean Energy Delivered", ar: "الطاقة النظيفة المُنتجة" },
    value: 1.1,
    decimals: 1,
    unit: "",
    suffix: "GW",
    sub: { en: "Al Henakiyah Solar PV", ar: "محطة الحناكية للطاقة الشمسية الكهروضوئية" },
    progress: 100,
  },
  {
    label: { en: "Pillar 01 · Saudi Vision 2030", ar: "الركيزة 01 · رؤية السعودية 2030" },
    value: 60,
    decimals: 0,
    unit: "k",
    suffix: "+",
    sub: { en: "Via Nesma Group", ar: "عبر مجموعة نسما" },
    progress: 100,
  },
  {
    label: { en: "Local Content Score", ar: "نسبة المحتوى المحلي" },
    value: 37,
    decimals: 0,
    unit: "",
    suffix: "%",
    sub: { en: "Verified · FY 2024", ar: "مُعتمد · السنة المالية 2024" },
    progress: 37,
  },
  {
    label: { en: "LC Target", ar: "مستهدف المحتوى المحلي" },
    value: 50,
    decimals: 0,
    unit: "",
    suffix: "%",
    sub: { en: "By 2027 · on track", ar: "بحلول 2027 · على المسار الصحيح" },
    progress: 74,
  },
  {
    label: { en: "Contractor Class", ar: "فئة المقاول" },
    value: 1,
    decimals: 0,
    unit: "",
    suffix: "st",
    sub: { en: "All activities · MOMRAH", ar: "جميع الأنشطة · وزارة الشؤون البلدية والقروية والإسكان" },
    progress: 100,
  },
  {
    label: { en: "ISO Certifications", ar: "شهادات الآيزو" },
    value: 4,
    decimals: 0,
    unit: "",
    suffix: "",
    sub: { en: "9001 · 14001 · 45001 · 27001", ar: "9001 · 14001 · 45001 · 27001" },
    progress: 100,
  },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1V10.5M8 10.5L4.5 7M8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.5 13H14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export function InvestorsKeyMetrics() {
  const { language } = useLanguage();
  const isAr = language === "ar";
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
    <section
      ref={sectionRef}
      className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}
    >
      <div className="w-full px-6 lg:px-16">
        <div dir={isAr ? "rtl" : "ltr"} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight">
            {isAr ? "المؤشرات الرئيسية" : "Key metrics"}
          </h2>
          <a
            href="/documents/nit-fact-sheet.pdf"
            className="inline-flex items-center gap-2 self-start px-4 py-2.5 text-[12px] font-medium tracking-wide uppercase border border-[#2E368F] text-[#2E368F] hover:bg-[#2E368F]/5 transition-colors duration-300"
          >
            {isAr ? "تحميل صحيفة الحقائق (PDF)" : "Download fact sheet (PDF)"}
            <DownloadIcon />
          </a>
        </div>

        <div className="mt-8 lg:mt-10 bg-[#2E368F] p-8 sm:p-14 lg:p-16">
          <div dir="ltr" className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {metrics.map((metric, i) => (
              <div key={metric.label.en} dir={isAr ? "rtl" : "ltr"} className="border-t border-white/20 pt-7">
                <span className="block text-white/50 text-[13px] font-medium tracking-wider uppercase">
                  {isAr ? metric.label.ar : metric.label.en}
                </span>

                <div dir="ltr" className="font-[family-name:var(--font-anek-latin)] mt-4 flex items-baseline gap-2 text-white">
                  <span className="text-[46px] sm:text-[54px] font-light leading-none tabular-nums">
                    {counts[i].toFixed(metric.decimals)}
                    {metric.unit}
                  </span>
                  {metric.suffix && <span className="text-[22px] sm:text-[24px] font-normal opacity-80">{metric.suffix}</span>}
                </div>

                <span className="block mt-4 text-white/70 text-[16px] font-light">
                  {isAr ? metric.sub.ar : metric.sub.en}
                </span>

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
