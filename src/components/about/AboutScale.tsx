"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 21, decimals: 0, unit: "B", suffix: "SAR", label: { en: "Largest single project", ar: "أكبر مشروع منفرد" }, progress: 85 },
  { value: 8.5, decimals: 1, unit: "B", suffix: "SAR", label: { en: "Jubail–Buraydah pipeline", ar: "خط أنابيب الجبيل–بريدة" }, progress: 55 },
  { value: 1.1, decimals: 1, unit: "", suffix: "GW", label: { en: "Clean energy delivered", ar: "الطاقة النظيفة المقدمة" }, progress: 92 },
  { value: 60, decimals: 0, unit: "k", suffix: "+", label: { en: "In-Kingdom resources", ar: "الموارد داخل المملكة" }, progress: 80 },
  { value: 37, decimals: 0, unit: "", suffix: "%", label: { en: "Local content 2024", ar: "المحتوى المحلي 2024" }, progress: 37 },
  { value: 50, decimals: 0, unit: "", suffix: "%", label: { en: "LC target by 2027", ar: "هدف المحتوى المحلي بحلول 2027" }, progress: 50 },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function AboutScale() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0));

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
      setCounts(stats.map((s) => s.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted]);

  return (
    <section
      id="our-stats"
      ref={sectionRef}
      className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}
    >
      <div className="px-6 lg:px-16">
        <div className="bg-[#2E368F] p-8 sm:p-16 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            {/* Heading */}
            <Reveal delay={0} duration={0.8} y={30} dir={isAr ? "rtl" : "ltr"}>
              <h2 className="text-white text-[42px] sm:text-[56px] lg:text-[64px] font-extralight leading-[1.15] tracking-tight">
                {isAr ? <>نطاق<br />يتحدث عن نفسه.</> : <>Scale that<br />speaks.</>}
              </h2>
              <p className="mt-5 text-white/60 text-base sm:text-lg">
                {isAr ? "أكثر من 35 عامًا من النمو المستمر." : "35+ years of consistent growth."}
              </p>
            </Reveal>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label.en} delay={0.15 + i * 0.08} duration={0.7} y={30} dir={isAr ? "rtl" : "ltr"}>
                  <div dir="ltr" className="font-[family-name:var(--font-anek-latin)] flex items-baseline gap-2 text-white">
                    <span className="text-[40px] sm:text-[54px] lg:text-[64px] font-light leading-none tabular-nums">
                      {counts[i].toFixed(stat.decimals)}
                      {stat.unit}
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-normal opacity-80">{stat.suffix}</span>
                  </div>

                  <p className="mt-3 text-white/70 text-base sm:text-lg leading-snug min-h-[2.6em]">{isAr ? stat.label.ar : stat.label.en}</p>

                  <div className="mt-6 h-px bg-white/20 relative overflow-hidden">
                    {/* Fill grows from the start edge: left in English, right in Arabic */}
                    <div
                      className={`absolute top-0 h-px bg-[#81D1E8] transition-all duration-[1600ms] ease-out ${isAr ? "right-0" : "left-0"}`}
                      style={{ width: hasStarted ? `${stat.progress}%` : "0%" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
