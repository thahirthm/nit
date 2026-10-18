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
    linkedin: "https://www.linkedin.com/in/majed-alfaiya/",
    bio: {
      en: "Awarded the Jubail–Buraydah Independent Water Transmission Pipeline — 587km, 650,000 m³/day capacity — the first large-scale private-sector potable water link in KSA. Two substations — Rumah 380kV BSP (SAR 915M) and Bisha PV 380/132kV BSP (SAR 644M) — also awarded.",
      ar: "أشرف على خط أنابيب نقل المياه المستقل بين الجبيل وبريدة بطول 587 كم وبطاقة 650,000 م³/يوم، وهو أول رابط مياه شرب خاص واسع النطاق في المملكة. كما أُسندت له محطتا تحويل روضة 380 كيلوفولت (915 مليون ريال) وبيشا الكهروضوئية 380/132 كيلوفولت (644 مليون ريال).",
    },
  },
  p2: {
    name: { en: "Khalid Mengash", ar: "خالد منقاش" },
    role: { en: "CHRO", ar: "الرئيس التنفيذي للموارد البشرية" },
    image: "/images/abt-t2.png",
    linkedin: "https://www.linkedin.com/in/kmengash/",
    bio: {
      en: "Leads NIT's workforce strategy across infrastructure and technology, building talent pipelines that support national-scale projects and the Kingdom's Vision 2030 local content goals.",
      ar: "يقود استراتيجية القوى العاملة في NIT عبر قطاعي البنية التحتية والتقنية، ويبني مسارات للمواهب تدعم المشاريع ذات النطاق الوطني وأهداف المحتوى المحلي ضمن رؤية 2030.",
    },
  },
  p3: {
    name: { en: "Hassan El Melegi", ar: "حسن الملجي" },
    role: { en: "CFO", ar: "الرئيس التنفيذي المالي" },
    image: "/images/abt-t3.png",
    linkedin: "https://www.linkedin.com/in/hassan-el-melegi-00090b13/",
    bio: {
      en: "Oversees financial strategy and capital structure across NIT's project portfolio, ensuring disciplined investment in giga-projects and long-term financial resilience.",
      ar: "يشرف على الاستراتيجية المالية وهيكل رأس المال عبر محفظة مشاريع NIT، ويضمن انضباط الاستثمار في المشاريع العملاقة والمتانة المالية على المدى الطويل.",
    },
  },
  p4: {
    name: { en: "Nahil Bakri", ar: "نهيل بكري" },
    role: { en: "Chief Audit Executive", ar: "الرئيس التنفيذي للتدقيق" },
    image: "/images/abt-t4.png",
    linkedin: "https://www.linkedin.com/in/nahil-bakri-31973357/",
    bio: {
      en: "Leads independent assurance and risk oversight across NIT's operations, strengthening governance standards in line with regulatory and Vision 2030 compliance requirements.",
      ar: "تقود أعمال التدقيق المستقل والإشراف على المخاطر في عمليات NIT، وتعزز معايير الحوكمة بما يتماشى مع متطلبات الامتثال التنظيمي ورؤية 2030.",
    },
  },
};

// The design uses the same bio copy for every board card; give a member their own `bio` to override it.
const boardBio = {
  en: "Awarded the Jubail–Buraydah Independent Water Transmission Pipeline — 587km, 650,000 m³/day capacity — the first large-scale private-sector potable water link in KSA. Two substations — Rumah 380kV BSP (SAR 915M) and Bisha PV 380/132kV BSP (SAR 644M) — also awarded.",
  ar: "أشرف على خط أنابيب نقل المياه المستقل بين الجبيل وبريدة بطول 587 كم وبطاقة 650,000 م³/يوم، وهو أول رابط مياه شرب خاص واسع النطاق في المملكة. كما أُسندت له محطتا تحويل روضة 380 كيلوفولت (915 مليون ريال) وبيشا الكهروضوئية 380/132 كيلوفولت (644 مليون ريال).",
};

const boardMembers: Record<string, LeadershipOffcanvasPerson> = {
  b1: {
    name: { en: "Rayan Al Amoudi", ar: "ريان العمودي" },
    role: { en: "Strategy and Business Development Executive Manager", ar: "المدير التنفيذي للاستراتيجية وتطوير الأعمال" },
    image: "/images/bm-1.png",
    linkedin: "https://www.linkedin.com/in/eng-rayan-alamoudi/",
    bio: boardBio,
  },
  b2: {
    name: { en: "Bander Al Shehri", ar: "بندر الشهري" },
    role: { en: "QEHS Executive Manager", ar: "المدير التنفيذي للجودة والصحة والسلامة والبيئة" },
    image: "/images/bm-2.png",
    linkedin: "https://www.linkedin.com/in/bandar-al-shehri-ba73a5105/",
    bio: boardBio,
  },
  b3: {
    name: { en: "Mogbel Al Mogbel", ar: "مقبل المقبل" },
    role: { en: "Sales Executive Manager", ar: "المدير التنفيذي للمبيعات" },
    image: "/images/bm-3.png",
    linkedin: "https://www.linkedin.com/in/mogbel-almogbel-57b61a217/",
    bio: boardBio,
  },
  b4: {
    name: { en: "Mohammed Abbas", ar: "محمد عباس" },
    role: { en: "Supply Chain Executive Manager", ar: "المدير التنفيذي لسلاسل الإمداد" },
    image: "/images/bm-4.png",
    linkedin: "https://www.linkedin.com/in/mohamed-fekry-12a11196/",
    bio: boardBio,
  },
  b5: {
    name: { en: "Mohammed Al Sibaee", ar: "محمد السباعي" },
    role: { en: "Advanced Energy System Executive Manager", ar: "المدير التنفيذي لأنظمة الطاقة المتقدمة" },
    image: "/images/bm-5.png",
    linkedin: "https://www.linkedin.com/in/mohamed-al-sebay-b24a94119/",
    bio: boardBio,
  },
  b6: {
    name: { en: "Khalid Al Jomaih", ar: "خالد الجميح" },
    role: { en: "Eastern Region Manager", ar: "مدير المنطقة الشرقية" },
    image: "/images/bm-6.png",
    linkedin: "https://www.linkedin.com/in/khalid-al-jomiah-22b815a4/",
    bio: boardBio,
  },
  b7: {
    name: { en: "Salem Al Shehri", ar: "سالم الشهري" },
    role: { en: "Central Region Manager", ar: "مدير المنطقة الوسطى" },
    image: "/images/bm-7.png",
    bio: boardBio,
  },
  b8: {
    name: { en: "Faisal Alwahabi", ar: "فيصل الوهابي" },
    role: { en: "Western & Southern Region Manager", ar: "مدير المنطقتين الغربية والجنوبية" },
    image: "/images/bm-8.png",
    linkedin: "https://www.linkedin.com/in/faisal-al-wahabi-0b444952/",
    bio: boardBio,
  },
};

const categories = [
  { key: "leaders", name: { en: "Our Leaders", ar: "قياداتنا" }, people: ["p1", "p2", "p3", "p4"] },
  { key: "board", name: { en: "Board Members", ar: "أعضاء مجلس الإدارة" }, people: Object.keys(boardMembers) },
];

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
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState<LeadershipOffcanvasPerson | null>(null);

  const activePeople = useMemo(
    () => categories.find((c) => c.key === activeCategory)?.people ?? [],
    [activeCategory]
  );

  // Arrows only appear when the cards overflow the current view (e.g. more than 4 on desktop).
  const showNav = !(isBeginning && isEnd);

  const syncNav = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <section id="our-team" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading */}
      <Reveal delay={0} duration={0.8} y={30} className="w-full px-6 lg:px-16 mb-8 lg:mb-10">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "العقول وراء المهمة" : "The minds behind the mission"}
        </h2>
      </Reveal>

      {/* Tabs + Nav — follow the page direction: tabs start on the right in Arabic, arrows mirror to match the RTL slider */}
      <Reveal delay={0.1} duration={0.7} y={24} dir={isAr ? "rtl" : "ltr"} className="w-full px-6 lg:px-16 mb-8 lg:mb-10 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category.key === activeCategory;
            return (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setActiveSlide(0);
                }}
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

      {/* Leadership slider */}
      <div className="w-full px-6 lg:px-16">
        <Swiper
          // Remount on language change too, so Swiper re-reads the page direction (RTL in Arabic).
          key={`${activeCategory}-${language}`}
          // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
          // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
          dir={language === "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // The slider remounts per tab, so re-sync the arrow states instead of keeping the previous tab's.
            syncNav(swiper);
          }}
          onSlideChange={syncNav}
          // Fires whenever Swiper recalculates its edges (incl. resizes/breakpoints), so arrows track the overflow.
          onProgress={syncNav}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {activePeople.map((id, i) => {
            const person = people[id] ?? boardMembers[id];
            const personName = isAr ? person.name.ar : person.name.en;
            return (
              <SwiperSlide key={id}>
                <Reveal
                  delay={(i % 4) * 0.1}
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
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Dot pagination — mobile only (slidesPerView: 1, so each dot maps to one person) */}
        {activePeople.length > 1 && (
          <div className="flex sm:hidden items-center justify-start gap-2 mt-6">
            {activePeople.map((id, i) => (
              <button
                key={id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`transition-all duration-300 ${
                  i === activeSlide ? "w-5 h-1.5 bg-[#2E368F]" : "w-1.5 h-1.5 bg-[#2E368F]/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <LeadershipOffcanvas person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </section>
  );
}
