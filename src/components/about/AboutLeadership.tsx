"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { LeadershipOffcanvas, type LeadershipOffcanvasPerson } from "@/components/about/LeadershipOffcanvas";
import "swiper/css";

const people: Record<string, LeadershipOffcanvasPerson> = {
  p1: {
    name: { en: "Majed Al Faiya", ar: "ماجد الفايع" },
    role: { en: "COO", ar: "الرئيس التنفيذي للعمليات" },
    image: "/images/abt-t1.png",
    bio: {
      en: "Awarded the Jubail–Buraydah Independent Water Transmission Pipeline — 587km, 650,000 m³/day capacity — the first large-scale private-sector potable water link in KSA. Two substations — Rumah 380kV BSP (SAR 915M) and Bisha PV 380/132kV BSP (SAR 644M) — also awarded.",
      ar: "أشرف على خط أنابيب نقل المياه المستقل بين الجبيل وبريدة بطول 587 كم وبطاقة 650,000 م³/يوم، وهو أول رابط مياه شرب خاص واسع النطاق في المملكة. كما أُسندت له محطتا تحويل روضة 380 كيلوفولت (915 مليون ريال) وبيشا الكهروضوئية 380/132 كيلوفولت (644 مليون ريال).",
    },
  },
  p2: {
    name: { en: "Khalid Mengash", ar: "خالد منقاش" },
    role: { en: "CHRO", ar: "الرئيس التنفيذي للموارد البشرية" },
    image: "/images/abt-t2.png",
    bio: {
      en: "Leads NIT's workforce strategy across infrastructure and technology, building talent pipelines that support national-scale projects and the Kingdom's Vision 2030 local content goals.",
      ar: "يقود استراتيجية القوى العاملة في NIT عبر قطاعي البنية التحتية والتقنية، ويبني مسارات للمواهب تدعم المشاريع ذات النطاق الوطني وأهداف المحتوى المحلي ضمن رؤية 2030.",
    },
  },
  p3: {
    name: { en: "Hassan El Melegi", ar: "حسن الملجي" },
    role: { en: "CFO", ar: "الرئيس التنفيذي المالي" },
    image: "/images/abt-t3.png",
    bio: {
      en: "Oversees financial strategy and capital structure across NIT's project portfolio, ensuring disciplined investment in giga-projects and long-term financial resilience.",
      ar: "يشرف على الاستراتيجية المالية وهيكل رأس المال عبر محفظة مشاريع NIT، ويضمن انضباط الاستثمار في المشاريع العملاقة والمتانة المالية على المدى الطويل.",
    },
  },
  p4: {
    name: { en: "Nahil Bakri", ar: "نهيل بكري" },
    role: { en: "Chief Audit Executive", ar: "الرئيس التنفيذي للتدقيق" },
    image: "/images/abt-t4.png",
    bio: {
      en: "Leads independent assurance and risk oversight across NIT's operations, strengthening governance standards in line with regulatory and Vision 2030 compliance requirements.",
      ar: "تقود أعمال التدقيق المستقل والإشراف على المخاطر في عمليات NIT، وتعزز معايير الحوكمة بما يتماشى مع متطلبات الامتثال التنظيمي ورؤية 2030.",
    },
  },
  b1: {
    name: { en: "Salah Al Sunaid", ar: "صالح الصنيدي" },
    role: { en: "Chairman", ar: "رئيس مجلس الإدارة" },
    image: "/images/abt-t2.png",
    bio: {
      en: "Sets the board's long-term direction for NIT, guiding the Group's growth across energy, water, industrial, and technology infrastructure in the Kingdom.",
      ar: "يضع التوجه طويل المدى لمجلس إدارة NIT، ويقود نمو المجموعة عبر قطاعات الطاقة والمياه والصناعة وبنية التقنية التحتية في المملكة.",
    },
  },
  b2: {
    name: { en: "Majed Al Faiya", ar: "ماجد الفايع" },
    role: { en: "Vice Chairman", ar: "نائب رئيس مجلس الإدارة" },
    image: "/images/abt-t1.png",
    bio: {
      en: "Supports board governance and strategic oversight, drawing on operational leadership experience across NIT's infrastructure and technology projects.",
      ar: "يدعم حوكمة المجلس والإشراف الاستراتيجي، بالاستناد إلى خبرته القيادية التشغيلية عبر مشاريع NIT في البنية التحتية والتقنية.",
    },
  },
  b3: {
    name: { en: "Hassan El Melegi", ar: "حسن الملجي" },
    role: { en: "Board Member", ar: "عضو مجلس الإدارة" },
    image: "/images/abt-t3.png",
    bio: {
      en: "Brings financial governance expertise to the board, supporting sound capital allocation and risk management across the Group.",
      ar: "يقدم خبرة في الحوكمة المالية للمجلس، ويدعم التخصيص السليم لرأس المال وإدارة المخاطر عبر المجموعة.",
    },
  },
  b4: {
    name: { en: "Nahil Bakri", ar: "نهيل بكري" },
    role: { en: "Board Member", ar: "عضو مجلس الإدارة" },
    image: "/images/abt-t4.png",
    bio: {
      en: "Contributes audit and risk oversight expertise to the board, reinforcing governance and compliance standards across NIT.",
      ar: "تسهم بخبرتها في التدقيق والإشراف على المخاطر ضمن المجلس، وتعزز معايير الحوكمة والامتثال عبر NIT.",
    },
  },
};

const categories = [
  { key: "leaders", name: { en: "Our Leaders", ar: "قياداتنا" }, people: ["p1", "p2", "p3", "p4"] },
  { key: "board", name: { en: "Board Members", ar: "أعضاء مجلس الإدارة" }, people: ["b1", "b2", "b3", "b4"] },
];

const PEOPLE_PER_SLIDE = 4;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutLeadership() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<LeadershipOffcanvasPerson | null>(null);

  const activePeople = useMemo(
    () => categories.find((c) => c.key === activeCategory)?.people ?? [],
    [activeCategory]
  );

  const slides = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < activePeople.length; i += PEOPLE_PER_SLIDE) {
      chunks.push(activePeople.slice(i, i + PEOPLE_PER_SLIDE));
    }
    return chunks.length ? chunks : [[]];
  }, [activePeople]);

  const showNav = slides.length > 1;

  return (
    <section id="our-team" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <Reveal delay={0} duration={0.8} y={30} className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "العقول وراء المهمة" : "The minds behind the mission"}
        </h2>
      </Reveal>

      {/* Tabs + Nav — kept LTR so tab order and arrow sides stay stable */}
      <Reveal delay={0.1} duration={0.7} y={24} dir="ltr" className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
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
                {isAr ? category.name.ar : category.name.en}
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
      </Reveal>

      {/* Leadership slider */}
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
          slidesPerView={1}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {slide.map((id, cardIndex) => {
                  const person = people[id];
                  const personName = isAr ? person.name.ar : person.name.en;
                  return (
                    <Reveal
                      key={id}
                      delay={cardIndex * 0.1}
                      duration={0.7}
                      y={40}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedPerson(person)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedPerson(person);
                      }}
                      className="group relative w-full h-[380px] sm:h-[420px] lg:h-[460px] bg-gray-100 overflow-hidden cursor-pointer"
                    >
                      <Image quality={95}
                        src={person.image}
                        alt={personName}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:-translate-y-3"
                      />

                      <div
                        dir={isAr ? "rtl" : "ltr"}
                        className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 bg-white/75 backdrop-blur-sm px-6 pt-4 pb-6 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="block text-[13px] font-medium tracking-widest uppercase text-[#2E368F]">
                            {isAr ? person.role.ar : person.role.en}
                          </span>
                          <span className="block mt-2 text-lg text-gray-900 font-normal">{personName}</span>
                        </div>
                        <span className="text-2xl text-gray-400 font-light shrink-0">+</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <LeadershipOffcanvas person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </section>
  );
}
