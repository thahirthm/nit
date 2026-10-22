"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import "swiper/css";

// src is optional: a partner without a logo file yet renders its name as a placeholder tile.
const logos: Record<string, { src?: string; alt: string }> = {
  l1: { src: "/images/logos/l1.png", alt: "Saudi Aramco" },
  l2: { src: "/images/logos/l2.png", alt: "NEOM" },
  l3: { src: "/images/logos/l3.png", alt: "stc" },
  l4: { src: "/images/logos/l4.png", alt: "Ministry of Culture" },
  l5: { src: "/images/logos/l5.png", alt: "Saudi Central Bank" },
  l6: { src: "/images/logos/l6.png", alt: "SNB" },
  l7: { src: "/images/logos/l7.png", alt: "Ministry of Commerce" },
  l8: { src: "/images/logos/l8.png", alt: "Marafiq" },
  l9: { src: "/images/logos/l9.png", alt: "Royal Commission for AlUla and Neom" },
  l10: { src: "/images/logos/l10.png", alt: "Saudi Energy" },
  l11: { src: "/images/logos/l11.png", alt: "Infrastructure Partner 11" },
  l12: { src: "/images/logos/l12.png", alt: "Infrastructure Partner 12" },
  l13: { src: "/images/logos/l13.png", alt: "Infrastructure Partner 13" },
  l14: { src: "/images/logos/l14.png", alt: "Infrastructure Partner 14" },
  l15: { src: "/images/logos/l15.png", alt: "Infrastructure Partner 15" },
  l16: { src: "/images/logos/l16.png", alt: "Infrastructure Partner 16" },
  l17: { src: "/images/logos/l17.png", alt: "Infrastructure Partner 17" },
  l18: { src: "/images/logos/l18.png", alt: "Infrastructure Partner 18" },
  l19: { src: "/images/logos/l19.png", alt: "Infrastructure Partner 19" },
  l20: { src: "/images/logos/l20.png", alt: "Infrastructure Partner 20" },
  l21: { src: "/images/logos/l21.png", alt: "Government Partner 21" },
  l22: { src: "/images/logos/l22.png", alt: "Government Partner 22" },
  l23: { src: "/images/logos/l23.png", alt: "Government Partner 23" },
  l24: { src: "/images/logos/l24.png", alt: "Government Partner 24" },
  l25: { src: "/images/logos/l25.png", alt: "Government Partner 25" },
  l26: { src: "/images/logos/l26.png", alt: "Government Partner 26" },
  l27: { src: "/images/logos/l27.png", alt: "Government Partner 27" },
  l28: { src: "/images/logos/l28.png", alt: "Government Partner 28" },
  l29: { src: "/images/logos/l29.png", alt: "Government Partner 29" },
  l30: { src: "/images/logos/l30.png", alt: "Government Partner 30" },
  l31: { src: "/images/logos/l31.png", alt: "Technology Partner 31" },
  l32: { src: "/images/logos/l32.png", alt: "Technology Partner 32" },
  l33: { src: "/images/logos/l33.png", alt: "Technology Partner 33" },
  l34: { src: "/images/logos/l34.png", alt: "Technology Partner 34" },
  l35: { src: "/images/logos/l35.png", alt: "Technology Partner 35" },
  l36: { src: "/images/logos/l36.png", alt: "Technology Partner 36" },
  l37: { src: "/images/logos/l37.png", alt: "Technology Partner 37" },
  l38: { src: "/images/logos/l38.png", alt: "Technology Partner 38" },
  l39: { src: "/images/logos/l39.png", alt: "Technology Partner 39" },
  l40: { src: "/images/logos/l40.png", alt: "Technology Partner 40" },
  l41: { src: "/images/logos/l41.png", alt: "Banking & Telecommunications Partner 41" },
  l42: { src: "/images/logos/l42.png", alt: "Banking & Telecommunications Partner 42" },
  l43: { src: "/images/logos/l43.png", alt: "Banking & Telecommunications Partner 43" },
  l44: { src: "/images/logos/l44.png", alt: "Banking & Telecommunications Partner 44" },
  l45: { src: "/images/logos/l45.png", alt: "Banking & Telecommunications Partner 45" },
  l46: { src: "/images/logos/l46.png", alt: "Banking & Telecommunications Partner 46" },
  l47: { src: "/images/logos/l47.png", alt: "Banking & Telecommunications Partner 47" },
  l48: { src: "/images/logos/l48.png", alt: "Banking & Telecommunications Partner 48" },
  l49: { src: "/images/logos/l49.png", alt: "Banking & Telecommunications Partner 49" },
  l50: { src: "/images/logos/l50.png", alt: "Banking & Telecommunications Partner 50" },
};

// Partner logos — trimmed copies of public/images/partner (empty borders cropped off) so every logo
// fills its frame; w/h are the trimmed pixel sizes, used to size each logo to the same visual weight. Several brands appear under more than one category,
// so the same file is reused where needed.
const P = "/images/partner-trimmed";
const partnerLogos: Record<string, { src?: string; alt: string; w?: number; h?: number }> = {
  alfanar: { src: `${P}/Rectangle.png`, alt: "alfanar Projects", w: 203, h: 74 },
  abb: { src: `${P}/Rectangle-1.png`, alt: "ABB", w: 183, h: 72 },
  tripplite: { src: `${P}/Group.png`, alt: "Tripp Lite", w: 195, h: 74 },
  benning: { src: `${P}/Rectangle-5.png`, alt: "Benning", w: 232, h: 42 },
  kohler: { src: `${P}/Rectangle-4.png`, alt: "Kohler Generators", w: 215, h: 66 },
  schneider: { src: `${P}/Rectangle-9.png`, alt: "Schneider Electric", w: 235, h: 72 },
  emerson: { src: `${P}/Rectangle-2.png`, alt: "Emerson", w: 213, h: 95 },
  cummins: { src: `${P}/Group-1.png`, alt: "Cummins Power Generation", w: 237, h: 71 },
  hawk: { src: `${P}/Rectangle-11.png`, alt: "Hawk Power Generation", w: 201, h: 74 },
  contextplus: { src: `${P}/Rectangle-10.png`, alt: "Context Plus", w: 177, h: 110 },
  zamil: { src: `${P}/Rectangle-8.png`, alt: "Zamil Air Conditioners", w: 212, h: 96 },
  liebert: { src: `${P}/Rectangle-7.png`, alt: "Liebert", w: 229, h: 45 },
  airedale: { src: `${P}/Rectangle-6.png`, alt: "Airedale by Modine", w: 238, h: 105 },
  commscope: { src: `${P}/Group-2.png`, alt: "CommScope", w: 246, h: 36 },
  panduit: { src: `${P}/Rectangle-13.png`, alt: "Panduit", w: 194, h: 58 },
  mmc: { src: `${P}/Rectangle-12.png`, alt: "Multimedia Connect", w: 223, h: 92 },
  huawei: { src: `${P}/Rectangle-19.png`, alt: "Huawei", w: 244, h: 58 },
  hikvision: { src: `${P}/Rectangle-18.png`, alt: "Hikvision", w: 267, h: 36 },
  axis: { src: `${P}/Rectangle-17.png`, alt: "Axis Communications", w: 264, h: 96 },
  dahua: { src: `${P}/Rectangle-16.png`, alt: "Dahua Technology", w: 226, h: 70 },
  pelco: { src: `${P}/Rectangle-15.png`, alt: "Pelco", w: 256, h: 53 },
  barco: { src: `${P}/Rectangle-14.png`, alt: "Barco", w: 244, h: 51 },
  cisco: { src: `${P}/Rectangle-23.png`, alt: "Cisco", w: 200, h: 108 },
  // TODO: Fortinet logo missing from public/images/partner — placeholder until it's added
  fortinet: { alt: "Fortinet" },
  aruba: { src: `${P}/Rectangle-21.png`, alt: "Aruba", w: 231, h: 60 },
  h3c: { src: `${P}/Rectangle-20.png`, alt: "H3C", w: 207, h: 55 },
  apc: { src: `${P}/Rectangle-24.png`, alt: "APC", w: 221, h: 94 },
  rittal: { src: `${P}/Group-3.png`, alt: "Rittal", w: 220, h: 104 },
  rittalRacks: { src: `${P}/Group-5.png`, alt: "Rittal", w: 220, h: 104 },
  notifier: { src: `${P}/Rectangle-32.png`, alt: "Notifier by Honeywell", w: 273, h: 74 },
  simplex: { src: `${P}/Rectangle-31.png`, alt: "Simplex", w: 248, h: 55 },
  kidde: { src: `${P}/Rectangle-30.png`, alt: "Kidde", w: 251, h: 79 },
  "3m": { src: `${P}/Rectangle-29.png`, alt: "3M", w: 154, h: 81 },
  // TODO: DuPont logo missing from public/images/partner — placeholder until it's added
  dupont: { alt: "DuPont" },
  paloalto: { src: `${P}/Rectangle-37.png`, alt: "Palo Alto Networks", w: 246, h: 46 },
  sophos: { src: `${P}/Rectangle-36.png`, alt: "Sophos", w: 262, h: 47 },
  trendmicro: { src: `${P}/Rectangle-35.png`, alt: "Trend Micro", w: 260, h: 89 },
  // TODO: CrowdStrike logo missing from public/images/partner — placeholder until it's added
  crowdstrike: { alt: "CrowdStrike" },
  blackwhite: { src: `${P}/Rectangle-33.png`, alt: "black&white engineering", w: 230, h: 60 },
  // Group-4.png contains both the SALFO and RED logos in one image
  salfored: { src: `${P}/Group-4.png`, alt: "SALFO Engineering & Management and RED", w: 241, h: 246 },
  legrand: { src: `${P}/Rectangle-40.png`, alt: "Legrand", w: 226, h: 56 },
  hdl: { src: `${P}/Rectangle-43.png`, alt: "HDL", w: 224, h: 79 },
  orvibo: { src: `${P}/Rectangle-41.png`, alt: "Orvibo", w: 236, h: 54 },
  honeywell: { src: `${P}/Rectangle-39.png`, alt: "Honeywell", w: 245, h: 44 },
  lutron: { src: `${P}/Rectangle-38.png`, alt: "Lutron", w: 236, h: 39 },
};

const partnerCategories = [
  { name: { en: "Electrical Systems", ar: "الأنظمة الكهربائية" }, logos: ["alfanar", "abb", "tripplite", "benning", "kohler", "schneider", "emerson", "cummins"] },
  { name: { en: "Mechanical Systems", ar: "الأنظمة الميكانيكية" }, logos: ["hawk", "contextplus", "schneider", "zamil", "liebert", "airedale"] },
  { name: { en: "Structural Cabling", ar: "الكابلات الهيكلية" }, logos: ["commscope", "panduit", "mmc"] },
  { name: { en: "Physical Security", ar: "الأمن المادي" }, logos: ["huawei", "hikvision", "axis", "dahua", "pelco", "barco"] },
  { name: { en: "Network & Security Solution", ar: "حلول الشبكات والأمن" }, logos: ["cisco", "huawei", "fortinet", "aruba", "h3c"] },
  { name: { en: "Data Center Power Solution", ar: "حلول طاقة مراكز البيانات" }, logos: ["huawei", "commscope", "panduit", "schneider", "apc", "rittal"] },
  { name: { en: "Fire Fighting", ar: "مكافحة الحرائق" }, logos: ["notifier", "simplex", "kidde", "3m", "dupont"] },
  { name: { en: "Security Solution", ar: "الحلول الأمنية" }, logos: ["paloalto", "sophos", "trendmicro", "huawei", "crowdstrike"] },
  { name: { en: "Design and Engineering", ar: "التصميم والهندسة" }, logos: ["blackwhite", "salfored"] },
  { name: { en: "IT Racks", ar: "خزائن تقنية المعلومات" }, logos: ["schneider", "rittalRacks", "huawei"] },
  { name: { en: "Smart Home", ar: "المنزل الذكي" }, logos: ["legrand", "hdl", "schneider", "orvibo", "honeywell", "lutron"] },
];

// Partner logo sizing: same visual area for every logo, capped to one max box, so wide wordmarks and
// squarer marks look equally weighted. Values are in em — the grid cell sets the font-size per breakpoint.
const PARTNER_AREA = 17; // em²
const PARTNER_MAX_W = 9.5; // em
const PARTNER_MAX_H = 3.6; // em
function partnerLogoSize(w: number, h: number) {
  const ratio = w / h;
  let width = Math.sqrt(PARTNER_AREA * ratio);
  let height = width / ratio;
  if (width > PARTNER_MAX_W) {
    width = PARTNER_MAX_W;
    height = width / ratio;
  }
  if (height > PARTNER_MAX_H) {
    height = PARTNER_MAX_H;
    width = height * ratio;
  }
  return { width: `${width.toFixed(2)}em`, height: `${height.toFixed(2)}em` };
}

const categories = [
  { name: { en: "Featured Clients", ar: "عملاء مختارون" }, logos: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"] },
  { name: { en: "Infrastructure", ar: "البنية التحتية" }, logos: ["l11", "l12", "l13", "l14", "l15", "l16", "l17", "l18", "l19", "l20"] },
  { name: { en: "Government", ar: "القطاع الحكومي" }, logos: ["l21", "l22", "l23", "l24", "l25", "l26", "l27", "l28", "l29", "l30"] },
  { name: { en: "Technology", ar: "التقنية" }, logos: ["l31", "l32", "l33", "l34", "l35", "l36", "l37", "l38", "l39", "l40"] },
  { name: { en: "Banking & Telecommunications", ar: "الخدمات المصرفية والاتصالات" }, logos: ["l41", "l42", "l43", "l44", "l45", "l46", "l47", "l48", "l49", "l50"] },
];

// Desktop/tablet shows 2 rows (grid-rows-2) at their column counts — 10 logos per slide.
// Mobile only has 2 columns, so 10 logos would run 5 rows tall; cap it at 3 rows (6 logos) there.
const LOGOS_PER_SLIDE_MOBILE = 6;
const LOGOS_PER_SLIDE_DEFAULT = 10;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

type ClientsSectionProps = {
  /** About page: adds "Our clients / Our partners" tabs under the heading. The home page omits it. */
  withPartners?: boolean;
};

export function ClientsSection({ withPartners = false }: ClientsSectionProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [view, setView] = useState<"clients" | "partners">("clients");
  const activeCategories = view === "partners" ? partnerCategories : categories;
  const activeLogoMap = view === "partners" ? partnerLogos : logos;
  const [activeCategory, setActiveCategory] = useState(categories[0].name.en);

  const switchView = (next: "clients" | "partners") => {
    if (next === view) return;
    setView(next);
    setActiveCategory((next === "partners" ? partnerCategories : categories)[0].name.en);
  };
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

  const logosPerSlide = isMobile ? LOGOS_PER_SLIDE_MOBILE : LOGOS_PER_SLIDE_DEFAULT;

  const activeLogos = useMemo(
    () => activeCategories.find((c) => c.name.en === activeCategory)?.logos ?? [],
    [activeCategories, activeCategory]
  );

  const slides = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < activeLogos.length; i += logosPerSlide) {
      chunks.push(activeLogos.slice(i, i + logosPerSlide));
    }
    return chunks.length ? chunks : [[]];
  }, [activeLogos, logosPerSlide]);

  return (
    <section id="clients-partners" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <div className="w-full px-6 lg:site-gutter mb-8 lg:mb-10">
        <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {language === "ar" ? "موثوقون لدى جهات رائدة" : "Trusted by leading organizations"}
        </h2>

        {/* Clients / Partners switch — main tabs use the bordered button style (filled when active) */}
        {withPartners && (
          <div dir={isAr ? "rtl" : "ltr"} role="tablist" className="mt-6 lg:mt-8 flex items-center gap-3">
            {(
              [
                { key: "clients", en: "Our clients", ar: "عملاؤنا" },
                { key: "partners", en: "Our partners", ar: "شركاؤنا" },
              ] as const
            ).map((tab) => {
              const isActive = view === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => switchView(tab.key)}
                  className={`px-5 py-2.5 text-xs lg:text-[13px] font-medium tracking-wide uppercase border transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-[#2E368F] text-white border-[#2E368F]"
                      : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                  }`}
                >
                  {isAr ? tab.ar : tab.en}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tabs + Nav */}
      <div className="w-full pl-6 lg:site-gutter mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className={`min-w-0 flex flex-nowrap lg:flex-wrap overflow-x-auto ${withPartners ? "gap-x-7 gap-y-3 border-b border-gray-200 lg:border-b-0" : "gap-3"} lg:overflow-visible pr-6 lg:pr-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
          {activeCategories.map((category) => {
            const isActive = category.name.en === activeCategory;
            return (
              <button
                key={category.name.en}
                onClick={() => setActiveCategory(category.name.en)}
                className={
                  withPartners
                    ? // About page: sub-tabs are plain text (no border box) with an underline on the active one
                      `relative shrink-0 pb-2 text-xs lg:text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 whitespace-nowrap ${
                        isActive ? "text-[#2E368F]" : "text-gray-400 hover:text-[#2E368F]"
                      }`
                    : `shrink-0 px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-[#2E368F] text-white border-[#2E368F]"
                          : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                      }`
                }
              >
                {language === "ar" ? category.name.ar : category.name.en}
                {withPartners && (
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-[#2E368F] transition-transform duration-300 origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {slides.length > 1 && (
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

      {/* Logo slider */}
      <div className="w-full px-6 lg:site-gutter">
        <Swiper
          // Remount on language change too, so Swiper re-reads the page direction (RTL in Arabic).
          key={`${view}-${activeCategory}-${language}`}
          // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
          // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
          dir={language === "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Re-sync arrows after a remount (tab or language change) instead of keeping the previous state.
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-x-8 gap-y-12 py-4">
                {slide.map((id) => {
                  const logo = activeLogoMap[id] as { src?: string; alt: string; w?: number; h?: number };
                  if (view === "partners") {
                    // Partners: every logo in an identical cell, sized by partnerLogoSize and centred
                    return (
                      <div key={id} className="group w-full h-[72px] lg:h-[88px] flex items-center justify-center text-[13px] sm:text-[14px] lg:text-[16px]">
                        {logo.src && logo.w && logo.h ? (
                          <div className="relative" style={partnerLogoSize(logo.w, logo.h)}>
                            <Image quality={95}
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              sizes="160px"
                              className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          // Placeholder until the logo file is supplied
                          <span className="text-[1em] font-semibold tracking-wide uppercase text-gray-300">{logo.alt}</span>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div key={id} className="group relative w-full h-[90px] lg:h-[110px] flex items-center justify-center overflow-hidden">
                      {logo.src ? (
                        <Image quality={95}
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                      ) : (
                        // Placeholder until the logo file is supplied
                        <span className="text-[15px] lg:text-[18px] font-semibold tracking-wide uppercase text-gray-300">{logo.alt}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider dots — mobile only, so it's clear more logos are a swipe away */}
        {slides.length > 1 && (
          <div className="flex sm:hidden items-center justify-start gap-2 mt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`w-2 h-2 transition-colors duration-300 ${
                  i === activeSlide ? "bg-[#2E368F]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
