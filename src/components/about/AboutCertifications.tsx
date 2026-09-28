"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type Item = { category: string; title: string; description: string; image: string };

const certifications: Item[] = [
  {
    category: "Government",
    title: "Ministry Of Municipalities & Housing",
    description: "Classified as a 1st Class Contractor across all activities within the KSA.",
    image: "/images/cr1.png",
  },
  {
    category: "Energy Utility",
    title: "Saudi Electricity Company",
    description: "EPC contractor for T&D substations & overhead transmission lines up to 380kV.",
    image: "/images/cr2.png",
  },
  {
    category: "Sustainability",
    title: "Saudi Energy Efficiency Center",
    description: "Approved ESCO for certified energy savings in KSA.",
    image: "/images/cr3.png",
  },
  {
    category: "ISO International",
    title: "Ministry Of Municipalities & Housing",
    description: "Certified in quality, environment, safety & information security.",
    image: "/images/cr4.png",
  },
  {
    category: "Digital",
    title: "Digital Government Authority",
    description: "Fully compliant with KSA's digital transformation agenda.",
    image: "/images/cr5.png",
  },
  {
    category: "Localization",
    title: "LC & Govt. Procurement Authority",
    description: "Targeting 50% by 2027, supporting KSA localization goals.",
    image: "/images/cr6.png",
  },
];

const accreditations: Item[] = [
  {
    category: "Simon Company",
    title: "Installer Certification (2021)",
    description: "Classified as a 1st Class Contractor across all activities within the KSA.",
    image: "/images/ar1.png",
  },
  {
    category: "Energy Utility",
    title: "Saudi Electricity Company",
    description: "EPC contractor for T&D substations & overhead transmission lines up to 380kV.",
    image: "/images/ar2.png",
  },
  {
    category: "Sustainability",
    title: "Saudi Energy Efficiency Center",
    description: "Approved ESCO for certified energy savings in KSA.",
    image: "/images/ar3.png",
  },
  {
    category: "ISO International",
    title: "Ministry of Municipalities & Housing",
    description: "Certified in quality, environment, safety & information security.",
    image: "/images/ar4.png",
  },
  {
    category: "Digital",
    title: "Digital Government Authority",
    description: "Fully compliant with KSA's digital transformation agenda.",
    image: "/images/ar5.png",
  },
  {
    category: "Localization",
    title: "LC & Govt. Procurement Authority",
    description: "Targeting 50% by 2027, supporting KSA localization goals.",
    image: "/images/ar6.png",
  },
];

const tabs = [
  { name: "Certifications", items: certifications },
  { name: "Accreditations", items: accreditations },
];

const ITEMS_PER_SLIDE = 6;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutCertifications() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const activeItems = useMemo(
    () => tabs.find((t) => t.name === activeTab)?.items ?? [],
    [activeTab]
  );

  const slides = useMemo(() => {
    const chunks: Item[][] = [];
    for (let i = 0; i < activeItems.length; i += ITEMS_PER_SLIDE) {
      chunks.push(activeItems.slice(i, i + ITEMS_PER_SLIDE));
    }
    return chunks.length ? chunks : [[]];
  }, [activeItems]);

  const showNav = slides.length > 1;

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          Certifications &amp; accreditations
        </h2>
      </div>

      {/* Tabs + Nav */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const isActive = tab.name === activeTab;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {tab.name}
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

      {/* Grid slider */}
      <div className="w-full px-6 lg:px-16">
        <Swiper
          key={activeTab}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {slide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-gray-50 p-5 sm:p-6">
                    <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#2E368F] flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-contain w-4/5 h-4/5"
                      />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#2E368F] mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-gray-900 text-base sm:text-lg font-normal mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
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
