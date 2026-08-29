"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function GlanceSection() {
  const cardClasses = "relative w-[85vw] md:w-[400px] lg:w-[480px] shrink-0 h-[500px] lg:h-[600px] overflow-hidden group";

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [jeddahTime, setJeddahTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

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

  // Measure how far the track needs to travel horizontally
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const distance = trackRef.current.scrollWidth - window.innerWidth;
      setMaxScroll(Math.max(distance, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Drive horizontal translation from vertical scroll position while the section is pinned
  useEffect(() => {
    if (maxScroll <= 0) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), maxScroll);
      setTranslateX(-progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white font-[family-name:var(--font-futura)]"
      style={{ height: `calc(100vh + ${maxScroll}px)` }}
    >
      {/* Pinned viewport: heading + track stay fixed on screen while the page scrolls past,
          driving the horizontal track below via translateX. Once maxScroll is exhausted,
          the section's extra height runs out and normal vertical scroll resumes. */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-[60px] lg:pt-[100px] pb-0">
        {/* Heading */}
        <div className="w-full px-6 lg:px-16 mb-8 lg:mb-12">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            NIT at a glance
          </h2>
        </div>

        {/* Horizontal Track - driven by page scroll, native overflow as touch/manual fallback */}
        <div
          ref={trackRef}
          className="flex items-start gap-6 px-6 lg:px-16 w-full will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {/* Card 1: 1988 */}
          <div className={`${cardClasses} bg-gray-200`}>
            <Image
              src="/images/glance-1.png"
              alt="NIT 1988"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <p className="text-lg lg:text-xl font-normal leading-relaxed max-w-[100%]">
                Over three decades delivering infrastructure and technology solutions across the Kingdom.
              </p>
              <h3 className="text-[60px] lg:text-[90px] font-normal tracking-tight self-end leading-none">
                1988
              </h3>
            </div>
          </div>

          {/* Card 2: 30+ Alliances */}
          <div className="relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 h-[370px] lg:h-[450px] overflow-hidden group bg-[#F9F9F9] flex flex-col justify-between p-8">
            <h3 className="text-[60px] lg:text-[80px] font-normal text-gray-900 leading-none">
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

            <p className="text-lg lg:text-xl text-gray-900 font-normal leading-snug max-w-[90%] z-10 relative">
              International Technology<br />Alliances
            </p>
          </div>

          {/* Card 3: Growth Chart */}
          <div className={`${cardClasses} bg-[#2E368F] p-8 flex flex-col text-white`}>
            <h4 className="text-lg font-normal mb-6">Growth Over Time</h4>

            <div className="flex flex-col gap-1 text-xs font-normal text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1px] bg-white"></span> PROJECTS
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#81D1E8]"></span> WORKFORCE
              </div>
            </div>

            <div className="flex-1 relative mt-auto flex flex-col justify-end pb-8">
              {/* Grid lines */}
              <div className="absolute inset-x-0 bottom-8 top-0 flex flex-col justify-between z-0">
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-[1px] bg-white/15" />
                ))}
              </div>

              {/* Chart SVG — lines always visible; each line highlights slightly on its own hover */}
              <div className="absolute inset-0 z-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full pb-8 overflow-visible">
                  <defs>
                    <marker id="glanceArrowWhite" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill="white" />
                    </marker>
                    <marker id="glanceArrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M0,0 L10,5 L0,10 z" fill="#81D1E8" />
                    </marker>
                  </defs>

                  {/* PROJECTS line */}
                  <path
                    d="M 0,100 L 18,86 L 32,64 L 54,38 L 81,18 L 95,3"
                    strokeWidth={0.4}
                    markerEnd="url(#glanceArrowWhite)"
                    className="stroke-white fill-none opacity-90 hover:opacity-100 hover:stroke-[0.7] transition-[stroke-width,opacity] duration-200 ease-out"
                  />
                  {/* WORKFORCE line */}
                  <path
                    d="M 0,100 L 16,83 L 37,69 L 57,41 L 83,19 L 97,3"
                    strokeWidth={0.4}
                    markerEnd="url(#glanceArrowBlue)"
                    className="stroke-[#81D1E8] fill-none opacity-90 hover:opacity-100 hover:stroke-[0.7] transition-[stroke-width,opacity] duration-200 ease-out"
                  />

                  {/* PROJECTS points */}
                  {[[18, 86], [32, 64], [54, 38], [81, 18]].map(([cx, cy], i) => (
                    <circle key={`p-${i}`} cx={cx} cy={cy} r="0.6" fill="white" />
                  ))}

                  {/* WORKFORCE points */}
                  {[[16, 83], [37, 69], [57, 41], [83, 19]].map(([cx, cy], i) => (
                    <circle key={`w-${i}`} cx={cx} cy={cy} r="0.6" fill="#81D1E8" />
                  ))}
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xl font-normal pt-2">
                <span>1988</span>
                <span>2010</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          {/* Card 4: 21B SAR & NEOM */}
          <div className="relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 h-[370px] lg:h-[450px] overflow-hidden group bg-[#F9F9F9] p-8 flex flex-col justify-between">
            <div className="flex flex-col items-start text-start">
              <h3 className="text-[50px] lg:text-[70px] font-normal text-gray-900 leading-none">
                21B SAR
              </h3>
              <p className="max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3 overflow-hidden text-lg lg:text-xl text-gray-500 font-normal transition-all duration-500 ease-out">
                Greatest Achievement
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] relative">
                <Image
                  src="/images/neom.png"
                  alt="NEOM"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 overflow-hidden text-lg lg:text-xl text-gray-900 font-normal transition-all duration-500 ease-out">
                Oxagon Village
              </p>
            </div>
          </div>

          {/* Card 5: Head Quarters */}
          <div className={`${cardClasses} bg-[#1a2332]`}>
            <Image
              src="/images/glance-time.png"
              alt="Head Quarters"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <h4 className="text-xl font-normal">Head Quarters</h4>

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
                {/* Clock markers */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                  <div key={deg} className="absolute w-full h-full" style={{ transform: `rotate(${deg}deg)` }}>
                    <div className="mx-auto w-[2px] h-[10px] bg-white/50 mt-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between w-full">
                <span className="text-lg lg:text-xl font-normal opacity-80">(GMT+3)</span>
                <span className="text-[40px] lg:text-[50px] font-normal leading-none">Jeddah,Ksa</span>
              </div>
            </div>
          </div>

          {/* Card 6: Vision 2030 */}
          <div className="relative w-[70vw] md:w-[320px] lg:w-[380px] shrink-0 h-[370px] lg:h-[450px] overflow-hidden group bg-[#F9F9F9] p-8 flex flex-col">
            <div className="flex justify-end mb-8 lg:mb-16">
              <Image
                src="/images/vis.png"
                alt="Vision 2030 - Kingdom of Saudi Arabia"
                width={112}
                height={76}
                className="w-[100px] lg:w-[120px] h-auto object-contain"
              />
            </div>

            <p className="text-lg lg:text-xl text-gray-900 font-normal leading-snug mb-auto max-w-[90%]">
              Targeting 50% local content by 2027, driving digital transformation across the Kingdom&apos;s critical infrastructure sectors.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-[#2E368F] font-medium mb-3">
                <span className="text-xl">37%</span>
                <span className="text-xl text-gray-400 font-normal">50%</span>
              </div>
              <div className="w-full h-[2px] bg-gray-200 relative mb-3">
                <div className="absolute left-0 top-0 h-full bg-[#2E368F] w-[37%]" />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>LC score 2024</span>
                <span>By 2027</span>
              </div>
            </div>
          </div>

          {/* Trailing spacer so the last card can rest fully in view */}
          <div className="w-[1px] shrink-0 lg:w-[2rem]" />
        </div>
      </div>
    </section>
  );
}
