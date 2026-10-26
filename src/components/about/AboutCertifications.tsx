"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import "swiper/css";

type Text = { en: string; ar: string };
type Item = { category: Text; title: Text; description: Text; image: string };

const LOGOS = "/images/certifications";

const recognitions: Item[] = [
  {
    category: { en: "Energy & Water", ar: "الطاقة والمياه" },
    title: { en: "NEOM (ENOWA)", ar: "نيوم (إنوا)" },
    description: { en: "EPC scope delivery", ar: "تنفيذ أعمال الهندسة والمشتريات والإنشاء (EPC)" },
    image: `${LOGOS}/enowa-neom.png`,
  },
  {
    category: { en: "Utilities", ar: "المرافق" },
    title: { en: "Marafiq", ar: "مرافق" },
    description: { en: "Project excellence in Yanbu (2020)", ar: "التميز في تنفيذ المشاريع في ينبع (2020)" },
    image: `${LOGOS}/marafiq.png`,
  },
  {
    category: { en: "Energy Utility", ar: "مرفق الطاقة" },
    title: { en: "Electricity & Water Authority (Bahrain)", ar: "هيئة الكهرباء والماء (البحرين)" },
    description: { en: "EPC award for Al Sahalyah Substation", ar: "ترسية عقد EPC لمحطة السهلية الفرعية" },
    image: `${LOGOS}/ewa-bahrain.png`,
  },
  {
    category: { en: "Technology", ar: "التقنية" },
    title: { en: "Huawei", ar: "هواوي" },
    description: { en: "Fast Growth Partner of the Year (2021–2022)", ar: "شريك النمو السريع للعام (2021–2022)" },
    image: `${LOGOS}/huawei.png`,
  },
  {
    category: { en: "Fiber Optics", ar: "الألياف البصرية" },
    title: { en: "Corning Company", ar: "شركة كورنينج" },
    description: { en: "Excellence Award (2021)", ar: "جائزة التميز (2021)" },
    image: `${LOGOS}/corning.png`,
  },
  {
    category: { en: "Electrical Systems", ar: "الأنظمة الكهربائية" },
    title: { en: "Simon Company", ar: "شركة سايمون" },
    description: { en: "Installer Certification (2021)", ar: "شهادة المُركِّب المعتمد (2021)" },
    image: `${LOGOS}/simon.png`,
  },
  {
    category: { en: "Oil & Gas", ar: "النفط والغاز" },
    title: { en: "Saudi Aramco", ar: "أرامكو السعودية" },
    description: { en: "EPC Project Authorization via Nesma Projects", ar: "اعتماد مشاريع EPC عبر نسما للمشاريع" },
    image: `${LOGOS}/aramco.png`,
  },
  {
    category: { en: "Project Management", ar: "إدارة المشاريع" },
    title: { en: "Global Project Management Forum", ar: "المنتدى العالمي لإدارة المشاريع" },
    description: { en: "Project Excellence Award (2024)", ar: "جائزة التميز في المشاريع (2024)" },
    image: `${LOGOS}/global-project-management-forum.png`,
  },
];

const classifications: Item[] = [
  {
    category: { en: "Commercial Registration", ar: "السجل التجاري" },
    title: { en: "Ministry of Commerce", ar: "وزارة التجارة" },
    description: { en: "1010070514", ar: "1010070514" },
    image: `${LOGOS}/ministry-of-commerce.png`,
  },
  {
    category: { en: "Digital", ar: "رقمي" },
    title: { en: "Digital Government Authority", ar: "هيئة الحكومة الرقمية" },
    description: { en: "Digital compliance", ar: "الامتثال الرقمي" },
    image: `${LOGOS}/digital-government-authority.png`,
  },
  {
    category: { en: "Localization", ar: "التوطين" },
    title: { en: "LC & Government Procurement Authority", ar: "هيئة المحتوى المحلي والمشتريات الحكومية" },
    description: { en: "LC Score: 25.33%", ar: "نسبة المحتوى المحلي: 25.33%" },
    image: `${LOGOS}/local-content-procurement-authority.png`,
  },
  {
    category: { en: "Security", ar: "الأمن" },
    title: { en: "Ministry of Interior", ar: "وزارة الداخلية" },
    description: { en: "HCIS Licenses", ar: "تراخيص الهيئة العليا للأمن الصناعي (HCIS)" },
    image: `${LOGOS}/ministry-of-interior.png`,
  },
  {
    category: { en: "Government", ar: "حكومي" },
    title: { en: "Ministry of Municipalities & Housing", ar: "وزارة البلديات والإسكان" },
    description: { en: "1st-Class Contractor", ar: "مقاول من الدرجة الأولى" },
    image: `${LOGOS}/ministry-of-municipalities-housing.png`,
  },
  {
    category: { en: "Energy Utility", ar: "مرفق الطاقة" },
    title: { en: "Saudi Electricity Company", ar: "الشركة السعودية للكهرباء" },
    description: { en: "Approved EPC for OHTL up to 380kV", ar: "مقاول EPC معتمد لخطوط النقل الهوائية حتى 380 ك.ف" },
    image: `${LOGOS}/saudi-electricity-company.png`,
  },
  {
    category: { en: "Sustainability", ar: "الاستدامة" },
    title: { en: "Saudi Energy Efficiency Center", ar: "المركز السعودي لكفاءة الطاقة" },
    description: { en: "Approved ESCO", ar: "شركة خدمات طاقة معتمدة (ESCO)" },
    image: `${LOGOS}/saudi-energy-efficiency-center.png`,
  },
  {
    category: { en: "ISO International", ar: "ISO الدولية" },
    title: { en: "ISO (9001, 14001, 45001, 27001)", ar: "الأيزو (9001، 14001، 45001، 27001)" },
    description: { en: "International Organization for Standardization", ar: "المنظمة الدولية للمعايير" },
    image: `${LOGOS}/iso.png`,
  },
];

// Certifications: government & regulatory classifications. Accreditations: client & partner recognitions.
const tabs = [
  { key: "certifications", name: { en: "Certifications", ar: "الشهادات" }, items: classifications },
  { key: "accreditations", name: { en: "Accreditations", ar: "الاعتمادات" }, items: recognitions },
];

const ITEMS_PER_SLIDE_MOBILE = 3;
const ITEMS_PER_SLIDE_DEFAULT = 6;

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
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const itemsPerSlide = isMobile ? ITEMS_PER_SLIDE_MOBILE : ITEMS_PER_SLIDE_DEFAULT;

  const activeItems = useMemo(
    () => tabs.find((t) => t.key === activeTab)?.items ?? [],
    [activeTab]
  );

  const slides = useMemo(() => {
    const chunks: Item[][] = [];
    for (let i = 0; i < activeItems.length; i += itemsPerSlide) {
      chunks.push(activeItems.slice(i, i + itemsPerSlide));
    }
    return chunks.length ? chunks : [[]];
  }, [activeItems, itemsPerSlide]);

  const showNav = slides.length > 1;

  return (
    <section id="certifications" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <Reveal delay={0} duration={0.8} y={30} className="w-full px-6 lg:site-gutter mb-8 lg:mb-10">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "الشهادات والاعتمادات" : "Certifications & accreditations"}
        </h2>
      </Reveal>

      {/* Tabs + Nav — follow the page direction: tabs start on the right in Arabic, arrows mirror to match the RTL slider */}
      <Reveal delay={0.1} duration={0.7} y={24} dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:site-gutter mb-8 lg:mb-10 flex items-center justify-between gap-6">
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
        )}
      </Reveal>

      {/* Grid slider */}
      <div className="w-full px-6 lg:site-gutter">
        <Swiper
          // Remount on language change too, so Swiper re-reads the page direction (RTL in Arabic).
          key={`${activeTab}-${language}`}
          // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
          // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
          dir={language === "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Re-sync arrows after a remount instead of keeping the previous tab's state.
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveSlide(0);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveSlide(swiper.activeIndex);
          }}
          slidesPerView={1}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {slide.map((item, idx) => (
                  <Reveal
                    key={idx}
                    delay={idx * 0.07}
                    duration={0.6}
                    y={30}
                    dir={isAr ? "rtl" : "ltr"}
                    className="flex items-start gap-4 bg-gray-50 p-5 sm:p-6"
                  >
                    {/* Logos are exported on their own brand-blue tile, so they fill the box instead of being inset */}
                    <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#2E368F] overflow-hidden">
                      <Image quality={95}
                        src={item.image}
                        alt={isAr ? item.title.ar : item.title.en}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-widest uppercase text-[#2E368F] mb-1">
                        {isAr ? item.category.ar : item.category.en}
                      </span>
                      <h3 className="text-gray-900 text-base sm:text-lg font-normal mb-1">{isAr ? item.title.ar : item.title.en}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{isAr ? item.description.ar : item.description.en}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider dots — under the grid at the start edge (left in English, right in Arabic) */}
        {slides.length > 1 && (
          <div dir={isAr ? "rtl" : "ltr"} className="flex items-center justify-start gap-2 mt-5 sm:mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeSlide}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 transition-colors duration-300 ${
                  i === activeSlide ? "bg-[#2E368F]" : "bg-[#2E368F]/25 hover:bg-[#2E368F]/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
