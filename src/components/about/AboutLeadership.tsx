"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const people: Record<string, { name: string; role: string; image: string }> = {
  p1: { name: "Majed Al Faiya", role: "COO", image: "/images/abt-t1.png" },
  p2: { name: "Khalid Mengash", role: "CHRO", image: "/images/abt-t2.png" },
  p3: { name: "Hassan El Melegi", role: "CFO", image: "/images/abt-t3.png" },
  p4: { name: "Nahil Bakri", role: "Chief Audit Executive", image: "/images/abt-t4.png" },
  b1: { name: "Salah Al Sunaid", role: "Chairman", image: "/images/abt-t2.png" },
  b2: { name: "Majed Al Faiya", role: "Vice Chairman", image: "/images/abt-t1.png" },
  b3: { name: "Hassan El Melegi", role: "Board Member", image: "/images/abt-t3.png" },
  b4: { name: "Nahil Bakri", role: "Board Member", image: "/images/abt-t4.png" },
};

const categories = [
  { name: "Our Leaders", people: ["p1", "p2", "p3", "p4"] },
  { name: "Board Members", people: ["b1", "b2", "b3", "b4"] },
];

const PEOPLE_PER_SLIDE = 4;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutLeadership() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const activePeople = useMemo(
    () => categories.find((c) => c.name === activeCategory)?.people ?? [],
    [activeCategory]
  );

  const slides = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < activePeople.length; i += PEOPLE_PER_SLIDE) {
      chunks.push(activePeople.slice(i, i + PEOPLE_PER_SLIDE));
    }
    return chunks.length ? chunks : [[]];
  }, [activePeople]);

  const showNav = slides.length > 1;

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          The minds behind the mission
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

        {showNav && (
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

      {/* Leadership slider */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {slide.map((id) => {
                  const person = people[id];
                  return (
                    <div key={id} className="group relative w-full h-[380px] sm:h-[420px] lg:h-[460px] bg-gray-100 overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 bg-white/75 backdrop-blur-sm px-6 pt-4 pb-6 flex items-start justify-between gap-3">
                        <div>
                          <span className="block text-[13px] font-medium tracking-widest uppercase text-[#2E368F]">
                            {person.role}
                          </span>
                          <span className="block mt-2 text-lg text-gray-900 font-normal">{person.name}</span>
                        </div>
                        <span className="text-lg text-gray-400 font-light shrink-0">+</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>  
    </section>
  );
}
