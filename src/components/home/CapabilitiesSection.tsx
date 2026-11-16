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
  { key: "social", label: { en: "Social Infrastructure", ar: "البنية التحتية المجتمعية" } },
  { key: "renewable", label: { en: "Renewable Energy", ar: "الطاقة المتجددة" } },
  { key: "water", label: { en: "Water & Utilities", ar: "المياه والمرافق" } },
  { key: "transportation", label: { en: "Transportation", ar: "النقل والمواصلات" } },
];

const projects = [
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "social",
    title: { en: "Oxagon Village", ar: "أوكساچون" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    metaValue: { en: "21 Billion SAR", ar: "21 مليار ريال" },
    consortium: { en: "Nesma Oxagon Village Company", ar: "شركة نسما لقرية أوكساچون المحدودة" },
    image: "/images/oxagon-new1.png",
    hoverImage: "/images/h-fp.png",
    logo: "/images/ppp-logos/oxagon.png",
    logoAlt: { en: "Nesma Oxagon Village Company", ar: "شركة نسما لقرية أوكساچون المحدودة" },
    isVision2030: false,
    value: "21B SAR",
    year: "2023",
    yearLabel: { en: "Awarded", ar: "سنة الترسية" },
    scope: { en: "Nesma Oxagon Village Company", ar: "شركة نسما لقرية أوكساچون المحدودة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Dedicated living community within NEOM's Oxagon, designed to house approximately 20,000 residents.",
        "The project integrates schools, healthcare, retail, hospitality, and walkable smart mobility systems, creating a sustainable urban environment that connects directly with Oxagon's industrial and innovation hub.",
      ],
      ar: [
        "تأسست \"شركة نسما لقرية أوكساچون المحدودة\" ضمن نموذج الشراكة بين القطاعين العام والخاص (PPP) لتنفيذ مشروع المجتمع السكني الأول في \"نيوم\". يشمل المشروع إنشاء وحدات سكنية ومرافق خدمية بطاقة استيعابية تبلغ 20,000 ساكن، على ثماني مراحل، ويستمر تشغيله حتى ديسمبر 2030، بنظام الدفع القائم على الجاهزية.",
        "تم توقيع العقود في أكتوبر 2023، وتم الوصول إلى الإغلاق المالي في مايو 2024. وفي عام 2024، صُنّف المشروع كأحد أفضل مشاريع الشراكة بين القطاعين العام والخاص في منطقة الشرق الأوسط وأفريقيا. وعند انتهاء العقد، سيتم إزالة المجمع السكني وإعادة الأرض إلى حالتها الطبيعية.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "social",
    title: { en: "NEOM Residential Community 1", ar: "مجمع نيوم السكني 1" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    consortium: { en: "Nesma Coastal CO. LTD.", ar: "شركة نسما الساحلية المحدودة" },
    image: "/images/community-1.png",
    hoverImage: "/images/community-1.png",
    logo: "/images/ppp-logos/community-1.png",
    logoAlt: { en: "Nesma Coastal CO. LTD.", ar: "شركة نسما الساحلية المحدودة" },
    isVision2030: false,
    // No value / award year yet — the detail panel shows Client and Location in their place
    showClientLocation: true,
    value: "",
    year: "",
    scope: { en: "Nesma Coastal CO. LTD.", ar: "شركة نسما الساحلية المحدودة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company to construct the NEOM Residential Community Project 1, which will build and maintain housing units and support facilities for 10,000 residents. The project will span 5 phases.",
        "Upon the contract expiry in Dec. 2030, the residential community will be removed, and the area will be returned to NEOM at its natural state.",
      ],
      ar: [
        "تأسست كشركة ذات مسؤولية محدودة لأغراض خاصة لتنفيذ مشروع إنشاء مجمع \"نيوم السكني 1\" بسعة إجمالية تبلغ 10 آلاف ساكن.",
        "ويمتد على خمس مراحل. وعند انتهاء العقد في ديسمبر 2030، ستتم إزالة المجمع وإعادة المنطقة إلى نيوم في حالتها الطبيعية.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "social",
    title: { en: "NEOM Residential Community 2", ar: "مجمع نيوم السكني 2" },
    location: { en: "KSA", ar: "المملكة العربية السعودية" },
    client: { en: "NEOM", ar: "نيوم" },
    consortium: { en: "Nesma Al Aqaba City CO. LTD.", ar: "شركة مدينة نسما العقبة المحدودة" },
    image: "/images/community-2.png",
    hoverImage: "/images/community-2.png",
    logo: "/images/ppp-logos/community-2.png",
    logoAlt: { en: "Nesma Al Aqaba City CO. LTD.", ar: "شركة مدينة نسما العقبة المحدودة" },
    isVision2030: false,
    // No value / award year yet — the detail panel shows Client and Location in their place
    showClientLocation: true,
    value: "",
    year: "",
    scope: { en: "Nesma Al Aqaba City CO. LTD.", ar: "شركة مدينة نسما العقبة المحدودة" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company to construct the NEOM Residential Community Project 2, which will build and maintain housing units and support facilities for 5,000 residents.",
        "Upon the contract expiry in Dec. 2030, the residential complexes will be removed, and the area will be returned to NEOM at its natural state.",
      ],
      ar: [
        "تأسست كشركة ذات مسؤولية محدودة لأغراض خاصة لتنفيذ مشروع إنشاء مجمع \"نيوم السكني 2\"، بسعة إجمالية تبلغ 5 آلاف ساكن.",
        "ويمتد على خمس مراحل. وعند انتهاء العقد في ديسمبر 2030، ستتم إزالة المجمعات السكنية وإعادة المنطقة إلى \"نيوم\" في حالتها الطبيعية.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "renewable",
    title: { en: "Dumat Al Jandal Wind Farm", ar: "دومة الجندل لطاقة الرياح" },
    location: { en: "Dumat Al Jandal", ar: "دومة الجندل" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    // Shown as "Value" in the card's top meta (Location appears on hover)
    metaValue: { en: "1.9 Billion SAR", ar: "1.9 مليار ريال" },
    consortium: { en: "Dumat Aljandal Wind Company For Energy", ar: "شركة رياح دومة الجندل للطاقة" },
    image: "/images/pr2.png",
    hoverImage: "/images/pr2-hover.png",
    logo: "/images/ppp-logos/dumat-al-jandal.png",
    logoAlt: { en: "Dumat Aljandal Wind Company For Energy", ar: "شركة رياح دومة الجندل للطاقة" },
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
        "تأسست \"شركة دومة الجندل للطاقة\" لتطوير أول مشروع لطاقة الرياح البرية في المملكة، وذلك ضمن نموذج الشراكة بين القطاعين العام والخاص، من خلال تحالف يضم \"نسما\"، \"مصدر\"، و\"إي دي إف رينوبلز\". يقع المشروع في منطقة الجوف، وتبلغ قدرته الإنتاجية 400 ميجاواط، ليكون المشروع الأول والأكبر من نوعه في المملكة.",
        "بدأ التشغيل التجاري في صيف عام 2022 بموجب اتفاقية شراء طاقة لمدة 20 عامًا مع الشركة السعودية لشراء الطاقة. ويُسهم المشروع في تزويد نحو 70,000 منزل بالكهرباء سنويًا، كما يُسهم في خفض ما يقارب مليون طن من انبعاثات ثاني أكسيد الكربون سنويًا.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "renewable",
    title: { en: "South Jeddah Solar", ar: "محطة جنوب جدة الكهروضوئية للطاقة" },
    location: { en: "Jeddah", ar: "جدة" },
    client: { en: "Principal Buyer", ar: "الجهة المالكة الرئيسية" },
    // Shown as "Value" in the card's top meta (instead of Location)
    metaValue: { en: "889 Million SAR", ar: "889 مليون ريال" },
    consortium: { en: "South Jeddah Noor", ar: "نور جنوب جدة" },
    image: "/images/s-solar.png",
    hoverImage: "/images/fp3-hover.png",
    logo: "/images/ppp-logos/south-jeddah-noor.svg",
    logoAlt: { en: "South Jeddah Noor", ar: "نور جنوب جدة" },
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
        "تأسست شركة \"نور جنوب جدة\" لتطوير محطة طاقة شمسية كهروضوئية بقدرة 300 ميجاواط، وذلك ضمن نموذج الشراكة بين القطاعين العام والخاص، من خلال تحالف يضم \"نسما\"، \"مصدر\"، و\"إي دي إف رينوبلز\".",
        "تقع المحطة جنوب مدينة جدة، وقد وصلت إلى التشغيل التجاري الكامل في صيف عام 2023، وتعمل بموجب اتفاقية شراء طاقة لمدة 25 عامًا مع الشركة السعودية لشراء الطاقة. توفر المحطة الكهرباء لنحو 45,000 منزل بالكهرباء سنويًا، وتُسهم في خفض ما يقارب 400,000 طن من انبعاثات ثاني أكسيد الكربون، دعمًا لأهداف المملكة في الطاقة النظيفة.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "water",
    title: { en: "Yanbu 4 Independent Water", ar: "ينبع 4 لتحلية المياه" },
    location: { en: "Al Rais, Al Madinah", ar: "الرايس، المدينة المنورة" },
    client: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    consortium: { en: "Yanbu Int' Water Company", ar: "شركة ينبع الدولية للمياه" },
    image: "/images/yanbu-4.png",
    hoverImage: "/images/yanbu-4.png",
    logo: "/images/ppp-logos/yanbu-4.png",
    logoAlt: { en: "Yanbu Int' Water Company", ar: "شركة ينبع الدولية للمياه" },
    isVision2030: false,
    // No value / award year yet — the detail panel shows Client and Location in their place
    showClientLocation: true,
    value: "",
    year: "",
    scope: { en: "Yanbu Int' Water Company", ar: "شركة ينبع الدولية للمياه" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company following the formation of a consortium between Engie, Nesma, and Mowah, Yanbu 4 was developed to construct and operate a seawater desalination plant in Al Rais, Al Madinah, under the public-private partnership (PPP) model.",
        "The plant has a daily capacity of 450,000 m³, a 42 km transmission pipeline, and an 11 MWp solar power facility. It supplies potable water to Makkah and Madinah, serving up to 3 million people. The project reached financial close in March 2021 and began commercial operations in May 2023 under a 25-year Water Purchase Agreement.",
      ],
      ar: [
        "تأسست شركة ينبع الدولية للمياه لتطوير مشروع \"ينبع 4\" لتحلية المياه، بعد تشكيل تحالف يضم \"إنجي\"، \"نسما\"، و\"موه\"، وذلك ضمن نموذج الشراكة بين القطاعين العام والخاص (PPP).",
        "يشمل المشروع إنشاء وتشغيل محطة لتحلية مياه البحر في منطقة الرايس بالمدينة المنورة، بسعة إنتاجية تبلغ 450,000 متر مكعب يوميًا، بالإضافة إلى محطة طاقة شمسية بقدرة 11 ميجاواط، وخط نقل بطول 42 كيلومترًا. يُسهم المشروع في تزويد نحو 3 ملايين نسمة بالمياه، وقد حقق الإغلاق المالي في مارس 2021، وبدأ التشغيل التجاري في مايو 2023، بموجب اتفاقية شراء مياه لمدة 25 عامًا.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "water",
    title: { en: "Jubail 3B Independent Water", ar: "الجبيل 3B لتحلية المياه" },
    location: { en: "Jubail", ar: "الجبيل" },
    client: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    consortium: { en: "Al Jubail International Water Company", ar: "شركة الجبيل الدولية للمياه" },
    image: "/images/jubail.png",
    hoverImage: "/images/jubail.png",
    logo: "/images/ppp-logos/jubail-3b.png",
    logoAlt: { en: "Al Jubail International Water Company", ar: "شركة الجبيل الدولية للمياه" },
    isVision2030: false,
    // No value / award year yet — the detail panel shows Client and Location in their place
    showClientLocation: true,
    value: "",
    year: "",
    scope: { en: "Al Jubail International Water Company", ar: "شركة الجبيل الدولية للمياه" },
    scopeLabel: { en: "Consortium", ar: "التحالف" },
    description: {
      en: [
        "Established as a special purpose company to develop the Jubail 3B Independent Water Project, following a consortium of Engie, Nesma, and Al Ajlan & Bros, the project was implemented under the public-private partnership (PPP) model. It involves constructing and operating a reverse osmosis desalination plant in Jubail with a capacity of 570,000 m³ per day.",
        "The project includes a 61 MWp solar facility—the largest for a desalination plant in the Kingdom, along with transmission lines and a substation. It serves 2 million people in Riyadh and Qassim. Financial close was reached in June 2022, and the plant began operations in March 2024 under a 25-year Water Purchase Agreement.",
      ],
      ar: [
        "تأسست شركة الجبيل الدولية للمياه لتطوير مشروع الجبيل 3B لتحلية المياه المستقلة ضمن نموذج الشراكة بين القطاعين العام والخاص (PPP)، بعد تشكيل تحالف يضم \"إنجي\"، \"نسما\"، و\"مجموعة العجلان وإخوانه\". يشمل المشروع إنشاء وتشغيل محطة تحلية بتقنية التناضح العكسي في مدينة الجبيل، بسعة إنتاجية تبلغ 570,000 متر مكعب يوميًا.",
        "ويضم المشروع محطة طاقة شمسية تبلغ قدرتها 61 ميجاواط، وخطوط نقل، ومحطة تحويل كهربائية. يخدم المشروع نحو مليوني نسمة في منطقتي الرياض والقصيم، وقد حقق الإغلاق المالي في يونيو 2022، وبدأ التشغيل التجاري في مارس 2024، بموجب اتفاقية شراء مياه لمدة 25 عامًا مع الشركة السعودية لشراكات المياه.",
      ],
    },
  },
  {
    category: { en: "INFRASTRUCTURAL", ar: "البنية التحتية" },
    tab: "water",
    title: { en: "Jubail-Buraydah IWTP", ar: "خط أنابيب نقل المياه المستقل الجبيل-بريدة" },
    location: { en: "Jubail & Al-Qassim", ar: "الجبيل والقصيم" },
    client: { en: "Saudi Water Partnership Company", ar: "الشركة السعودية لشراكات المياه" },
    metaValue: { en: "8.5 Billion SAR", ar: "8.5 مليار ريال" },
    consortium: { en: "Stream Water Transmission Co", ar: "شركة ستريم لنقل المياه" },
    image: "/images/fp-4.png",
    hoverImage: "/images/fp-4-hover.png",
    logo: "/images/ppp-logos/stream.png",
    logoAlt: { en: "Stream Water Transmission Co", ar: "شركة ستريم لنقل المياه" },
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
        "أحد أكبر مشاريع نقل المياه في المملكة، لنقل المياه المحلاة من الجبيل إلى القصيم عبر خط أنابيب بطول 587 كم وبطاقة 650,000 م³ يوميًا. يتم تطوير المشروع وفق نظام BOOT من قبل شركة الجميح للطاقة والمياه، ونسما، وبُحُر للاستثمار.",
        "وقد حقق المشروع الإغلاق المالي في أكتوبر 2025. ومن المقرر أن يبدأ التشغيل التجاري في الربع الثاني من عام 2029، مع خاصية الضخ العكسي لتعزيز الكفاءة ودعم النمو الاقتصادي في منطقة القصيم.",
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
    logo: "/images/ppp-logos/sana-taibah.png",
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
        "تأسست \"شركة سَنا طَيْبَة\" لتطوير محطة \"الحناكية\" للطاقة الشمسية الكهروضوئية بقدرة 1.1 جيجاواط، وذلك ضمن نموذج الشراكة بين القطاعين العام والخاص (PPP) من خلال تحالف يضم \"نسما\"، \"مصدر\"، و\"إي دي إف رينوبلز\". تقع المحطة في منطقة المدينة المنورة، وتُعد من أكبر المشاريع من نوعها في المنطقة.",
        "المشروع قيد الإنشاء حاليًا، ويعمل بموجب اتفاقية شراء طاقة لمدة 25 عامًا مع الشركة السعودية لشراء الطاقة. ومن المتوقع أن يُسهم في تزويد نحو 190,000 منزل بالكهرباء سنويًا، وتقليل ما يصل إلى 1.8 مليون طن من انبعاثات ثاني أكسيد الكربون، دعمًا لرؤية المملكة 2030.",
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
    logo: "/images/ppp-logos/modern-bus.png",
    logoAlt: { en: "Modern Bus Company Limited", ar: "شركة الحافلات الحديثة المحدودة" },
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
        "تأسست كشركة ذات غرض خاص لتنفيذ عمليات برنامج النقل العام في مكة المكرمة، بعد تشكيل ائتلاف سعودي-إسباني يضم شركة نسما المحدودة، مجموعة المغربي، والشركاء الإسبان: شركة إماثيا، كونسلت ترانس، وترانسبورتس سيوتات كوميتال (TCC).",
        "وقد فازت على عقد تصميم وشراء وتشغيل الحافلات في مدينة مكة المكرمة.",
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
  showClientLocation?: boolean;
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
    logo: { src: project.logo, alt: project.logoAlt },
    badges: project.isVision2030 ? [project.category, { en: "VISION 2030", ar: "رؤية 2030" }] : [project.category],
    scope: project.scope,
    scopeLabel: project.scopeLabel,
    ...(project.showClientLocation
      ? {
          value: project.client,
          valueLabel: { en: "Client", ar: "العميل" },
          year: project.location,
          yearLabel: { en: "Location", ar: "الموقع" },
        }
      : { value: project.value, year: project.year, yearLabel: project.yearLabel }),
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
    // Cards sit on dark photos, so they use the all-white logo; the "Read more" panel keeps the colour one.
    const logoWhite = project.logo.replace("/ppp-logos/", "/ppp-logos/text-white/");
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
              <div className="relative w-[170px] h-[80px]">
                <Image quality={95} src={logoWhite} alt={logoAlt} fill sizes="170px" className="object-contain object-left" />
              </div>

              <Button variant="secondary" onClick={() => setSelectedProject(toOffcanvasProject(project))}>{readMore}</Button>
            </div>
          </div>

          {/* Hover panel — description slides up from the bottom */}
          <div dir={dir} className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150 bg-white/15 backdrop-blur-md p-8 flex flex-col sm:flex-row sm:items-end gap-6 text-white">
            <div className="relative w-[170px] h-[80px] shrink-0">
              <Image quality={95} src={logoWhite} alt={logoAlt} fill sizes="170px" className="object-contain object-left" />
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

              {/* Mobile shows only the logo here — Value / Client / Consortium are in the "Read more" panel */}
              <div dir="ltr" className="flex items-end justify-end">
                <div className="relative w-[120px] h-[56px] shrink-0">
                  <Image quality={95} src={logoWhite} alt={logoAlt} fill sizes="120px" className="object-contain object-right" />
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
