"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { blogsPath, NEWS_PAGE_SIZE, type BlogPage, type Category, type Seed } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
import "swiper/css";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function NewsSection({
  initialCategories,
  initialPosts,
}: {
  initialCategories: Seed<Category[]>;
  initialPosts: Seed<BlogPage>;
}) {
  const { language } = useLanguage();
  const categories = useApiData<Category[]>(initialCategories.path, initialCategories).data ?? [];
  // Tabs come from the API; the first one is active until the user picks another.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const activeCategory = selectedCategory ?? categories[0]?.slug;
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredPosts = useApiData<BlogPage>(blogsPath(activeCategory, NEWS_PAGE_SIZE.home), initialPosts).data?.results ?? [];

  const showNav = filteredPosts.length > 3;

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <div className="w-full px-6 lg:site-gutter mb-8 lg:mb-10">
        <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {language === "ar" ? "الأخبار والإعلانات" : "News & announcements"}
        </h2>
      </div>

      {/* Tabs + Nav — follow the page direction: tabs start on the right in Arabic, arrows mirror to match the RTL slider */}
      <div dir={language === "ar" ? "rtl" : "ltr"} className="w-full px-6 lg:site-gutter mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category.slug === activeCategory;
            return (
              <button
                key={category.slug}
                onClick={() => {
                  setSelectedCategory(category.slug);
                  setActiveSlide(0);
                }}
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
      <div className="w-full px-6 lg:site-gutter">
        <Swiper
          key={`${activeCategory}-${language}`}
          // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
          // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
          dir={language === "ar" ? "rtl" : "ltr"}
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
          {filteredPosts.map((post) => {
            const title = post.title;
            return (
            <SwiperSlide key={post.slug}>
              <article className="group flex flex-col">
                <Link href={`/media/${post.slug}`} className="relative block w-full h-[240px] lg:h-[280px] overflow-hidden">
                  <Image quality={95}
                    src={post.image ?? "/images/blog1.png"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>

                <div dir={language === "ar" ? "rtl" : "ltr"} className="mt-5 flex flex-wrap items-center gap-2">
                  <span className={`${language === "ar" ? "" : "font-[family-name:var(--font-anek-latin)]"} px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]`}>
                    {post.formatted_date}
                  </span>
                  <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                    {post.category.name}
                  </span>
                  {post.location && (
                    <span className="px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
                      {post.location}
                    </span>
                  )}
                </div>

                <Link href={`/media/${post.slug}`}>
                  <h3 dir={language === "ar" ? "rtl" : "ltr"} className="mt-4 text-[26px] lg:text-[28px] font-light text-gray-900 leading-snug line-clamp-2">
                    {title}
                  </h3>
                </Link>

                <div className="mt-6">
                  <Button href={`/media/${post.slug}`} variant="secondary">{language === "ar" ? "اقرأ المزيد" : "READ MORE"}</Button>
                </div>
              </article>
            </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Dot pagination — mobile only (slidesPerView: 1, so each dot maps to one post) */}
        {filteredPosts.length > 1 && (
          <div className="flex sm:hidden items-center justify-start gap-2 mt-6">
            {filteredPosts.map((post, i) => (
              <button
                key={post.slug}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`transition-all duration-300 ${
                  i === activeSlide ? "w-1.5 h-1.5 bg-[#2E368F]" : "w-1.5 h-1.5 bg-[#2E368F]/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
