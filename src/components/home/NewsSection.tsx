"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

const categories = ["NEWS", "ARTICLE", "ANNOUNCEMENT"];
const CATEGORY_LABELS: Record<string, { en: string; ar: string }> = {
  NEWS: { en: "NEWS", ar: "الأخبار" },
  ARTICLE: { en: "ARTICLE", ar: "المقالات" },
  ANNOUNCEMENT: { en: "ANNOUNCEMENT", ar: "الإعلانات" },
};

const LOCATIONS: Record<string, { en: string; ar: string }> = {
  "Riyadh, Saudi Arabia": { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
  "Jeddah, Saudi Arabia": { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
  "Dammam, Saudi Arabia": { en: "Dammam, Saudi Arabia", ar: "الدمام، المملكة العربية السعودية" },
  "NEOM, Saudi Arabia": { en: "NEOM, Saudi Arabia", ar: "نيوم، المملكة العربية السعودية" },
};

const posts = [
  {
    title: { en: "NIT Awarded Major Infrastructure Contract in Riyadh", ar: "نسما تفوز بعقد بنية تحتية رئيسي في الرياض" },
    date: "MAR 12, 2026",
    category: "NEWS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/blog1.png",
  },
  {
    title: {
      en: "Nesma Infrastructure & Technology Signs New Contract with the STC in Jubail, valued at over 500M SAR",
      ar: "نسما للبنية التحتية والتقنية توقّع عقدًا جديدًا مع شركة الاتصالات السعودية (STC) في الجبيل بقيمة تتجاوز 500 مليون ريال",
    },
    date: "FEB 28, 2026",
    category: "ANNOUNCEMENT",
    location: "Riyadh, Saudi Arabia",
    image: "/images/blog2.png",
  },
  {
    title: {
      en: "Nesma Infrastructure & Technology Signs New Contract with the Saudi Electricity Company",
      ar: "نسما للبنية التحتية والتقنية توقّع عقدًا جديدًا مع الشركة السعودية للكهرباء",
    },
    date: "JAN 15, 2026",
    category: "ARTICLE",
    location: "Riyadh, Saudi Arabia",
    image: "/images/b3.png",
  },
  {
    title: { en: "NIT Expands Digital Transformation Services Across the Kingdom", ar: "نسما توسّع خدمات التحول الرقمي في جميع أنحاء المملكة" },
    date: "DEC 20, 2025",
    category: "NEWS",
    location: "Jeddah, Saudi Arabia",
    image: "/images/blog2.png",
  },
  {
    title: { en: "NIT and NEOM Partner on Smart Grid Rollout for Oxagon", ar: "نسما ونيوم تتعاونان في نشر الشبكة الذكية لأوكساغون" },
    date: "NOV 08, 2025",
    category: "ANNOUNCEMENT",
    location: "NEOM, Saudi Arabia",
    image: "/images/blog2.png",
  },
  {
    title: { en: "Inside NIT's Approach to Sustainable Water Infrastructure", ar: "نظرة على نهج نسما في البنية التحتية المستدامة للمياه" },
    date: "OCT 02, 2025",
    category: "ARTICLE",
    location: "Jeddah, Saudi Arabia",
    image: "/images/blog3.png",
  },
  {
    title: { en: "NIT Breaks Ground on New Substation Project in Dammam", ar: "نسما تضع حجر الأساس لمشروع محطة تحويل جديدة في الدمام" },
    date: "SEP 18, 2025",
    category: "NEWS",
    location: "Dammam, Saudi Arabia",
    image: "/images/b3.png",
  },
  {
    title: { en: "NIT Ranked Among Top Infrastructure Firms in the Kingdom", ar: "نسما من أبرز شركات البنية التحتية في المملكة" },
    date: "AUG 05, 2025",
    category: "NEWS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/blog3.png",
  },
  {
    title: { en: "NIT Launches Workforce Development Program for Local Engineers", ar: "نسما تطلق برنامج تطوير الكوادر للمهندسين المحليين" },
    date: "JUL 22, 2025",
    category: "NEWS",
    location: "Jeddah, Saudi Arabia",
    image: "/images/blog1.png",
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function NewsSection() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filteredPosts = useMemo(
    () => posts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  const showNav = filteredPosts.length > 3;

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {language === "ar" ? "الأخبار والإعلانات" : "News & announcements"}
        </h2>
      </div>

      {/* Tabs + Nav */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {language === "ar" ? CATEGORY_LABELS[category].ar : CATEGORY_LABELS[category].en}
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
              <ArrowIcon className={language === "ar" ? "" : "rotate-180"} />
            </button>
            <button
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
            >
              <ArrowIcon className={language === "ar" ? "rotate-180" : ""} />
            </button>
          </div>
        )}
      </div>

      {/* Posts slider */}
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
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredPosts.map((post, i) => {
            const title = language === "ar" ? post.title.ar : post.title.en;
            const location = language === "ar" ? LOCATIONS[post.location].ar : LOCATIONS[post.location].en;
            return (
            <SwiperSlide key={i}>
              <article className="group flex flex-col">
                <div className="relative w-full h-[280px] lg:h-[330px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div dir={language === "ar" ? "rtl" : "ltr"} className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                    {post.date}
                  </span>
                  <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                    {language === "ar" ? CATEGORY_LABELS[post.category].ar : CATEGORY_LABELS[post.category].en}
                  </span>
                  <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                    {location}
                  </span>
                </div>

                <h3 dir={language === "ar" ? "rtl" : "ltr"} className="mt-4 text-[26px] lg:text-[28px] font-light text-gray-900 leading-snug line-clamp-2">
                  {title}
                </h3>

                <div className="mt-6">
                  <Button variant="secondary">{language === "ar" ? "اقرأ المزيد" : "READ MORE"}</Button>
                </div>
              </article>
            </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
