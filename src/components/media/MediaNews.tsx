"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { newsPosts } from "@/data/newsPosts";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import "swiper/css";

const categories = [
  { key: "NEWS", en: "NEWS", ar: "أخبار" },
  { key: "ARTICLE", en: "ARTICLE", ar: "مقال" },
  { key: "ANNOUNCEMENT", en: "ANNOUNCEMENT", ar: "إعلان" },
] as const;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function MediaNews() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  // The category tabs act as a visual filter toggle; all posts stay visible
  // together, matching the design (every tab shows the same mixed set of cards).
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["key"]>("NEWS");
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          {/* Heading + Nav — kept LTR so the arrows stay on the same side as the rest of the site's sliders */}
          <div dir="ltr" className="flex items-center justify-between">
            <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
              {isAr ? "الأخبار والإعلانات" : "News & announcements"}
            </h2>

            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              <button
                aria-label={isAr ? "السابق" : "Previous"}
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
              >
                <ArrowIcon className={isAr ? "" : "rotate-180"} />
              </button>
              <button
                aria-label={isAr ? "التالي" : "Next"}
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
              >
                <ArrowIcon className={isAr ? "rotate-180" : ""} />
              </button>
            </div>
          </div>

          {/* Tabs — kept LTR so tab order never reorders by language */}
          <div dir="ltr" className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category.key === activeCategory;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                    isActive
                      ? "bg-[#2E368F] text-white border-[#2E368F]"
                      : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                  }`}
                >
                  {isAr ? category.ar : category.en}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Post slider */}
        <div className="mt-8 lg:mt-10">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveSlide(swiper.activeIndex);
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {newsPosts.map((post, i) => {
              const title = isAr ? post.title.ar : post.title.en;
              return (
                <SwiperSlide key={post.slug}>
                  <Reveal delay={(i % 3) * 0.1} duration={0.7} y={40} className="group flex flex-col">
                    <Link href={`/media/${post.slug}`} className="relative block w-full h-[280px] lg:h-[330px] overflow-hidden">
                      <Image quality={95}
                        src={post.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </Link>

                    <div dir="ltr" className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? post.date.ar : post.date.en}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? post.badge.ar : post.badge.en}
                      </span>
                      <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                        {isAr ? post.location.ar : post.location.en}
                      </span>
                    </div>

                    <Link href={`/media/${post.slug}`}>
                      <h3
                        dir={isAr ? "rtl" : "ltr"}
                        className="mt-4 text-[26px] lg:text-[28px] font-light text-gray-900 leading-snug line-clamp-2 group-hover:text-[#2E368F] transition-colors duration-300"
                      >
                        {title}
                      </h3>
                    </Link>

                    <div className="mt-6">
                      <Button href={`/media/${post.slug}`} variant="secondary">
                        {isAr ? "اقرأ المزيد" : "READ MORE"}
                      </Button>
                    </div>
                  </Reveal>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Dot pagination — mobile only (slidesPerView: 1, so each dot maps to one post) */}
          {newsPosts.length > 1 && (
            <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
              {newsPosts.map((post, i) => (
                <button
                  key={post.slug}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeSlide ? "w-5 h-1.5 bg-[#2E368F]" : "w-1.5 h-1.5 bg-[#2E368F]/25"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
