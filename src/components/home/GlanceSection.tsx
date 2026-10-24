"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function GlanceSection() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const cardClasses = "relative w-[85vw] md:w-[400px] lg:w-[480px] shrink-0 h-[500px] lg:h-[600px] overflow-hidden group snap-start";

  // Desktop: scroll-jacked horizontal track (pin + translateX driven by vertical scroll).
  // Mobile/tablet: plain Swiper slider (native touch, no scroll hijacking) — the scroll-jack
  // approach was unreliable on mobile because dvh/svh shift while the address bar hides/shows
  // mid-gesture. Desktop browsers don't have that issue, so the original effect is kept there.
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const endSpacerRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [jeddahTime, setJeddahTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);
  const [visionActive, setVisionActive] = useState(false);
  const [achievementActive, setAchievementActive] = useState(false);

  // Play the growth-chart draw-in animation once the card scrolls into view.
  // Re-runs on `isDesktop` because that flag switches between two separate DOM trees
  // (desktop scroll-jack vs. mobile Swiper) — without this, the observer can end up
  // watching a stale, already-unmounted element from the branch that was active on
  // first mount, and chartVisible would never flip to true on the other branch.
  useEffect(() => {
    if (chartVisible) return;
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
  }, [isDesktop, chartVisible]);

  // Live clock — tracks the current time in Jeddah (GMT+3)
  useEffect(() => {
    const updateClock = () => {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Riyadh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).formatToParts(new Date());
      const get = (type: string) => Number(parts.find(p => p.type === type)?.value ?? 0);
      setJeddahTime({ hours: get("hour"), minutes: get("minute"), seconds: get("second") });
    };
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);

  const hourDeg = (jeddahTime.hours % 12) * 30 + jeddahTime.minutes * 0.5;
  const minuteDeg = jeddahTime.minutes * 6 + jeddahTime.seconds * 0.1;
  const secondDeg = jeddahTime.seconds * 6;

  // Measure how far the desktop track needs to travel horizontally (drives the scroll-jack pin)
  useEffect(() => {
    if (!isDesktop) return;

    const measure = () => {
      if (!trackRef.current || !endSpacerRef.current) return;
      // Measured from the trailing spacer's own position (offsetLeft ignores the translateX),
      // so the pin only releases once the full space after the last card is on screen.
      const spacer = endSpacerRef.current;
      const distance = isAr
        ? -spacer.offsetLeft
        : spacer.offsetLeft + spacer.offsetWidth - window.innerWidth;
      setMaxScroll(Math.max(distance, 0));
    };
    measure();
    window.addEventListener("resize", measure);

    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [isDesktop, isAr]);

  // Drive horizontal translation from vertical scroll position while the desktop section is pinned
  useEffect(() => {
    if (!isDesktop || maxScroll <= 0) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), maxScroll);
      // Arabic runs the track right-to-left, so it slides the other way (cards move right)
      setTranslateX(isAr ? progress : -progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop, maxScroll, isAr]);

  const heading = (
    <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
      {language === "ar" ? "نسما للبنية التحتية والتقنية في لمحة" : "NIT at a glance"}
    </h2>
  );

  // Card 1: 1988
  const card1 = (
    <div className={`${cardClasses} bg-gray-200`}>
      <Image quality={95}
        src="/images/glance-1.png"
        alt="NIT 1988"
        fill
        className="object-cover grayscale transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <p dir={language === "ar" ? "rtl" : "ltr"} className="text-lg lg:text-xl font-normal leading-relaxed max-w-[100%]">
          {language === "ar"
            ? "أكثر من ثلاثة عقود من تقديم حلول البنية التحتية والتقنية في مختلف أنحاء المملكة."
            : "Over three decades delivering infrastructure and technology solutions across the Kingdom."}
        </p>
        <h3 className="font-[family-name:var(--font-anek-latin)] text-[60px] lg:text-[90px] font-normal tracking-tight self-end leading-none">
          1988
        </h3>
      </div>
    </div>
  );

  // Card 2: 30+ Alliances
  const card2 = (
    <div className="relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 h-[370px] lg:h-[450px] overflow-hidden group snap-start bg-[#F9F9F9] flex flex-col justify-between p-8">
      {/* Always LTR: keeps the "+" after the number and the figure on the left in Arabic too */}
      <h3 dir="ltr" className="font-[family-name:var(--font-anek-latin)] text-[60px] lg:text-[80px] font-normal text-gray-900 leading-none text-left">
        30+
      </h3>

      {/* Decorative Static Globe */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-[320px] h-[320px] lg:w-[410px] lg:h-[413px] pointer-events-none opacity-50 group-hover:opacity-100 group-hover:-rotate-6 transition-all duration-500 ease-out">
        <svg xmlns="http://www.w3.org/2000/svg" width="410" height="413" viewBox="0 0 410 413" fill="none" className="w-full h-full">
          <g opacity="0.3">
            <circle cx="277.254" cy="281.346" r="187.193" transform="rotate(30.1973 277.254 281.346)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="277.256" cy="281.346" rx="64.5071" ry="187.193" transform="rotate(30.1973 277.256 281.346)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="277.259" cy="281.346" rx="187.193" ry="61.7119" transform="rotate(30.1973 277.259 281.346)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="277.259" cy="281.346" rx="187.193" ry="61.7119" transform="rotate(30.1973 277.259 281.346)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="308.293" cy="228.008" rx="172.861" ry="61.7119" transform="rotate(30.1973 308.293 228.008)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="339.847" cy="173.782" rx="122.866" ry="62.7405" transform="rotate(30.1973 339.847 173.782)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="355.372" cy="147.112" rx="83.3535" ry="31.8845" transform="rotate(30.1973 355.372 147.112)" stroke="#D2D2D2" strokeWidth="2.54973" />
            <ellipse cx="246.734" cy="333.794" rx="176.907" ry="62.7405" transform="rotate(30.1973 246.734 333.794)" stroke="#D2D2D2" strokeWidth="2.54973" />
          </g>
        </svg>
      </div>

      <p dir={language === "ar" ? "rtl" : "ltr"} className="text-lg lg:text-xl text-gray-900 font-normal leading-snug max-w-[90%] z-10 relative">
        {language === "ar" ? "أكثر من 30 تحالفًا تقنيًا دوليًا" : <>International Technology<br />Alliances</>}
      </p>
    </div>
  );

  // Card 3: Growth Chart
  const card3 = (
    <div ref={chartRef} className={`${cardClasses} bg-[#2E368F] p-8 flex flex-col text-white`}>
      <h4 dir={language === "ar" ? "rtl" : "ltr"} className="text-lg font-normal mb-6">{language === "ar" ? "النمو عبر السنوات" : "Growth Over Time"}</h4>

      <div dir={language === "ar" ? "rtl" : "ltr"} className="flex flex-col gap-1 text-xs font-normal text-white/80 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1px] bg-white"></span> {language === "ar" ? "المشاريع" : "PROJECTS"}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1px] bg-[#81D1E8]"></span> {language === "ar" ? "القوى العاملة" : "WORKFORCE"}
        </div>
      </div>

      <div className="flex-1 relative mt-auto flex flex-col justify-end pb-8">
        {/* Grid lines */}
        <div className="absolute inset-x-0 bottom-8 top-0 flex flex-col justify-between z-0">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="w-full h-[1px] bg-white/15" />
          ))}
        </div>

        {/* Chart SVG — lines draw in once the card scrolls into view; each line also highlights slightly on hover */}
        <div className="absolute inset-0 z-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full pb-8 overflow-visible">
            <defs>
              <marker id="glanceArrowWhite" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                <path
                  d="M0,0 L10,5 L0,10 z"
                  fill="white"
                  className={`transition-opacity duration-300 ease-out ${chartVisible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: chartVisible ? "1300ms" : "0ms" }}
                />
              </marker>
              <marker id="glanceArrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                <path
                  d="M0,0 L10,5 L0,10 z"
                  fill="#81D1E8"
                  className={`transition-opacity duration-300 ease-out ${chartVisible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: chartVisible ? "1500ms" : "0ms" }}
                />
              </marker>
            </defs>

            {/* PROJECTS line */}
            <path
              d="M 0,100 L 18,86 L 32,64 L 54,38 L 81,18 L 95,3"
              pathLength={1}
              strokeWidth={0.4}
              markerEnd="url(#glanceArrowWhite)"
              className="stroke-white fill-none opacity-90 hover:opacity-100 hover:stroke-[0.7] transition-[stroke-width,opacity] duration-200 ease-out [stroke-dasharray:1] group-hover:animate-[lineDraw_1.1s_ease-out]"
              style={{
                strokeDashoffset: chartVisible ? 0 : 1,
                transition: "stroke-dashoffset 1300ms ease-out, stroke-width 200ms ease-out, opacity 200ms ease-out",
              }}
            />
            {/* WORKFORCE line */}
            <path
              d="M 0,100 L 16,83 L 37,69 L 57,41 L 83,19 L 97,3"
              pathLength={1}
              strokeWidth={0.4}
              markerEnd="url(#glanceArrowBlue)"
              className="stroke-[#81D1E8] fill-none opacity-90 hover:opacity-100 hover:stroke-[0.7] transition-[stroke-width,opacity] duration-200 ease-out [stroke-dasharray:1] group-hover:animate-[lineDraw_1.3s_ease-out]"
              style={{
                strokeDashoffset: chartVisible ? 0 : 1,
                transition: "stroke-dashoffset 1500ms ease-out 100ms, stroke-width 200ms ease-out, opacity 200ms ease-out",
              }}
            />

            {/* PROJECTS points */}
            {[[18, 86], [32, 64], [54, 38], [81, 18]].map(([cx, cy], i) => (
              <circle
                key={`p-${i}`}
                cx={cx}
                cy={cy}
                r="0.6"
                fill="white"
                className={`transition-opacity duration-300 ease-out ${chartVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: chartVisible ? `${260 + i * 260}ms` : "0ms" }}
              />
            ))}

            {/* WORKFORCE points */}
            {[[16, 83], [37, 69], [57, 41], [83, 19]].map(([cx, cy], i) => (
              <circle
                key={`w-${i}`}
                cx={cx}
                cy={cy}
                r="0.6"
                fill="#81D1E8"
                className={`transition-opacity duration-300 ease-out ${chartVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: chartVisible ? `${360 + i * 300}ms` : "0ms" }}
              />
            ))}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="font-[family-name:var(--font-anek-latin)] absolute bottom-0 left-0 right-0 flex justify-between text-xl font-normal pt-2">
          <span>1988</span>
          <span>2010</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );

  // Card 4: 21B SAR & NEOM
  const card4 = (
    <div
      onClick={() => setAchievementActive((v) => !v)}
      className="relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 h-[370px] lg:h-[450px] overflow-hidden group snap-start bg-[#F9F9F9] p-8 flex flex-col justify-between"
    >
      {/* items-start/text-start follow dir: right edge in Arabic (RTL), left in English */}
      <div dir={language === "ar" ? "rtl" : "ltr"} className="flex flex-col items-start text-start">
        <h3 className={`font-normal text-gray-900 leading-tight ${language === "ar" ? "font-arabic text-[32px] lg:text-[40px]" : "font-[family-name:var(--font-anek-latin)] text-[50px] lg:text-[70px] leading-none"}`}>
          {language === "ar" ? "21 مليار ريال سعودي" : "21B SAR"}
        </h3>
        <p
          className={`max-h-0 opacity-0 overflow-hidden text-lg lg:text-xl text-gray-500 font-normal transition-all duration-500 ease-out group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3 ${achievementActive ? "max-h-10 opacity-100 mt-3" : ""
            }`}
        >
          {language === "ar" ? "أبرز إنجاز" : "Greatest Achievement"}
        </p>
      </div>

      <div dir={language === "ar" ? "rtl" : "ltr"} className="flex flex-col gap-3 items-start text-start">
        <div className="w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] relative">
          <Image quality={95}
            src="/images/neom.png"
            alt={language === "ar" ? "نيوم" : "NEOM"}
            fill
            className="object-contain"
          />
        </div>

        <p
          dir={language === "ar" ? "rtl" : "ltr"}
          className={`max-h-0 opacity-0 overflow-hidden text-lg lg:text-xl text-gray-900 font-normal transition-all duration-500 ease-out group-hover:max-h-10 group-hover:opacity-100 ${achievementActive ? "max-h-10 opacity-100" : ""
            }`}
        >
          {language === "ar" ? "قرية أوكساغون" : "Oxagon Village"}
        </p>
      </div>
    </div>
  );

  // Card 5: Head Quarters
  const card5 = (
    <div className={`${cardClasses} bg-[#1a2332]`}>
      <Image quality={95}
        src="/images/jd.png"
        alt="Head Quarters"
        fill
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <h4 dir={language === "ar" ? "rtl" : "ltr"} className="text-xl font-normal">{language === "ar" ? "المقر الرئيسي" : "Head Quarters"}</h4>

        {/* Clock Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border-[1px] border-white/20 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-white absolute z-10" />
          {/* Hour hand */}
          <div
            className="absolute w-[2px] h-[60px] bg-white/80 origin-bottom bottom-1/2 left-[calc(50%-1px)]"
            style={{ transform: `rotate(${hourDeg}deg)` }}
          />
          {/* Minute hand */}
          <div
            className="absolute w-[2px] h-[90px] bg-white origin-bottom bottom-1/2 left-[calc(50%-1px)]"
            style={{ transform: `rotate(${minuteDeg}deg)` }}
          />
          {/* Second hand */}
          <div
            className="absolute w-[1px] h-[95px] bg-[#81D1E8] origin-bottom bottom-1/2 left-1/2"
            style={{ transform: `rotate(${secondDeg}deg)` }}
          />
          {/* Hour markers */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
            <div key={deg} className="absolute w-full h-full" style={{ transform: `rotate(${deg}deg)` }}>
              <div className="mx-auto w-[2px] h-[10px] bg-white/50 mt-2" />
            </div>
          ))}
          {/* Minute markers — appear at low visibility on hover */}
          {Array.from({ length: 60 }, (_, i) => i * 6)
            .filter(deg => deg % 30 !== 0)
            .map(deg => (
              <div
                key={deg}
                className="absolute w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: `rotate(${deg}deg)` }}
              >
                <div className="mx-auto w-[1px] h-[6px] bg-white/30 mt-2" />
              </div>
            ))}
        </div>

        <div dir={language === "ar" ? "rtl" : "ltr"} className="flex items-end justify-between gap-3 w-full">
          <span className="text-lg lg:text-xl font-normal opacity-80 shrink-0">(GMT+3)</span>
          <span
            className={`font-normal leading-tight text-right ${language === "ar" ? "text-xl lg:text-2xl" : "text-[40px] lg:text-[50px] leading-none"
              }`}
          >
            {language === "ar" ? "جدة، المملكة العربية السعودية" : "Jeddah,Ksa"}
          </span>
        </div>
      </div>
    </div>
  );

  // Card 6: Vision 2030
  const card6 = (
    <div
      onClick={() => setVisionActive((v) => !v)}
      className={`relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 overflow-hidden group snap-start bg-[#F9F9F9] p-8 pb-10 flex flex-col ${language === "ar" ? "h-[480px] lg:h-[500px]" : "h-[430px] lg:h-[450px]"
        }`}
    >
      <div dir={language === "ar" ? "rtl" : "ltr"} className="flex justify-end mb-8 lg:mb-16">
        <Image quality={95}
          src="/images/vis.png"
          alt={language === "ar" ? "رؤية السعودية 2030 – المملكة العربية السعودية" : "Vision 2030 - Kingdom of Saudi Arabia"}
          width={112}
          height={76}
          className="w-[100px] lg:w-[120px] h-auto object-contain"
        />
      </div>

      <p dir={language === "ar" ? "rtl" : "ltr"} className="text-lg lg:text-xl text-gray-900 font-normal leading-snug mb-auto max-w-[90%]">
        {language === "ar"
          ? "نستهدف الوصول إلى نسبة 50% من المحتوى المحلي بحلول عام 2027، بما يسهم في دفع عجلة التحول الرقمي في قطاعات البنية التحتية الحيوية في المملكة."
          : "Targeting 50% local content by 2027, driving digital transformation across the Kingdom's critical infrastructure sectors."}
      </p>

      {/* Progress row stays LTR in both languages: 37% (and its label) on the left, 50% on the right,
          bar filling from the left */}
      <div dir="ltr" className="mt-8">
        <div className="font-[family-name:var(--font-anek-latin)] flex justify-between text-[#2E368F] font-medium mb-3">
          <span className="text-xl">37%</span>
          <span className="text-xl text-gray-400 font-normal">50%</span>
        </div>
        <div
          className={`w-full bg-gray-200 relative mb-3 transition-all duration-500 ease-out ${visionActive ? "h-[3px]" : "h-[2px] group-hover:h-[3px]"
            }`}
        >
          <div
            className={`absolute top-0 left-0 h-full bg-[#2E368F] transition-all duration-700 ease-out ${visionActive ? "w-[37%]" : "w-[4%] group-hover:w-[37%]"}`}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span dir={language === "ar" ? "rtl" : "ltr"}>{language === "ar" ? "نسبة المحتوى المحلي لعام 2024" : "LC score 2024"}</span>
          <span dir={language === "ar" ? "rtl" : "ltr"}>{language === "ar" ? "بحلول عام 2027" : "By 2027"}</span>
        </div>
      </div>
    </div>
  );

  const cards = [card1, card2, card3, card4, card5, card6];

  if (isDesktop) {
    return (
      <section
        ref={sectionRef}
        className={`relative w-full bg-white ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}
        style={{ height: `calc(100svh + ${maxScroll}px)` }}
      >
        {/* Pinned viewport — heading + track stay fixed on screen while the page scrolls past,
            driving the horizontal track below via translateX. Once maxScroll is exhausted,
            the section's extra height runs out and normal vertical scroll resumes to the next section.
            Uses svh (stable viewport height) rather than dvh to avoid address-bar resize jank —
            harmless here since this branch only renders on desktop (lg+), which has no dynamic
            address bar anyway, but keeps the measurement rock solid either way. */}
        <div className="sticky top-0 h-svh w-full flex flex-col justify-center overflow-hidden pt-[60px] lg:pt-[100px] pb-0">
          {/* Heading */}
          <div className="w-full px-6 lg:site-gutter mb-8 lg:mb-12">
            {heading}
          </div>

          {/* Horizontal Track — driven by page scroll via translateX.
              Follows the page direction: in Arabic the first card starts on the right and the
              track slides right as the page scrolls (translateX is positive, see onScroll). */}
          <div
            ref={trackRef}
            dir={isAr ? "rtl" : "ltr"}
            className="flex items-start gap-6 ps-6 lg:site-gutter-s w-full will-change-transform overflow-visible"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {/* shrink-0: otherwise the wrappers squeeze to fit w-full, the cards overflow them, and the
                spacer below lands inside the overflow instead of after the last card */}
            {cards.map((card, i) => (
              <div key={i} className="shrink-0">{card}</div>
            ))}

            {/* Trailing spacer — an empty, invisible card-sized block so the track can travel past the
                last card and leave a full card's width of space after it */}
            <div ref={endSpacerRef} aria-hidden="true" className="w-[50px] lg:w-[50px] shrink-0" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading + nav */}
      <div className="w-full px-6 lg:site-gutter mb-8 lg:mb-12 flex items-center justify-between">
        {heading}

        {/* Follows the slider direction: in Arabic "previous" sits on the right and the arrows mirror */}
        <div dir={isAr ? "rtl" : "ltr"} className="flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
          >
            <ArrowIcon className={isAr ? "" : "rotate-180"} />
          </button>
          <button
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
          >
            <ArrowIcon className={isAr ? "rotate-180" : ""} />
          </button>
        </div>
      </div>

      {/* Mobile/tablet slider — Swiper handles native touch/swipe scrolling, avoiding the
          scroll-jack pin used on desktop (unreliable on mobile due to dvh/svh shifting while
          the address bar hides/shows mid-gesture). */}
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Re-sync arrows after a remount (language switch) instead of keeping the previous state.
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={24}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          // Remount on language change so Swiper re-reads the direction (RTL in Arabic).
          key={language}
          dir={isAr ? "rtl" : "ltr"}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="!w-auto">
              {card}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
