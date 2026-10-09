"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

type Item = { category: { en: string; ar: string }; title: { en: string; ar: string }; description: { en: string; ar: string }; image: string };

const certifications: Item[] = [
  {
    category: { en: "Government", ar: "حكومي" },
    title: { en: "Ministry Of Municipalities & Housing", ar: "وزارة الشؤون البلدية والقروية والإسكان" },
    description: { en: "Classified as a 1st Class Contractor across all activities within the KSA.", ar: "مصنفة كمقاول من الدرجة الأولى في جميع الأنشطة داخل المملكة العربية السعودية." },
    image: "/images/cr1.png",
  },
  {
    category: { en: "Energy Utility", ar: "مرفق الطاقة" },
    title: { en: "Saudi Electricity Company", ar: "الشركة السعودية للكهرباء" },
    description: { en: "EPC contractor for T&D substations & overhead transmission lines up to 380kV.", ar: "مقاول EPC لمحطات النقل والتوزيع وخطوط النقل الهوائية حتى 380 كيلوفولت." },
    image: "/images/cr2.png",
  },
  {
    category: { en: "Sustainability", ar: "الاستدامة" },
    title: { en: "Saudi Energy Efficiency Center", ar: "المركز السعودي لكفاءة الطاقة" },
    description: { en: "Approved ESCO for certified energy savings in KSA.", ar: "شركة خدمات طاقة معتمدة لتوفير طاقة موثّق في المملكة العربية السعودية." },
    image: "/images/cr3.png",
  },
  {
    category: { en: "ISO International", ar: "ISO الدولية" },
    title: { en: "Ministry Of Municipalities & Housing", ar: "وزارة الشؤون البلدية والقروية والإسكان" },
    description: { en: "Certified in quality, environment, safety & information security.", ar: "حاصلة على شهادات في الجودة والبيئة والسلامة وأمن المعلومات." },
    image: "/images/cr4.png",
  },
  {
    category: { en: "Digital", ar: "رقمي" },
    title: { en: "Digital Government Authority", ar: "هيئة الحكومة الرقمية" },
    description: { en: "Fully compliant with KSA's digital transformation agenda.", ar: "ملتزمة بالكامل بأجندة التحول الرقمي في المملكة العربية السعودية." },
    image: "/images/cr5.png",
  },
  {
    category: { en: "Localization", ar: "التوطين" },
    title: { en: "LC & Govt. Procurement Authority", ar: "المحتوى المحلي وهيئة المشتريات الحكومية" },
    description: { en: "Targeting 50% by 2027, supporting KSA localization goals.", ar: "تستهدف 50% بحلول 2027، دعمًا لأهداف التوطين في المملكة." },
    image: "/images/cr6.png",
  },
];

const accreditations: Item[] = [
  {
    category: { en: "Simon Company", ar: "شركة سايمون" },
    title: { en: "Installer Certification (2021)", ar: "شهادة التركيب (2021)" },
    description: { en: "Classified as a 1st Class Contractor across all activities within the KSA.", ar: "مصنفة كمقاول من الدرجة الأولى في جميع الأنشطة داخل المملكة العربية السعودية." },
    image: "/images/ar1.png",
  },
  {
    category: { en: "Energy Utility", ar: "مرفق الطاقة" },
    title: { en: "Saudi Electricity Company", ar: "الشركة السعودية للكهرباء" },
    description: { en: "EPC contractor for T&D substations & overhead transmission lines up to 380kV.", ar: "مقاول EPC لمحطات النقل والتوزيع وخطوط النقل الهوائية حتى 380 كيلوفولت." },
    image: "/images/ar2.png",
  },
  {
    category: { en: "Sustainability", ar: "الاستدامة" },
    title: { en: "Saudi Energy Efficiency Center", ar: "المركز السعودي لكفاءة الطاقة" },
    description: { en: "Approved ESCO for certified energy savings in KSA.", ar: "شركة خدمات طاقة معتمدة لتوفير طاقة موثّق في المملكة العربية السعودية." },
    image: "/images/ar3.png",
  },
  {
    category: { en: "ISO International", ar: "ISO الدولية" },
    title: { en: "Ministry of Municipalities & Housing", ar: "وزارة الشؤون البلدية والقروية والإسكان" },
    description: { en: "Certified in quality, environment, safety & information security.", ar: "حاصلة على شهادات في الجودة والبيئة والسلامة وأمن المعلومات." },
    image: "/images/ar4.png",
  },
  {
    category: { en: "Digital", ar: "رقمي" },
    title: { en: "Digital Government Authority", ar: "هيئة الحكومة الرقمية" },
    description: { en: "Fully compliant with KSA's digital transformation agenda.", ar: "ملتزمة بالكامل بأجندة التحول الرقمي في المملكة العربية السعودية." },
    image: "/images/ar5.png",
  },
  {
    category: { en: "Localization", ar: "التوطين" },
    title: { en: "LC & Govt. Procurement Authority", ar: "المحتوى المحلي وهيئة المشتريات الحكومية" },
    description: { en: "Targeting 50% by 2027, supporting KSA localization goals.", ar: "تستهدف 50% بحلول 2027، دعمًا لأهداف التوطين في المملكة." },
    image: "/images/ar6.png",
  },
];

const tabs = [
  { key: "certifications", name: { en: "Certifications", ar: "الشهادات" }, items: certifications },
  { key: "accreditations", name: { en: "Accreditations", ar: "الاعتمادات" }, items: accreditations },
];

const ITEMS_PER_SLIDE = 6;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutCertifications() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const activeItems = useMemo(
    () => tabs.find((t) => t.key === activeTab)?.items ?? [],
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
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "الشهادات والاعتمادات" : "Certifications & accreditations"}
        </h2>
      </div>

      {/* Tabs + Nav — kept LTR so tab order and arrow sides stay stable */}
      <div dir="ltr" className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {isAr ? tab.name.ar : tab.name.en}
              </button>
            );
          })}
        </div>

        {showNav && (
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
            <button
              aria-label={isAr ? "السابق" : "Previous"}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`transition-colors duration-300 ${isBeginning ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              aria-label={isAr ? "التالي" : "Next"}
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
                  <div key={idx} dir={isAr ? "rtl" : "ltr"} className="flex items-start gap-4 bg-gray-50 p-5 sm:p-6">
                    <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#2E368F] flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={isAr ? item.title.ar : item.title.en}
                        width={64}
                        height={64}
                        className="object-contain w-4/5 h-4/5"
                      />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#2E368F] mb-1">
                        {isAr ? item.category.ar : item.category.en}
                      </span>
                      <h3 className="text-gray-900 text-base sm:text-lg font-normal mb-1">{isAr ? item.title.ar : item.title.en}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{isAr ? item.description.ar : item.description.en}</p>
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
