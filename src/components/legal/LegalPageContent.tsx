"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { LegalSection, Localized } from "@/data/legalTypes";

const HEADER_OFFSET = 120;

export function LegalPageContent({
  title,
  intro,
  sections,
}: {
  title: Localized;
  intro?: Localized;
  sections: LegalSection[];
}) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `-${HEADER_OFFSET + 20}px 0px -70% 0px`, threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] pb-16 lg:pb-24 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h1 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[32px] sm:text-[44px] lg:text-[54px] font-extralight leading-[1.15] tracking-tight">
          {isAr ? title.ar : title.en}
        </h1>

        {intro && (
          <p dir={isAr ? "rtl" : "ltr"} className="mt-6 max-w-2xl text-gray-500 text-[17px] sm:text-[18px] leading-relaxed font-light">
            {isAr ? intro.ar : intro.en}
          </p>
        )}

        <div className="mt-8 lg:mt-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 lg:gap-16">
          {/* Sidebar nav — on mobile/tablet this becomes a sticky, horizontally
              scrollable tab bar pinned under the header; on desktop it's the
              usual sticky vertical list. */}
          <nav
            dir={isAr ? "rtl" : "ltr"}
            className="sticky top-0 z-30 -mx-6 bg-white overflow-x-auto [&::-webkit-scrollbar]:hidden lg:mx-0 lg:bg-transparent lg:overflow-visible lg:top-[140px] lg:self-start"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-nowrap gap-x-6 px-6 lg:flex-col lg:gap-y-4 lg:px-0">
              {sections.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`shrink-0 whitespace-nowrap text-left text-[15px] py-3 border-b-2 transition-colors duration-200 lg:py-0 lg:border-0 ${
                      isAr ? "text-right" : ""
                    } ${
                      isActive
                        ? "text-[#2E368F] font-medium border-[#2E368F]"
                        : "text-gray-400 hover:text-gray-600 font-light border-transparent"
                    }`}
                  >
                    {isAr ? s.heading.ar : s.heading.en}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Content */}
          <div
            dir={isAr ? "rtl" : "ltr"}
            className={`space-y-14 border-gray-200 ${isAr ? "lg:border-r lg:pr-16" : "lg:border-l lg:pl-16"}`}
          >
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => {
                  sectionRefs.current[s.id] = el;
                }}
                className="scroll-mt-[140px]"
              >
                <h2 className="text-gray-900 text-[22px] sm:text-[24px] font-normal tracking-tight mb-4">
                  {isAr ? s.heading.ar : s.heading.en}
                </h2>

                <div className="space-y-4">
                  {s.blocks.map((block, i) =>
                    block.type === "p" ? (
                      <p key={i} className="text-gray-500 text-[16px] sm:text-[17px] leading-relaxed font-light">
                        {isAr ? block.ar : block.en}
                      </p>
                    ) : (
                      <ul
                        key={i}
                        className={`list-disc text-gray-500 text-[16px] sm:text-[17px] leading-relaxed font-light space-y-1.5 marker:text-gray-300 ${
                          isAr ? "pr-5" : "pl-5"
                        }`}
                      >
                        {(isAr ? block.ar : block.en).map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
