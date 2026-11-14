"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectOffcanvas, type ProjectOffcanvasProject } from "@/components/ui/ProjectOffcanvas";
import "swiper/css";

// Tabs above the slider — each project is listed under the tab named in its `tab` field.
const tabs = [
  { key: "social", label: { en: "Social Infrastructure", ar: "البنية التحتية الاجتماعية" } },
  { key: "renewable", label: { en: "Renewable Energy", ar: "الطاقة المتجددة" } },
  { key: "water", label: { en: "Water & Utilities", ar: "المياه والمرافق" } },
  { key: "transportation", label: { en: "Transportation", ar: "النقل" } },
];

const projects = [
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "social",
    title: { en: "Oxagon Village", ar: "قرية أوكساغون" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    metaValue: { en: "21 Billion SAR", ar: "21 مليار ريال" },
    consortium: { en: "Nesma Oxagon Village Company", ar: "شركة نسما لقرية أوكساغون" },
    image: "/images/oxagon-new1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/neom-white.png",
    logoAlt: { en: "NEOM", ar: "نيوم" },
    isVision2030: false,
    value: "21B SAR",
    year: "2023",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Nesma Oxagon Village Company", ar: "شركة نسما لقرية أوكساغون" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
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
    tab: "renewable",
    title: { en: "Dumat Al Jandal Wind Farm", ar: "مزرعة رياح دومة الجندل" },
    location: { en: "Dumat Al Jandal", ar: "دومة الجندل" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    // Shown as "Value" in the card's top meta (Location appears on hover)
    metaValue: { en: "1.9 Billion SAR", ar: "1.9 مليار ريال" },
    consortium: { en: "Dumat Aljandal Wind Company For Energy", ar: "شركة رياح دومة الجندل للطاقة" },
    image: "/images/pr2.png",
    hoverImage: "/images/pr2-hover.png",
    logo: "/images/fp-3-logo.png",
    logoAlt: { en: "Principal Buyer", ar: "المشتري الرئيس" },
    isVision2030: false,
    value: "1.9B SAR",
    year: "2019",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Dumat Aljandal Wind Company For Energy", ar: "شركة رياح دومة الجندل للطاقة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company by a consortium of Nesma, Masdar, and EDF Renewables, the Dumat Al Jandal Power Company was developed under the public-private partnership (PPP) model to build and operate the first onshore wind power plant in Saudi Arabia with a capacity of 400 MW in Al Jouf. It is the first and largest of its kind in the Kingdom.",
        "The project began commercial operations in the summer of 2022 under a 20-year power purchase agreement with the Saudi Power Procurement Company (SPPC). It supplies power to about 70,000 homes annually and offsets nearly 1 million tonnes of CO₂ emissions each year.",
      ],
      ar: [
        "أُسّست شركة دومة الجندل للطاقة كشركة ذات غرض خاص من قِبل تحالف يضم نسما ومصدر وEDF Renewables، وطُوّرت وفق نموذج الشراكة بين القطاعين العام والخاص لإنشاء وتشغيل أول محطة لطاقة الرياح البرية في المملكة العربية السعودية بقدرة 400 ميغاواط في منطقة الجوف، وهي الأولى والأكبر من نوعها في المملكة.",
        "بدأ المشروع التشغيل التجاري في صيف عام 2022 بموجب اتفاقية شراء طاقة مدتها 20 عامًا مع الشركة السعودية لشراء الطاقة. ويزوّد نحو 70,000 منزل بالطاقة سنويًا، ويخفض قرابة مليون طن من انبعاثات ثاني أكسيد الكربون كل عام.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "renewable",
    title: { en: "South Jeddah Solar", ar: "جنوب جدة للطاقة الشمسية" },
    location: { en: "Jeddah", ar: "جدة" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    // Shown as "Value" in the card's top meta (instead of Location)
    metaValue: { en: "889 Million SAR", ar: "889 مليون ريال" },
    consortium: { en: "South Jeddah Noor", ar: "نور جنوب جدة" },
    image: "/images/s-solar.png",
    hoverImage: "/images/fp3-hover.png",
    logo: "/images/fp-3-logo.png",
    logoAlt: { en: "Principal Buyer", ar: "المشتري الرئيس" },
    isVision2030: false,
    value: "889M SAR",
    year: "2021",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "South Jeddah Noor", ar: "نور جنوب جدة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company by a consortium of Nesma, Masdar, and EDF Renewables, the Jeddah Solar Project was developed under the public-private partnership (PPP) model to construct, finance, and operate a 300 MW solar photovoltaic power plant located south of Jeddah.",
        "The project reached the whole commercial operation in the summer of 2023 and operates under a 25-year Power Purchase Agreement with the Saudi Power Procurement Company (SPPC). It powers around 45,000 homes annually and offsets approximately 400,000 tonnes of CO₂ emissions.",
      ],
      ar: [
        "أُسّس مشروع جدة للطاقة الشمسية كشركة ذات غرض خاص من قِبل تحالف يضم نسما ومصدر وEDF Renewables، وطُوّر وفق نموذج الشراكة بين القطاعين العام والخاص لإنشاء وتمويل وتشغيل محطة طاقة شمسية كهروضوئية بقدرة 300 ميغاواط تقع جنوب جدة.",
        "بلغ المشروع التشغيل التجاري الكامل في صيف عام 2023، ويعمل بموجب اتفاقية شراء طاقة مدتها 25 عامًا مع الشركة السعودية لشراء الطاقة. ويزوّد نحو 45,000 منزل بالطاقة سنويًا، ويخفض قرابة 400,000 طن من انبعاثات ثاني أكسيد الكربون.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "water",
    title: { en: "Jubail-Buraydah IWTP", ar: "خط نقل المياه المستقل بين الجبيل وبريدة" },
    location: { en: "Jubail & Al-Qassim", ar: "الجبيل والقصيم" },
    client: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    metaValue: { en: "8.5 Billion SAR", ar: "8.5 مليار ريال" },
    consortium: { en: "Stream Water Transmission Co", ar: "شركة ستريم لنقل المياه" },
    image: "/images/fp-4.png",
    hoverImage: "/images/fp-4-hover.png",
    logo: "/images/fp-4-logo-swpc.png",
    logoAlt: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    isVision2030: false,
    value: "8.5B SAR",
    year: "2025",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Stream Water Transmission Co", ar: "شركة ستريم لنقل المياه" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
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
    tab: "renewable",
    title: { en: "Al Henakiyah Solar PV Power Plant", ar: "محطة الحناكية للطاقة الشمسية الكهروضوئية" },
    location: { en: "Al Henakiyah", ar: "الحناكية" },
    client: { en: "Sana Taibah", ar: "سنا طيبة" },
    metaValue: { en: "3.75 Billion SAR", ar: "3.75 مليار ريال" },
    image: "/images/solar.png",
    hoverImage: "/images/fp-5-hover.png",
    logo: "/images/fp-5-logo.png",
    logoAlt: { en: "Sana Taibah", ar: "سنا طيبة" },
    isVision2030: false,
    value: "3.75B SAR",
    year: "2023",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Sana Taibah", ar: "سنا طيبة" },
    scopeLabel: { en: "Client", ar: "العميل" },
    description: {
      en: [
        "Established as a special purpose company to develop the Al Henakiyah Solar PV Power Plant, following a consortium of Nesma, Masdar, and EDF Renewables, the project is being implemented under the public-private partnership (PPP) model. Located in Al Madinah Province, the 1.1 GW plant is currently under construction and is considered one of the largest projects of its kind in the region.",
        "It will operate under a 25-year Power Purchase Agreement with SPPC, supplying electricity to 190,000 homes annually and offsetting 1.8 million tonnes of CO₂ emissions, contributing to Saudi Arabia's renewable energy targets under Vision 2030.",
      ],
      ar: [
        "أُسّست شركة ذات غرض خاص لتطوير محطة الحناكية للطاقة الشمسية الكهروضوئية، بعد تشكيل تحالف يضم نسما ومصدر وEDF Renewables، ويُنفَّذ المشروع وفق نموذج الشراكة بين القطاعين العام والخاص. وتقع المحطة في منطقة المدينة المنورة بقدرة 1.1 جيجاواط، وهي قيد الإنشاء حاليًا، وتُعد من أكبر المشاريع من نوعها في المنطقة.",
        "ستعمل المحطة بموجب اتفاقية شراء طاقة مدتها 25 عامًا مع الشركة السعودية لشراء الطاقة، لتزوّد 190,000 منزل بالكهرباء سنويًا وتخفض 1.8 مليون طن من انبعاثات ثاني أكسيد الكربون، بما يسهم في تحقيق مستهدفات المملكة للطاقة المتجددة ضمن رؤية 2030.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "transportation",
    title: { en: "Makkah Public Transportation Program", ar: "برنامج النقل العام في مكة المكرمة" },
    location: { en: "Makkah", ar: "مكة المكرمة" },
    client: { en: "Royal Commission for Makkah City and Holy Sites", ar: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة" },
    metaValue: { en: "3.2 Billion SAR", ar: "3.2 مليار ريال" },
    consortium: { en: "Modern Bus Company Limited", ar: "شركة الحافلات الحديثة المحدودة" },
    image: "/images/makkah-new.png",
    hoverImage: "/images/fp-6-hover.png",
    logo: "/images/fp-6-logo.png",
    logoAlt: { en: "Royal Commission for Makkah City and Holy Sites", ar: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة" },
    isVision2030: false,
    value: "3.2B SAR",
    year: "2017",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Modern Bus Company Limited", ar: "شركة الحافلات الحديثة المحدودة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special-purpose company to operate the Makkah Public Transportation Program after the formation of a Saudi-Spanish consortium including Nesma Co. Ltd, Maghrabi Group, and Spanish partners Imathia, Consultrans, and TCC.",
        "The company was awarded the contract for the design, procurement, and operation of public buses in the Holy City of Makkah.",
      ],
      ar: [
        "أُسّست شركة ذات غرض خاص لتشغيل برنامج النقل العام في مكة المكرمة، بعد تشكيل تحالف سعودي إسباني يضم شركة نسما المحدودة ومجموعة المغربي، والشركاء الإسبان إيماثيا وكونسلترانس وTCC.",
        "وقد فازت الشركة بعقد تصميم وتوريد وتشغيل الحافلات العامة في مكة المكرمة.",
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

// Projects without a `tab` (the last two placeholders) aren't shown; give one a tab to list it.
type Project = (typeof projects)[number] & {
  tab?: string;
  // When set, the card's meta shows Value, Client and Consortium (no Location)
  consortium?: { en: string; ar: string };
  metaValue?: { en: string; ar: string };
  yearLabel?: { en: string; ar: string };
  scopeLabel?: { en: string; ar: string };
};

function toOffcanvasProject(project: Project): ProjectOffcanvasProject {
  return {
    title: project.title,
    description: { en: project.description.en[0], ar: project.description.ar[0] },
    detail: { en: project.description.en[1], ar: project.description.ar[1] },
    image: project.image,
    badges: project.isVision2030 ? [project.category, { en: "VISION 2030", ar: "رؤية 2030" }] : [project.category],
    value: project.value,
    year: project.year,
    yearLabel: project.yearLabel,
    scope: project.scope,
    scopeLabel: project.scopeLabel,
  };
}

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function CapabilitiesSection() {
  const { language } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  // Autoplay only runs while the slider is actually on screen (≥50% visible) — it starts when the user
  // scrolls to the section and stops when they scroll away, instead of advancing unseen from page load.
  const sliderRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        const autoplay = swiperRef.current?.autoplay;
        if (!autoplay) return;
        if (entry.isIntersecting) autoplay.start();
        else autoplay.stop();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectOffcanvasProject | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const tabProjects = (projects as Project[]).filter((p) => p.tab === activeTab);
  // A single project is shown as a plain card; the slider only appears for two or more.
  const isSlider = tabProjects.length > 1;

  // One project card — rendered as a slide, or on its own when a tab has a single project.
  const renderCard = (project: Project) => {
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
    const consortium = project.consortium && (language === "ar" ? project.consortium.ar : project.consortium.en);
    const consortiumLabel = language === "ar" ? "التحالف" : "Consortium";
    const dir = language === "ar" ? "rtl" : "ltr";

    return (
      <>
        {/* Desktop: single image (no hover swap) + slide-up description panel */}
        <div className="hidden lg:block group relative w-full h-[700px] overflow-hidden">
          <Image quality={100}
            src={project.image}
            alt={title}
            fill
            sizes="1000px"
            className="object-cover animate-kenburns"
          />

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

              <div dir={dir} className={`mt-6 grid ${consortium ? "grid-cols-[110px_auto]" : "grid-cols-[90px_auto]"} gap-y-2 text-xs font-medium tracking-wider uppercase`}>
                {consortium ? (
                  // Value, Client, Consortium — fixed, no Location swap on hover
                  <>
                    <span className="opacity-70">{locationLabel}</span>
                    <span>{location}</span>
                    <span className="opacity-70">{clientLabel}</span>
                    <span>{client}</span>
                    <span className="opacity-70">{consortiumLabel}</span>
                    <span>{consortium}</span>
                  </>
                ) : project.metaValue ? (
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
                {!consortium && (
                  <>
                    <span className="opacity-70">{clientLabel}</span>
                    <span>{client}</span>
                  </>
                )}
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

            {/* Description clamped to 3 lines — full text is in the "Read more" panel */}
            <div className="flex-1">
              <p className="text-base font-light leading-relaxed text-white/90 line-clamp-3">
                {description.join(" ")}
              </p>
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
                <div dir={dir} className={`grid ${consortium ? "grid-cols-[100px_auto]" : "grid-cols-[80px_auto]"} gap-y-2 text-xs font-medium tracking-wider uppercase`}>
                  <span className="opacity-70">{locationLabel}</span>
                  <span>{location}</span>
                  <span className="opacity-70">{clientLabel}</span>
                  <span>{client}</span>
                  {consortium && (
                    <>
                      <span className="opacity-70">{consortiumLabel}</span>
                      <span>{consortium}</span>
                    </>
                  )}
                </div>
                <div className="relative w-[64px] h-[64px] shrink-0">
                  <Image quality={95} src={project.logo} alt={logoAlt} fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div dir={dir} className="bg-[#2E368F] p-6 sm:p-8 text-white flex flex-col">
            {/* Mobile: description clamped to 3 lines (full text is in the "Read more" panel);
                min-h keeps every card the same height even when the text is shorter */}
            <p className="text-sm font-light leading-relaxed text-white/90 line-clamp-3 min-h-[3lh]">
              {description.join(" ")}
            </p>
            <div className="mt-auto pt-6">
              <Button variant="secondary" iconOutline onClick={() => setSelectedProject(toOffcanvasProject(project))}>{readMore}</Button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={`w-full overflow-x-hidden bg-white pt-[60px] lg:pt-[100px] ${language === "ar" ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      {/* Heading + Nav */}
      <div className="w-full px-6 lg:site-gutter flex items-center justify-between">
        <h2 dir={language === "ar" ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {language === "ar" ? "قدرات مجموعة نسما" : "Nesma Group Capabilities"}
        </h2>

        {/* Arrows only when the tab has more than one project to slide through */}
        <div className={`flex items-center gap-4 lg:gap-6 ${isSlider ? "" : "invisible"}`}>
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

      {/* Tabs — start on the right in Arabic */}
      <div dir={language === "ar" ? "rtl" : "ltr"} className="w-full px-6 lg:site-gutter mt-6 lg:mt-8 mb-8 lg:mb-12 flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-[#2E368F] text-white border-[#2E368F]"
                  : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
              }`}
            >
              {language === "ar" ? tab.label.ar : tab.label.en}
            </button>
          );
        })}
      </div>

      {/* Slider — the left gutter is applied via slidesOffsetBefore (inside the scroll track)
          instead of container padding, so it scrolls away once the user swipes past the first
          card, and cards run fully edge-to-edge on both sides from then on. */}
      <div ref={sliderRef} className="w-full">
        {isSlider ? (
          <Swiper
            // Remount on language change so Swiper re-reads the page direction (RTL in Arabic),
            // and on tab change so the new list starts from its first project.
            key={`${language}-${activeTab}`}
            // Explicit direction: Swiper reads it on init, which runs before LanguageProvider
            // flips <html dir>, so relying on the inherited direction left slides offset in Arabic.
            dir={language === "ar" ? "rtl" : "ltr"}
            modules={[Navigation, Autoplay]}
            // Always auto-advances every 2.5s (no hover pause), keeps running after manual navigation,
            // and rewinds to the first project after the last one.
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            rewind
            speed={800}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Swiper starts autoplay on init; hold it until the slider is in view (also after a
              // language-change remount, where the section may already be on screen)
              if (inViewRef.current) swiper.autoplay?.start();
              else swiper.autoplay?.stop();
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
            {tabProjects.map((project, i) => (
              <SwiperSlide key={i} className="!w-[80vw] lg:!w-[1000px]">
                {renderCard(project)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          tabProjects[0] && (
            <div className="w-full px-6 lg:site-gutter">
              <div className="w-[80vw] lg:w-[1000px] max-w-full">{renderCard(tabProjects[0])}</div>
            </div>
          )
        )}
      </div>

      <ProjectOffcanvas project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
