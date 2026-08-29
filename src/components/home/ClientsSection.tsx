"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const logos: Record<string, { src: string; alt: string }> = {
  l1: { src: "/images/logos/l1.png", alt: "Saudi Aramco" },
  l2: { src: "/images/logos/l2.png", alt: "NEOM" },
  l3: { src: "/images/logos/l3.png", alt: "stc" },
  l4: { src: "/images/logos/l4.png", alt: "Ministry of Culture" },
  l5: { src: "/images/logos/l5.png", alt: "Saudi Central Bank" },
  l6: { src: "/images/logos/l6.png", alt: "SNB" },
  l7: { src: "/images/logos/l7.png", alt: "Ministry of Commerce" },
  l8: { src: "/images/logos/l8.png", alt: "Marafiq" },
  l9: { src: "/images/logos/l9.png", alt: "Royal Commission for AlUla and Neom" },
  l10: { src: "/images/logos/l10.png", alt: "Saudi Energy" },
  l11: { src: "/images/logos/l11.png", alt: "Infrastructure Partner 11" },
  l12: { src: "/images/logos/l12.png", alt: "Infrastructure Partner 12" },
  l13: { src: "/images/logos/l13.png", alt: "Infrastructure Partner 13" },
  l14: { src: "/images/logos/l14.png", alt: "Infrastructure Partner 14" },
  l15: { src: "/images/logos/l15.png", alt: "Infrastructure Partner 15" },
  l16: { src: "/images/logos/l16.png", alt: "Infrastructure Partner 16" },
  l17: { src: "/images/logos/l17.png", alt: "Infrastructure Partner 17" },
  l18: { src: "/images/logos/l18.png", alt: "Infrastructure Partner 18" },
  l19: { src: "/images/logos/l19.png", alt: "Infrastructure Partner 19" },
  l20: { src: "/images/logos/l20.png", alt: "Infrastructure Partner 20" },
  l21: { src: "/images/logos/l21.png", alt: "Government Partner 21" },
  l22: { src: "/images/logos/l22.png", alt: "Government Partner 22" },
  l23: { src: "/images/logos/l23.png", alt: "Government Partner 23" },
  l24: { src: "/images/logos/l24.png", alt: "Government Partner 24" },
  l25: { src: "/images/logos/l25.png", alt: "Government Partner 25" },
  l26: { src: "/images/logos/l26.png", alt: "Government Partner 26" },
  l27: { src: "/images/logos/l27.png", alt: "Government Partner 27" },
  l28: { src: "/images/logos/l28.png", alt: "Government Partner 28" },
  l29: { src: "/images/logos/l29.png", alt: "Government Partner 29" },
  l30: { src: "/images/logos/l30.png", alt: "Government Partner 30" },
  l31: { src: "/images/logos/l31.png", alt: "Technology Partner 31" },
  l32: { src: "/images/logos/l32.png", alt: "Technology Partner 32" },
  l33: { src: "/images/logos/l33.png", alt: "Technology Partner 33" },
  l34: { src: "/images/logos/l34.png", alt: "Technology Partner 34" },
  l35: { src: "/images/logos/l35.png", alt: "Technology Partner 35" },
  l36: { src: "/images/logos/l36.png", alt: "Technology Partner 36" },
  l37: { src: "/images/logos/l37.png", alt: "Technology Partner 37" },
  l38: { src: "/images/logos/l38.png", alt: "Technology Partner 38" },
  l39: { src: "/images/logos/l39.png", alt: "Technology Partner 39" },
  l40: { src: "/images/logos/l40.png", alt: "Technology Partner 40" },
  l41: { src: "/images/logos/l41.png", alt: "Banking & Telecommunications Partner 41" },
  l42: { src: "/images/logos/l42.png", alt: "Banking & Telecommunications Partner 42" },
  l43: { src: "/images/logos/l43.png", alt: "Banking & Telecommunications Partner 43" },
  l44: { src: "/images/logos/l44.png", alt: "Banking & Telecommunications Partner 44" },
  l45: { src: "/images/logos/l45.png", alt: "Banking & Telecommunications Partner 45" },
  l46: { src: "/images/logos/l46.png", alt: "Banking & Telecommunications Partner 46" },
  l47: { src: "/images/logos/l47.png", alt: "Banking & Telecommunications Partner 47" },
  l48: { src: "/images/logos/l48.png", alt: "Banking & Telecommunications Partner 48" },
  l49: { src: "/images/logos/l49.png", alt: "Banking & Telecommunications Partner 49" },
  l50: { src: "/images/logos/l50.png", alt: "Banking & Telecommunications Partner 50" },
};

const categories = [
  { name: "Featured Clients", logos: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"] },
  { name: "Infrastructure", logos: ["l11", "l12", "l13", "l14", "l15", "l16", "l17", "l18", "l19", "l20"] },
  { name: "Government", logos: ["l21", "l22", "l23", "l24", "l25", "l26", "l27", "l28", "l29", "l30"] },
  { name: "Technology", logos: ["l31", "l32", "l33", "l34", "l35", "l36", "l37", "l38", "l39", "l40"] },
  { name: "Banking & Telecommunications", logos: ["l41", "l42", "l43", "l44", "l45", "l46", "l47", "l48", "l49", "l50"] },
];

const LOGOS_PER_SLIDE = 10;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ClientsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const activeLogos = useMemo(
    () => categories.find((c) => c.name === activeCategory)?.logos ?? [],
    [activeCategory]
  );

  const slides = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < activeLogos.length; i += LOGOS_PER_SLIDE) {
      chunks.push(activeLogos.slice(i, i + LOGOS_PER_SLIDE));
    }
    return chunks.length ? chunks : [[]];
  }, [activeLogos]);

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          Trusted by leading organizations
        </h2>
      </div>

      {/* Tabs + Nav */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category.name === activeCategory;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {slides.length > 1 && (
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
            <button
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
            >
              <ArrowIcon />
            </button>
          </div>
        )}
      </div>

      {/* Logo slider */}
      <div className="w-full px-6 lg:px-16">
        <Swiper
          key={activeCategory}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={1}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-x-8 gap-y-12 py-4">
                {slide.map((id) => (
                  <div key={id} className="relative w-full h-[90px] lg:h-[110px] flex items-center justify-center">
                    <Image
                      src={logos[id].src}
                      alt={logos[id].alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
