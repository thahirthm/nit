"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { blogsPath, NEWS_PAGE_SIZE, type BlogPage, type Category, type Seed } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import "swiper/css";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function MediaNews({
  initialCategories,
  initialPosts,
}: {
  initialCategories: Seed<Category[]>;
  initialPosts: Seed<BlogPage>;
}) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const categories = useApiData<Category[]>(initialCategories.path, initialCategories).data ?? [];
  // Tabs come from the API; the first one is active until the user picks another.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const activeCategory = selectedCategory ?? categories[0]?.slug;
  const posts = useApiData<BlogPage>(blogsPath(activeCategory, NEWS_PAGE_SIZE.media), initialPosts).data?.results ?? [];
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          {/* Heading + Nav — follow the page direction: heading on the right in Arabic, arrows on the left */}
          <div dir={isAr ? "rtl" : "ltr"} className="flex items-center justify-between">
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

          {/* Tabs — start on the right in Arabic */}
          <div dir={isAr ? "rtl" : "ltr"} className="mt-8 flex flex-wrap gap-3">
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
        </Reveal>

        {/* Post slider */}
        <div className="mt-8 lg:mt-10">
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
            {posts.map((post, i) => {
              const title = post.title;
              return (
                <SwiperSlide key={post.slug}>
                  <Reveal delay={(i % 3) * 0.1} duration={0.7} y={40} className="group flex flex-col">
                    <Link href={`/media/${post.slug}`} className="relative block w-full h-[280px] lg:h-[330px] overflow-hidden">
                      <Image quality={95}
                        src={post.image ?? "/images/blog1.png"}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </Link>

                    <div dir={isAr ? "rtl" : "ltr"} className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-[family-name:var(--font-anek-latin)] px-3 py-1.5 text-[13px] font-medium tracking-wide uppercase bg-gray-100 text-[#2E368F]">
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
          {posts.length > 1 && (
            <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
              {posts.map((post, i) => (
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
