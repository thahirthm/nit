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
    key: "digital-transformation",
    label: { en: "Digital Transformation", ar: "التحول الرقمي" },
    projects: [
      {
        title: { en: "Jubail–Buraydah Pipeline", ar: "خط أنابيب الجبيل–بريدة" },
        description: {
          en: "587 km bidirectional water transmission. 650 km³/dy capacity.",
          ar: "خط نقل مياه ثنائي الاتجاه بطول 587 كم، بسعة 650 ألف م³ يوميًا.",
        },
        image: "/images/pr-1.png",
        badges: [
          { en: "PROJECT OF THE YEAR", ar: "مشروع العام" },
          { en: "WATER", ar: "المياه" },
        ],
        value: "8.5B SAR",
        year: "2025",
        scope: { en: "EPC", ar: "EPC" },
      },
      {
        title: { en: "Al Henakiyah Solar PV", ar: "محطة الحناكية للطاقة الشمسية" },
        description: {
          en: "1,100 MW solar PV. Powers ~87,700 homes annually in the kingdom.",
          ar: "محطة طاقة شمسية بقدرة 1,100 ميغاواط، تزود نحو 87,700 منزل سنويًا بالطاقة في المملكة.",
        },
        image: "/images/pr-2.png",
        badges: [
          { en: "PROJECT OF THE YEAR", ar: "مشروع العام" },
          { en: "ENERGY", ar: "الطاقة" },
        ],
        value: "3.75B SAR",
        year: "2023",
        scope: { en: "EPC", ar: "EPC" },
      },
      {
        title: { en: "Rumah 380kV BSP 9077", ar: "محطة رماح 380 كيلوفولت BSP 9077" },
        description: {
          en: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation",
          ar: "تصميم وتوريد وإنشاء وتركيب وتشغيل محطة رماح 380 كيلوفولت (A&B)",
        },
        image: "/images/pr-3.png",
        badges: [{ en: "COMMS", ar: "الاتصالات" }],
        value: "443M SAR",
        year: "2024",
        scope: { en: "Design+Build", ar: "تصميم وتنفيذ" },
      },
    ],
  },
  {
    key: "data-ai",
    label: { en: "Data & AI", ar: "البيانات والذكاء الاصطناعي" },
    projects: [
      {
        title: { en: "National AI Analytics Platform", ar: "منصة التحليلات الوطنية بالذكاء الاصطناعي" },
        description: {
          en: "A national-scale analytics platform powering predictive insights across government services.",
          ar: "منصة تحليلات على مستوى وطني تدعم الرؤى التنبؤية عبر الخدمات الحكومية.",
        },
        image: "/images/t-2.png",
        badges: [{ en: "DATA & AI", ar: "البيانات والذكاء الاصطناعي" }],
        value: "520M SAR",
        year: "2024",
        scope: { en: "EPC", ar: "EPC" },
      },
    ],
  },
  {
    key: "erp-solutions",
    label: { en: "ERP Solutions", ar: "حلول تخطيط موارد المؤسسات" },
    projects: [
      {
        title: { en: "Enterprise ERP Rollout", ar: "نشر نظام تخطيط موارد المؤسسات" },
        description: {
          en: "Unified ERP implementation across finance, procurement, and operations for a national enterprise.",
          ar: "تنفيذ موحّد لنظام تخطيط موارد المؤسسات يشمل الشؤون المالية والمشتريات والعمليات لمؤسسة وطنية.",
        },
        image: "/images/t-3.png",
        badges: [{ en: "ERP", ar: "تخطيط الموارد" }],
        value: "410M SAR",
        year: "2023",
        scope: { en: "Design+Build", ar: "تصميم وتنفيذ" },
      },
    ],
  },
  {
    key: "blockchain",
    label: { en: "Blockchain", ar: "تقنية البلوك تشين" },
    projects: [
      {
        title: { en: "Government Blockchain Registry", ar: "سجل البلوك تشين الحكومي" },
        description: {
          en: "A secure blockchain registry platform for verifiable government record-keeping.",
          ar: "منصة سجل بلوك تشين آمنة لحفظ السجلات الحكومية بشكل موثّق.",
        },
        image: "/images/t-6.png",
        badges: [{ en: "BLOCKCHAIN", ar: "البلوك تشين" }],
        value: "180M SAR",
        year: "2024",
        scope: { en: "EPC", ar: "EPC" },
      },
    ],
  },
  {
    key: "cloud-services",
    label: { en: "Cloud services", ar: "الخدمات السحابية" },
    projects: [
      {
        title: { en: "Tier III Data Center Build", ar: "إنشاء مركز بيانات من الفئة الثالثة" },
        description: {
          en: "Design and build of a Tier III data center supporting national cloud infrastructure.",
          ar: "تصميم وإنشاء مركز بيانات من الفئة الثالثة لدعم البنية التحتية السحابية الوطنية.",
        },
        image: "/images/t-4.png",
        badges: [{ en: "CLOUD", ar: "السحابة" }],
        value: "890M SAR",
        year: "2025",
        scope: { en: "Design+Build", ar: "تصميم وتنفيذ" },
      },
    ],
  },
  {
    key: "cybersecurity",
    label: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    projects: [
      {
        title: { en: "National SOC Deployment", ar: "نشر مركز عمليات الأمن الوطني" },
        description: {
          en: "Deployment of a 24/7 security operations center protecting critical national systems.",
          ar: "نشر مركز عمليات أمن يعمل على مدار الساعة لحماية الأنظمة الوطنية الحيوية.",
        },
        image: "/images/t-5.png",
        badges: [{ en: "CYBERSECURITY", ar: "الأمن السيبراني" }],
        value: "265M SAR",
        year: "2024",
        scope: { en: "EPC", ar: "EPC" },
      },
    ],
  },
  {
    key: "managed-services",
    label: { en: "Managed services", ar: "الخدمات المُدارة" },
    projects: [
      {
        title: { en: "Enterprise Managed IT Services", ar: "خدمات تقنية معلومات مُدارة للمؤسسات" },
        description: {
          en: "Ongoing managed IT operations and support contract across a multi-site enterprise network.",
          ar: "عقد تشغيل ودعم مستمر لتقنية المعلومات عبر شبكة مؤسسية متعددة المواقع.",
        },
        image: "/images/t-8.png",
        badges: [{ en: "MANAGED SERVICES", ar: "الخدمات المُدارة" }],
        value: "150M SAR",
        year: "2023",
        scope: { en: "O&M", ar: "تشغيل وصيانة" },
      },
    ],
  },
];

export function TechnologyProjects() {
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
