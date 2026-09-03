"use client";

import { useEffect, useRef, useState } from "react";

const LINE_1 = "Engineering today's needs,";
const LINE_2 = "delivering tomorrow's infrat";
const TYPE_SPEED_MS = 45;

export function TypingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [line1Count, setLine1Count] = useState(0);
  const [line2Count, setLine2Count] = useState(0);

  // Start typing once the section scrolls into view
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Type line 1, then line 2
  useEffect(() => {
    if (!hasStarted) return;

    if (line1Count < LINE_1.length) {
      const id = setTimeout(() => setLine1Count((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(id);
    }
    if (line2Count < LINE_2.length) {
      const id = setTimeout(() => setLine2Count((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(id);
    }
  }, [hasStarted, line1Count, line2Count]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]"
    >
      <div className="w-full px-6 lg:px-16 !pr-0 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-10 items-center">
        {/* Left: typing text */}
        <h2 className="text-[36px] sm:text-[52px] lg:text-[80px] leading-[1.2] font-normal tracking-tight">
          <span className="text-gray-500">{LINE_1.slice(0, line1Count)}</span>
          <br />
          <span className="text-[#2E368F]">{LINE_2.slice(0, line2Count)}</span>
          <span
            className={`inline-block w-[3px] h-[0.9em] align-middle bg-[#2E368F] ml-1 ${
              hasStarted && (line1Count < LINE_1.length || line2Count < LINE_2.length)
                ? "animate-pulse"
                : "opacity-0"
            }`}
          />
        </h2>

        {/* Right: video */}
        <div className="relative w-full h-[420px] sm:h-[580px] lg:h-[760px] flex justify-end">
          <video
            src="/images/rotate.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
