"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

const projects = [
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "Oxagon village", ar: "قرية أوكساغون" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/neom-white.png",
    logoAlt: { en: "NEOM", ar: "نيوم" },
    isVision2030: false,
    description: {
      en: [
        "Dedicated living community within NEOM's Oxagon, designed to house approximately 20,000 residents.",
        "The project integrates schools, healthcare, retail, hospitality, and walkable smart mobility systems, creating a sustainable urban environment that connects directly with Oxagon's industrial and innovation hub.",
      ],
      ar: [
        "مجتمع سكني متكامل داخل أوكساغون بمدينة نيوم، مصمم لاستيعاب نحو 20,000 نسمة.",
        "يضم المشروع مدارس ومرافق صحية ومنافذ تجارية وضيافة وأنظمة تنقل ذكية قابلة للمشي، لتشكيل بيئة حضرية مستدامة تتصل مباشرة بمركز أوكساغون الصناعي والابتكاري.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "400 MW Wind farm", ar: "مزرعة رياح بقدرة 400 ميغاواط" },
    location: { en: "Dumat Al Jandal", ar: "دومة الجندل" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/vis.png",
    logoAlt: { en: "Vision 2030", ar: "رؤية 2030" },
    isVision2030: true,
    description: {
      en: [
        "One of the largest wind energy facilities in the Middle East, delivering clean power to the national grid.",
        "The project supports the Kingdom's renewable energy targets under Vision 2030, reducing carbon emissions while strengthening long-term energy security.",
      ],
      ar: [
        "واحدة من أكبر منشآت طاقة الرياح في الشرق الأوسط، توفر طاقة نظيفة للشبكة الوطنية.",
        "يدعم المشروع أهداف المملكة للطاقة المتجددة ضمن رؤية 2030، ويسهم في خفض الانبعاثات الكربونية وتعزيز أمن الطاقة على المدى الطويل.",
      ],
    },
  },
  {
    category: { en: "TECHNOLOGY", ar: "التقنية" },
    title: { en: "Smart Grid Rollout", ar: "نشر الشبكة الذكية" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/neom-white.png",
    logoAlt: { en: "NEOM", ar: "نيوم" },
    isVision2030: false,
    description: {
      en: [
        "A nationwide smart grid deployment enabling real-time monitoring, automated fault detection, and demand-responsive distribution.",
        "The system lays the digital backbone for NEOM's fully connected, sustainable energy network.",
      ],
      ar: [
        "نشر وطني لشبكة ذكية يتيح المراقبة اللحظية، والكشف الآلي عن الأعطال، والتوزيع المتجاوب مع الطلب.",
        "يشكّل النظام العمود الرقمي لشبكة نيوم للطاقة المستدامة المتكاملة بالكامل.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "Water Desalination Plant", ar: "محطة تحلية المياه" },
    location: { en: "Jeddah", ar: "جدة" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    image: "/images/fp1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/vis.png",
    logoAlt: { en: "Vision 2030", ar: "رؤية 2030" },
    isVision2030: true,
    description: {
      en: [
        "A large-scale desalination facility securing sustainable freshwater supply for Jeddah and surrounding communities.",
        "Built with energy-efficient reverse osmosis technology, the plant supports the Kingdom's long-term water security strategy.",
      ],
      ar: [
        "منشأة تحلية واسعة النطاق تؤمّن إمدادات مستدامة من المياه العذبة لجدة والمجتمعات المحيطة بها.",
        "شُيّدت المحطة باستخدام تقنية التناضح العكسي الموفرة للطاقة، وتدعم استراتيجية المملكة طويلة المدى لأمن المياه.",
      ],
    },
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ProjectsSection() {
  const { language } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={`w-full overflow-x-hidden bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading + Nav */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-12 flex items-center justify-between">
        <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {language === "ar" ? "مشاريع مختارة" : "Featured projects"}
        </h2>

        <div className="flex items-center gap-4 lg:gap-6">
          <button
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
          >
            <ArrowIcon className={language === "ar" ? "" : "rotate-180"} />
          </button>
          <button
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`transition-colors duration-300 ${isEnd ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
          >
            <ArrowIcon className={language === "ar" ? "rotate-180" : ""} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full pl-6 lg:pl-16">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={24}
        >
          {projects.map((project, i) => {
            const title = language === "ar" ? project.title.ar : project.title.en;
            const category = language === "ar" ? project.category.ar : project.category.en;
            const location = language === "ar" ? project.location.ar : project.location.en;
            const client = language === "ar" ? project.client.ar : project.client.en;
            const logoAlt = language === "ar" ? project.logoAlt.ar : project.logoAlt.en;
            const description = language === "ar" ? project.description.ar : project.description.en;
            const readMore = language === "ar" ? "اقرأ المزيد" : "READ MORE";
            const locationLabel = language === "ar" ? "الموقع" : "Location";
            const clientLabel = language === "ar" ? "العميل" : "Client";
            const dir = language === "ar" ? "rtl" : "ltr";

            return (
            <SwiperSlide key={i} className="!w-[80vw] lg:!w-[1000px]">
              {/* Desktop: image with hover-swap + slide-up description panel */}
              <div className="hidden lg:block group relative w-full h-[700px] overflow-hidden">
                {/* Base image */}
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  className="object-cover animate-kenburns"
                />

                {/* Hover image — slides down from the top to cover the base image */}
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out overflow-hidden">
                  <Image
                    src={project.hoverImage}
                    alt={`${title} at night`}
                    fill
                    className="object-cover animate-kenburns"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/70" />

                <div dir={dir} className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                  {/* Top: category, title, meta */}
                  <div>
                    <span className="text-xs font-medium tracking-widest uppercase">
                      {category}
                    </span>
                    <h3 className="mt-3 text-[48px] font-normal leading-none">
                      {title}
                    </h3>

                    <div dir={dir} className="mt-6 grid grid-cols-[90px_auto] gap-y-2 text-xs font-medium tracking-wider uppercase">
                      <span className="opacity-70">{locationLabel}</span>
                      <span>{location}</span>
                      <span className="opacity-70">{clientLabel}</span>
                      <span>{client}</span>
                    </div>
                  </div>

                  {/* Bottom: logo + CTA (default state) */}
                  <div dir="ltr" className="flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex flex-col items-start gap-2">
                      <div className={`relative w-[90px] h-[90px] ${project.isVision2030 ? "bg-white/95 p-2" : ""}`}>
                        <Image src={project.logo} alt={logoAlt} fill className="object-contain" />
                      </div>
                    </div>

                    <Button variant="secondary">{readMore}</Button>
                  </div>
                </div>

                {/* Hover panel — description slides up from the bottom */}
                <div dir={dir} className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150 bg-white/15 backdrop-blur-md p-8 flex flex-col sm:flex-row sm:items-end gap-6 text-white">
                  <div className={`relative w-[90px] h-[90px] shrink-0 ${project.isVision2030 ? "bg-white/95 p-2" : ""}`}>
                    <Image src={project.logo} alt={logoAlt} fill className="object-contain" />
                  </div>

                  <div className="flex-1 space-y-3">
                    {description.map((paragraph, idx) => (
                      <p key={idx} className="text-base font-light leading-relaxed text-white/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="shrink-0">
                    <Button variant="secondary">{readMore}</Button>
                  </div>
                </div>
              </div>

              {/* Mobile/tablet: image on top, description panel always visible below (no hover) */}
              <div className="lg:hidden w-full">
                <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover animate-kenburns"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/70" />

                  <div dir={dir} className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                    <div>
                      <span className="text-xs font-medium tracking-widest uppercase">
                        {category}
                      </span>
                      <h3 className="mt-3 text-[28px] sm:text-[38px] font-normal leading-none">
                        {title}
                      </h3>
                    </div>

                    <div dir="ltr" className="flex items-end justify-between gap-4">
                      <div dir={dir} className="grid grid-cols-[80px_auto] gap-y-2 text-xs font-medium tracking-wider uppercase">
                        <span className="opacity-70">{locationLabel}</span>
                        <span>{location}</span>
                        <span className="opacity-70">{clientLabel}</span>
                        <span>{client}</span>
                      </div>
                      <div className={`relative w-[64px] h-[64px] shrink-0 ${project.isVision2030 ? "bg-white/95 p-2" : ""}`}>
                        <Image src={project.logo} alt={logoAlt} fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div dir={dir} className="bg-[#2E368F] p-6 sm:p-8 text-white">
                  <div className="space-y-3">
                    {description.map((paragraph, idx) => (
                      <p key={idx} className="text-sm font-light leading-relaxed text-white/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="secondary" iconOutline>{readMore}</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
