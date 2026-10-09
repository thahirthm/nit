"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

const categories = [
  {
    key: "energy",
    label: { en: "Energy Solutions", ar: "حلول الطاقة" },
    projects: [
      {
        title: { en: "Jubail–Buraydah Pipeline", ar: "خط أنابيب الجبيل–بريدة" },
        description: {
          en: "587 km bidirectional water transmission. 650 km³/dy capacity.",
          ar: "نقل المياه عبر خط ثنائي الاتجاه بطول 587 كيلومترًا، وبطاقة استيعابية تبلغ 650 كيلومترًا مكعبًا يوميًا.",
        },
        image: "/images/s3.png",
        badges: [
          { en: "PROJECT OF THE YEAR", ar: "مشروع العام" },
          { en: "WATER", ar: "المياه" },
        ],
        value: "8.5B SAR",
        year: "2025",
        scope: { en: "EPC", ar: "الهندسة والمشتريات والإنشاءات (EPC)" },
      },
      {
        title: { en: "Al Henakiyah Solar PV", ar: "محطة الحناكية للطاقة الشمسية الكهروضوئية" },
        description: {
          en: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
          ar: "محطة للطاقة الشمسية الكهروضوئية بقدرة 1,100 ميجاواط، توفر الطاقة لنحو 87,700 منزل سنويًا في المملكة.",
        },
        image: "/images/s-1.png",
        badges: [
          { en: "PROJECT OF THE YEAR", ar: "مشروع العام" },
          { en: "ENERGY", ar: "الطاقة" },
        ],
        value: "3.75B SAR",
        year: "2023",
        scope: { en: "EPC", ar: "الهندسة والمشتريات والإنشاءات (EPC)" },
      },
      {
        title: { en: "Rumah 380kV BSP 9077", ar: "محطة Rumah 380 كيلوفولت BSP 9077" },
        description: {
          en: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation",
          ar: "تصميم محطة Rumah 380 كيلوفولت الفرعية (A وB)، وتوريد مكوناتها، وإنشاؤها، وتركيبها، وإدخالها حيز التشغيل.",
        },
        image: "/images/s-2.png",
        badges: [{ en: "COMMS", ar: "الاتصالات" }],
        value: "443M SAR",
        year: "2024",
        scope: { en: "Design+Build", ar: "التصميم والتنفيذ" },
      },
    ],
  },
  {
    key: "water",
    label: { en: "Water & MEP", ar: "المياه والكهروميكانيكية" },
    projects: [
      {
        title: { en: "Jeddah Water Transmission Line", ar: "خط نقل مياه جدة" },
        description: {
          en: "Large-diameter transmission pipeline securing water supply for Jeddah's growing districts.",
          ar: "خط نقل مياه كبير القطر يؤمّن إمدادات المياه للأحياء المتنامية في جدة.",
        },
        image: "/images/s3.png",
        badges: [{ en: "WATER", ar: "المياه" }],
        value: "1.2B SAR",
        year: "2024",
        scope: { en: "EPC", ar: "EPC" },
      },
      {
        title: { en: "Regional Pumping Station Upgrade", ar: "تحديث محطة الضخ الإقليمية" },
        description: {
          en: "Capacity expansion and modernization of a regional water pumping station network.",
          ar: "توسعة وتحديث شبكة محطات الضخ الإقليمية للمياه.",
        },
        image: "/images/s3.png",
        badges: [{ en: "WATER", ar: "المياه" }],
        value: "620M SAR",
        year: "2023",
        scope: { en: "Design+Build", ar: "تصميم وتنفيذ" },
      },
    ],
  },
  {
    key: "industrial",
    label: { en: "Industrial Solutions", ar: "الحلول الصناعية" },
    projects: [
      {
        title: { en: "Process Plant Refurbishment", ar: "تجديد مصنع العمليات" },
        description: {
          en: "Full refurbishment and efficiency enhancement of a continuous-process industrial facility.",
          ar: "تجديد شامل وتعزيز كفاءة منشأة صناعية ذات عمليات مستمرة.",
        },
        image: "/images/s-4.png",
        badges: [{ en: "INDUSTRIAL", ar: "صناعي" }],
        value: "950M SAR",
        year: "2024",
        scope: { en: "EPC", ar: "EPC" },
      },
    ],
  },
  {
    key: "communication",
    label: { en: "Communication", ar: "الاتصالات" },
    projects: [
      {
        title: { en: "National Fiber Backbone Expansion", ar: "توسعة العمود الفقري الوطني للألياف الضوئية" },
        description: {
          en: "Expansion of fiber optic backbone infrastructure connecting major regional hubs.",
          ar: "توسعة البنية التحتية للعمود الفقري للألياف الضوئية الرابطة بين المراكز الإقليمية الرئيسية.",
        },
        image: "/images/s-2.png",
        badges: [{ en: "COMMS", ar: "الاتصالات" }],
        value: "780M SAR",
        year: "2023",
        scope: { en: "EPC", ar: "EPC" },
      },
    ],
  },
  {
    key: "om",
    label: { en: "Operations & Maintenance", ar: "التشغيل والصيانة" },
    projects: [
      {
        title: { en: "Substation O&M Program", ar: "برنامج تشغيل وصيانة محطات التحويل" },
        description: {
          en: "Long-term operations and maintenance contract across a network of regional substations.",
          ar: "عقد تشغيل وصيانة طويل الأمد لشبكة من محطات التحويل الإقليمية.",
        },
        image: "/images/s5.png",
        badges: [{ en: "O&M", ar: "التشغيل والصيانة" }],
        value: "310M SAR",
        year: "2025",
        scope: { en: "O&M", ar: "تشغيل وصيانة" },
      },
    ],
  },
];

export function InfrastructureProjects() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const active = categories.find((c) => c.key === activeCategory) ?? categories[0];

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        {/* Heading + Nav — kept LTR so the arrows stay on the same side as the rest of the site's sliders */}
        <div dir="ltr" className="flex items-center justify-between">
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            {isAr ? "مشاريع مختارة" : "Featured projects"}
          </h2>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
              aria-label={isAr ? "السابق" : "Previous"}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={isAr ? "" : "rotate-180"}>
                <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <button
              aria-label={isAr ? "التالي" : "Next"}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={isAr ? "rotate-180" : ""}>
                <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs — kept LTR so tab order never reorders by language */}
        <div dir="ltr" className="mt-6 lg:mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category.key === activeCategory;
            return (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  swiperRef.current?.slideTo(0);
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {isAr ? category.label.ar : category.label.en}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <div className="mt-8 lg:mt-10">
          <Swiper
            key={activeCategory}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
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
            {active.projects.map((project, i) => (
              <SwiperSlide key={i} className="h-auto">
                <article className="h-full flex flex-col">
                  <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden shrink-0">
                    <Image src={project.image} alt={isAr ? project.title.ar : project.title.en} fill className="object-cover" />
                    <div dir="ltr" className="absolute top-4 left-4 flex items-center gap-2">
                      {project.badges.map((badge, bi) => (
                        <span
                          key={bi}
                          className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-white ${
                            bi === 0 && project.badges.length > 1 ? "bg-[#2E368F]/90" : "bg-[#81D1E8]/90 text-[#2E368F]"
                          }`}
                        >
                          {isAr ? badge.ar : badge.en}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 dir={isAr ? "rtl" : "ltr"} className="mt-5 text-[26px] sm:text-[28px] font-extralight tracking-tight text-gray-900">
                    {isAr ? project.title.ar : project.title.en}
                  </h3>
                  <p dir={isAr ? "rtl" : "ltr"} className="mt-2 min-h-[56px] sm:min-h-[60px] text-[17px] sm:text-[18px] text-gray-500 font-light leading-relaxed line-clamp-2">
                    {isAr ? project.description.ar : project.description.en}
                  </p>

                  <div dir="ltr" className="mt-auto pt-5">
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
                          {isAr ? "القيمة" : "Value"}
                        </span>
                        <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                          {project.value}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
                          {isAr ? "السنة" : "Year"}
                        </span>
                        <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                          {project.year}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-medium tracking-wider uppercase text-gray-400">
                          {isAr ? "النطاق" : "Scope"}
                        </span>
                        <span className="font-[family-name:var(--font-anek-latin)] block mt-1 text-[20px] font-normal text-[#2E368F]">
                          {isAr ? project.scope.ar : project.scope.en}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Button variant="secondary">{isAr ? "اقرأ المزيد" : "READ MORE"}</Button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
