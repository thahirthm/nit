"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectOffcanvas, type ProjectOffcanvasProject } from "@/components/ui/ProjectOffcanvas";
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
    value: "1.8B SAR",
    year: "2025",
    scope: { en: "Design+Build", ar: "التصميم والتنفيذ" },
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
    // Shown as "Value" in the card's top meta (Location appears on hover)
    metaValue: { en: "1.9 Billion SAR", ar: "1.9 مليار ريال" },
    image: "/images/pr2.png",
    hoverImage: "/images/pr2-hover.png",
    logo: "/images/fp-3-logo.png",
    logoAlt: { en: "Principal Buyer", ar: "المشتري الرئيس" },
    isVision2030: false,
    value: "1.9B SAR",
    year: "2024",
    scope: { en: "EPC", ar: "الهندسة والمشتريات والإنشاءات (EPC)" },
    description: {
      en: [
        "Delivered in partnership with EDF Renewables and Masdar, the project is the first onshore wind farm in Saudi Arabia and the largest in the Middle East, with 99 turbines creating a total generating capacity of 400 MW.",
        "The project was awarded in the first round of competitive tendering under the Saudi Ministry of Energy renewable energy program, and will generate enough energy to power up to 70,000 homes and displace 1 million tons of CO2 emissions each year.",
      ],
      ar: [
        "نُفّذ بالشراكة مع EDF Renewables ومصدر، ويُعد المشروع أول مزرعة رياح برية في المملكة العربية السعودية والأكبر في الشرق الأوسط، إذ يضم 99 توربينًا بقدرة توليد إجمالية تبلغ 400 ميغاواط.",
        "جرت ترسية المشروع ضمن الجولة الأولى من المناقصات التنافسية في إطار برنامج الطاقة المتجددة التابع لوزارة الطاقة السعودية، وسيولّد طاقة تكفي لتزويد ما يصل إلى 70,000 منزل وخفض مليون طن من انبعاثات ثاني أكسيد الكربون سنويًا.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "300 MW Solar Farm in Jeddah", ar: "مزرعة طاقة شمسية بقدرة 300 ميغاواط في جدة" },
    location: { en: "Jeddah", ar: "جدة" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    // Shown as "Value" in the card's top meta (instead of Location)
    metaValue: { en: "889 Million SAR", ar: "889 مليون ريال" },
    image: "/images/fp-3.png",
    hoverImage: "/images/fp3-hover.png",
    logo: "/images/fp-3-logo.png",
    logoAlt: { en: "Principal Buyer", ar: "المشتري الرئيس" },
    isVision2030: false,
    value: "889M SAR",
    // TODO: year and scope not provided yet — placeholders until confirmed
    year: "—",
    scope: { en: "—", ar: "—" },
    description: {
      en: [
        "Delivered in partnership with EDF Renewables and Masdar, the 300 MW South Jeddah solar project was awarded in the second round of competitive tendering under the Saudi Ministry of Energy renewable energy program.",
        "It will have an initial operational life of 25 years and will be able to power up to 50,000 homes and displace 750,000 tons of CO2 emissions annually.",
      ],
      ar: [
        "نُفّذ بالشراكة مع EDF Renewables ومصدر، وقد جرت ترسية مشروع جنوب جدة للطاقة الشمسية بقدرة 300 ميغاواط ضمن الجولة الثانية من المناقصات التنافسية في إطار برنامج الطاقة المتجددة التابع لوزارة الطاقة السعودية.",
        "يمتد عمره التشغيلي الأولي إلى 25 عامًا، وسيكون قادرًا على تزويد ما يصل إلى 50,000 منزل بالطاقة وخفض 750,000 طن من انبعاثات ثاني أكسيد الكربون سنويًا.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "Jubail-Buraydah IWTP", ar: "خط نقل المياه المستقل بين الجبيل وبريدة" },
    location: { en: "Jubail & Al-Qassim", ar: "الجبيل والقصيم" },
    client: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    metaValue: { en: "8.5 Billion SAR", ar: "8.5 مليار ريال" },
    image: "/images/fp-4.png",
    hoverImage: "/images/fp-4-hover.png",
    logo: "/images/fp-4-logo.png",
    logoAlt: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    isVision2030: false,
    value: "8.5B SAR",
    // TODO: year not provided yet — placeholder until confirmed
    year: "—",
    scope: { en: "BOOT", ar: "البناء والتملك والتشغيل والنقل (BOOT)" },
    description: {
      en: [
        "The Jubail–Buraydah Independent Water Transmission Pipeline (IWTP) is a 587 km bidirectional pipeline with a transmission capacity of 650,000 m³/day and storage facilities of about 1.63 million m³ across Jubail and Al-Qassim.",
        "The project covers the design, financing, construction, operation, and transfer (BOOT model), providing the first large-scale private-sector potable water transmission link.",
      ],
      ar: [
        "خط أنابيب نقل المياه المستقل بين الجبيل وبريدة هو خط ثنائي الاتجاه بطول 587 كم، بطاقة نقل تبلغ 650,000 م³/يوم ومرافق تخزين تبلغ نحو 1.63 مليون م³ في الجبيل والقصيم.",
        "يشمل المشروع التصميم والتمويل والإنشاء والتشغيل ونقل الملكية (نموذج BOOT)، ليكون أول رابط واسع النطاق لنقل مياه الشرب ينفّذه القطاع الخاص.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "1,100 MW Al Henakiyah Solar PV", ar: "مشروع الحناكية للطاقة الشمسية بقدرة 1,100 ميغاواط" },
    location: { en: "Al Henakiyah", ar: "الحناكية" },
    client: { en: "Sana Taibah", ar: "سنا طيبة" },
    metaValue: { en: "3.75 Billion SAR", ar: "3.75 مليار ريال" },
    image: "/images/fp-5.png",
    hoverImage: "/images/fp-5-hover.png",
    logo: "/images/fp-5-logo.png",
    logoAlt: { en: "Sana Taibah", ar: "سنا طيبة" },
    isVision2030: false,
    value: "3.75B SAR",
    // TODO: year and scope not provided yet — placeholders until confirmed
    year: "—",
    scope: { en: "—", ar: "—" },
    description: {
      en: [
        "Delivered in partnership with Masdar, EDF Renewables, and Nesma Renewable Energy, the 1,100 MW Al Henakiyah solar PV project was awarded under the fourth round of competitive tendering by the Saudi Ministry of Energy's renewable energy program.",
        "The project will have an initial operational life of 25 years, is expected to power approximately 87,700 homes, and will offset over 1.84 million tons of CO₂ emissions annually.",
      ],
      ar: [
        "نُفّذ بالشراكة مع مصدر وEDF Renewables ونسما للطاقة المتجددة، وقد جرت ترسية مشروع الحناكية للطاقة الشمسية بقدرة 1,100 ميغاواط ضمن الجولة الرابعة من المناقصات التنافسية في إطار برنامج الطاقة المتجددة التابع لوزارة الطاقة السعودية.",
        "يمتد عمره التشغيلي الأولي إلى 25 عامًا، ومن المتوقع أن يزوّد نحو 87,700 منزل بالطاقة، وأن يخفض أكثر من 1.84 مليون طن من انبعاثات ثاني أكسيد الكربون سنويًا.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    title: { en: "Makkah Bus Project", ar: "مشروع حافلات مكة" },
    location: { en: "Makkah", ar: "مكة المكرمة" },
    client: { en: "Royal Commission for Makkah City and Holy Sites", ar: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة" },
    metaValue: { en: "3.2 Billion SAR", ar: "3.2 مليار ريال" },
    image: "/images/fp-6.png",
    hoverImage: "/images/fp-6-hover.png",
    logo: "/images/fp-6-logo.png",
    logoAlt: { en: "Royal Commission for Makkah City and Holy Sites", ar: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة" },
    isVision2030: false,
    value: "3.2B SAR",
    // TODO: year not provided yet — placeholder until confirmed
    year: "—",
    scope: { en: "Operation & Maintenance", ar: "التشغيل والصيانة" },
    description: {
      en: [
        "A consortium made of Nesma Co. Ltd and the Spanish transport company Transports Ciutat Comtal (TCC) was awarded the contract. The project supplies the 10-year operation and maintenance of 400 Makkah Public Transportation Program buses.",
        "It will ultimately provide wider transportation options for the public and improve travel throughout the city while addressing the social, economic and environmental impacts of transport.",
      ],
      ar: [
        "فاز بالعقد تحالف يضم شركة نسما المحدودة وشركة النقل الإسبانية Transports Ciutat Comtal (TCC)، ويشمل المشروع تشغيل وصيانة 400 حافلة ضمن برنامج النقل العام في مكة المكرمة لمدة 10 سنوات.",
        "سيوفر المشروع في نهاية المطاف خيارات تنقل أوسع للجمهور، ويحسّن التنقل في أنحاء المدينة، مع معالجة الآثار الاجتماعية والاقتصادية والبيئية للنقل.",
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
    value: "540M SAR",
    year: "2025",
    scope: { en: "Design+Build", ar: "التصميم والتنفيذ" },
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
    logo: "/images/vision-2030.svg",
    logoAlt: { en: "Vision 2030", ar: "رؤية 2030" },
    isVision2030: true,
    value: "1.2B SAR",
    year: "2024",
    scope: { en: "EPC", ar: "الهندسة والمشتريات والإنشاءات (EPC)" },
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

// Only the first six projects are shown for now; raise this to bring the others back.
const VISIBLE_PROJECTS = 6;

type Project = (typeof projects)[number] & { metaValue?: { en: string; ar: string } };

function toOffcanvasProject(project: Project): ProjectOffcanvasProject {
  return {
    title: project.title,
    description: { en: project.description.en[0], ar: project.description.ar[0] },
    detail: { en: project.description.en[1], ar: project.description.ar[1] },
    image: project.image,
    badges: project.isVision2030 ? [project.category, { en: "VISION 2030", ar: "رؤية 2030" }] : [project.category],
    value: project.value,
    year: project.year,
    scope: project.scope,
  };
}

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
  const [selectedProject, setSelectedProject] = useState<ProjectOffcanvasProject | null>(null);

  return (
    <section className={`w-full overflow-x-hidden bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading + Nav */}
      <div className="w-full px-6 lg:site-gutter mb-8 lg:mb-12 flex items-center justify-between">
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

      {/* Slider — the left gutter is applied via slidesOffsetBefore (inside the scroll track)
          instead of container padding, so it scrolls away once the user swipes past the first
          card, and cards run fully edge-to-edge on both sides from then on. */}
      <div className="w-full">
        <Swiper
          // Remount on language change so Swiper re-reads the page direction (RTL in Arabic).
          key={language}
          // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
          // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
          dir={language === "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Re-sync arrows after a remount instead of keeping the previous state.
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={24}
          slidesOffsetBefore={24}
          breakpoints={{
            1024: { slidesOffsetBefore: 64 },
          }}
        >
          {(projects as Project[]).slice(0, VISIBLE_PROJECTS).map((project, i) => {
            const title = language === "ar" ? project.title.ar : project.title.en;
            const category = language === "ar" ? project.category.ar : project.category.en;
            // Projects with metaValue show "Value" as the first meta row instead of "Location"
            const location = project.metaValue
              ? language === "ar" ? project.metaValue.ar : project.metaValue.en
              : language === "ar" ? project.location.ar : project.location.en;
            const client = language === "ar" ? project.client.ar : project.client.en;
            const logoAlt = language === "ar" ? project.logoAlt.ar : project.logoAlt.en;
            const description = language === "ar" ? project.description.ar : project.description.en;
            const readMore = language === "ar" ? "اقرأ المزيد" : "READ MORE";
            const locationLabel = project.metaValue
              ? language === "ar" ? "القيمة" : "Value"
              : language === "ar" ? "الموقع" : "Location";
            const clientLabel = language === "ar" ? "العميل" : "Client";
            // The real location, shown on hover for projects whose first meta row is Value
            const place = language === "ar" ? project.location.ar : project.location.en;
            const placeLabel = language === "ar" ? "الموقع" : "Location";
            const dir = language === "ar" ? "rtl" : "ltr";

            return (
            <SwiperSlide key={i} className="!w-[80vw] lg:!w-[1000px]">
              {/* Desktop: image with hover-swap + slide-up description panel */}
              <div className="hidden lg:block group relative w-full h-[700px] overflow-hidden">
                {/* Base image */}
                <Image quality={100}
                  src={project.image}
                  alt={title}
                  fill
                  sizes="1000px"
                  className="object-cover animate-kenburns"
                />

                {/* Hover image — slides down from the top to cover the base image */}
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out overflow-hidden">
                  {/* Eager: the hover image sits off-screen until hover, so lazy loading
                      would only start fetching it (it's a very large file) once the user hovers. */}
                  <Image quality={95}
                    src={project.hoverImage}
                    alt={`${title} at night`}
                    fill
                    loading="eager"
                    sizes="1000px"
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
                      {project.metaValue ? (
                        // Value by default; swaps to Location while the slide is hovered
                        <>
                          <span className="opacity-70 group-hover:hidden">{locationLabel}</span>
                          <span className="group-hover:hidden">{location}</span>
                          <span className="opacity-70 hidden group-hover:inline">{placeLabel}</span>
                          <span className="hidden group-hover:inline">{place}</span>
                        </>
                      ) : (
                        <>
                          <span className="opacity-70">{locationLabel}</span>
                          <span>{location}</span>
                        </>
                      )}
                      <span className="opacity-70">{clientLabel}</span>
                      <span>{client}</span>
                    </div>
                  </div>

                  {/* Bottom: logo + CTA (default state) */}
                  <div dir="ltr" className="flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex flex-col items-start gap-2">
                      <div className="relative w-[90px] h-[90px]">
                        <Image quality={95} src={project.logo} alt={logoAlt} fill className="object-contain" />
                      </div>
                    </div>

                    <Button variant="secondary" onClick={() => setSelectedProject(toOffcanvasProject(project))}>{readMore}</Button>
                  </div>
                </div>

                {/* Hover panel — description slides up from the bottom */}
                <div dir={dir} className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150 bg-white/15 backdrop-blur-md p-8 flex flex-col sm:flex-row sm:items-end gap-6 text-white">
                  <div className="relative w-[90px] h-[90px] shrink-0">
                    <Image quality={95} src={project.logo} alt={logoAlt} fill className="object-contain" />
                  </div>

                  <div className="flex-1 space-y-3">
                    {description.map((paragraph, idx) => (
                      <p key={idx} className="text-base font-light leading-relaxed text-white/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="shrink-0">
                    <Button variant="secondary" onClick={() => setSelectedProject(toOffcanvasProject(project))}>{readMore}</Button>
                  </div>
                </div>
              </div>

              {/* Mobile/tablet: image on top, description panel always visible below (no hover) */}
              <div className="lg:hidden w-full">
                <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden">
                  <Image quality={95}
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
                      <div className="relative w-[64px] h-[64px] shrink-0">
                        <Image quality={95} src={project.logo} alt={logoAlt} fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div dir={dir} className="bg-[#2E368F] p-6 sm:p-8 text-white min-h-[320px] sm:min-h-[360px] flex flex-col">
                  <div className="space-y-3">
                    {description.map((paragraph, idx) => (
                      <p key={idx} className="text-sm font-light leading-relaxed text-white/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Button variant="secondary" iconOutline onClick={() => setSelectedProject(toOffcanvasProject(project))}>{readMore}</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <ProjectOffcanvas project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
