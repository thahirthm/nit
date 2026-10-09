type Localized = { en: string; ar: string };

export type NewsPost = {
  slug: string;
  title: Localized;
  date: Localized;
  badge: Localized;
  location: Localized;
  image: string;
  /** Paragraphs — wrap text in [[...]] to render it as a styled inline reference. */
  body: { en: string[]; ar: string[] };
};

export const newsPosts: NewsPost[] = [
  {
    slug: "sar-160-million-contract",
    title: {
      en: "Nesma Infrastructure & Technology Signs a Contract Valued at Over SAR 160 Million",
      ar: "نسما للبنية التحتية والتقنية توقّع عقدًا بقيمة تتجاوز 160 مليون ريال سعودي",
    },
    date: { en: "MAR 12, 2026", ar: "12 مارس 2026" },
    badge: { en: "NEWS", ar: "أخبار" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/s-1.png",
    body: {
      en: [
        "We are proud to announce that [[Nesma Infrastructure & Technology]] has signed a new contract valued at over SAR 160 million, reinforcing our position as a trusted delivery partner for critical infrastructure across the Kingdom.",
        "The scope covers design, procurement, and construction work that will expand regional power transmission capacity, supporting growing demand across commercial and industrial sectors.",
        "At NIT, we remain committed to delivering projects that strengthen the Kingdom's infrastructure backbone while upholding the highest standards of safety, quality, and execution.",
      ],
      ar: [
        "يسرّنا أن نعلن أن [[نسما للبنية التحتية والتقنية]] قد وقّعت عقدًا جديدًا بقيمة تتجاوز 160 مليون ريال سعودي، بما يعزز مكانتها كشريك تنفيذ موثوق للبنية التحتية الحيوية في جميع أنحاء المملكة.",
        "يشمل نطاق العمل أعمال التصميم والتوريد والإنشاء التي ستعمل على توسيع القدرة الإقليمية لنقل الكهرباء، دعمًا للطلب المتنامي في القطاعين التجاري والصناعي.",
        "في نسما للبنية التحتية والتقنية، نواصل التزامنا بتنفيذ مشاريع تعزز العمود الفقري للبنية التحتية في المملكة، مع الحفاظ على أعلى معايير السلامة والجودة والتنفيذ.",
      ],
    },
  },
  {
    slug: "sec-jubail-contract",
    title: {
      en: "Nesma Infrastructure & Technology Signs New Contract with the SEC in Jubail, valued at over SAR 500 Million",
      ar: "نسما للبنية التحتية والتقنية توقّع عقدًا جديدًا مع الشركة السعودية للكهرباء في الجبيل بقيمة تتجاوز 500 مليون ريال سعودي",
    },
    date: { en: "FEB 28, 2026", ar: "28 فبراير 2026" },
    badge: { en: "ANNOUNCEMENT", ar: "إعلان" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/s-2.png",
    body: {
      en: [
        "[[Nesma Infrastructure & Technology]] has signed a new contract with the Saudi Electricity Company (SEC) in Jubail, valued at over SAR 500 million, further expanding our footprint in the Eastern Province.",
        "The project will deliver new substation and transmission infrastructure designed to support the region's industrial growth and long-term energy security.",
        "This award reflects the continued confidence our partners place in NIT's ability to deliver complex energy infrastructure on time and to the highest technical standards.",
      ],
      ar: [
        "وقّعت [[نسما للبنية التحتية والتقنية]] عقدًا جديدًا مع الشركة السعودية للكهرباء في الجبيل، بقيمة تتجاوز 500 مليون ريال سعودي، في توسّع إضافي لحضورها في المنطقة الشرقية.",
        "سيقدّم المشروع بنية تحتية جديدة لمحطات التحويل والنقل، مصممة لدعم النمو الصناعي في المنطقة وتعزيز أمن الطاقة على المدى الطويل.",
        "يعكس هذا العقد الثقة المستمرة التي يوليها شركاؤنا لقدرة نسما للبنية التحتية والتقنية على تنفيذ مشاريع البنية التحتية المعقدة للطاقة في الوقت المحدد ووفق أعلى المعايير الفنية.",
      ],
    },
  },
  {
    slug: "saudi-electricity-company-contract",
    title: {
      en: "Nesma Infrastructure & Technology Signs New Contract with the Saudi Electricity Company",
      ar: "نسما للبنية التحتية والتقنية توقّع عقدًا جديدًا مع الشركة السعودية للكهرباء",
    },
    date: { en: "JAN 15, 2026", ar: "15 يناير 2026" },
    badge: { en: "INSIGHTS", ar: "رؤى" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/s3.png",
    body: {
      en: [
        "[[Nesma Infrastructure & Technology]] has signed a new contract with the Saudi Electricity Company, extending our long-standing partnership in delivering national power infrastructure.",
        "The agreement covers engineering, procurement, and construction services across multiple substation sites, reinforcing grid reliability for communities and industry alike.",
        "We look forward to building on this partnership as the Kingdom continues to scale its energy infrastructure in line with Vision 2030.",
      ],
      ar: [
        "وقّعت [[نسما للبنية التحتية والتقنية]] عقدًا جديدًا مع الشركة السعودية للكهرباء، في امتداد لشراكتها الطويلة الأمد في تنفيذ البنية التحتية الوطنية للطاقة.",
        "تشمل الاتفاقية خدمات الهندسة والتوريد والإنشاء عبر عدة مواقع لمحطات التحويل، بما يعزز موثوقية الشبكة للمجتمعات والصناعة على حد سواء.",
        "نتطلع إلى البناء على هذه الشراكة مع استمرار المملكة في توسيع بنيتها التحتية للطاقة بما يتماشى مع رؤية 2030.",
      ],
    },
  },
  {
    slug: "national-grid-sa-contract",
    title: { en: "New contract with the National Grid SA", ar: "عقد جديد مع الشركة الوطنية للشبكة السعودية" },
    date: { en: "MAR 12, 2026", ar: "12 مارس 2026" },
    badge: { en: "NEWS", ar: "أخبار" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/b3.png",
    body: {
      en: [
        "[[Nesma Infrastructure & Technology]] has been awarded a new contract with the National Grid SA, covering critical upgrades to transmission infrastructure across the network.",
        "The work will improve grid resilience and capacity, supporting the Kingdom's growing energy demand across residential, commercial, and industrial sectors.",
        "This award builds on NIT's track record of delivering large-scale energy infrastructure projects safely, efficiently, and to the highest quality standards.",
      ],
      ar: [
        "حصلت [[نسما للبنية التحتية والتقنية]] على عقد جديد مع الشركة الوطنية للشبكة السعودية، يشمل تحديثات محورية لبنية النقل التحتية عبر الشبكة.",
        "ستعمل هذه الأعمال على تحسين مرونة الشبكة وقدرتها الاستيعابية، دعمًا للطلب المتنامي على الطاقة في المملكة عبر القطاعات السكنية والتجارية والصناعية.",
        "يأتي هذا العقد ليعزز سجل نسما للبنية التحتية والتقنية الحافل في تنفيذ مشاريع البنية التحتية الكبرى للطاقة بأمان وكفاءة ووفق أعلى معايير الجودة.",
      ],
    },
  },
  {
    slug: "china-saudi-economic-cooperation-forum-2026",
    title: {
      en: "The China–Saudi Economic Cooperation Forum 2026",
      ar: "منتدى التعاون الاقتصادي الصيني–السعودي 2026",
    },
    date: { en: "FEB 28, 2026", ar: "28 فبراير 2026" },
    badge: { en: "ANNOUNCEMENT", ar: "إعلان" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/blog2.png",
    body: {
      en: [
        "[[Nesma Infrastructure & Technology]] participated in the China–Saudi Economic Cooperation Forum 2026, joining industry and government leaders to explore new avenues for bilateral investment and technology exchange.",
        "Discussions centered on infrastructure, energy, and digital transformation — sectors where NIT continues to play an active role in delivering the Kingdom's national priorities.",
        "We remain committed to building strategic partnerships that bring world-class technology and expertise to Saudi Arabia's infrastructure sector.",
      ],
      ar: [
        "شاركت [[نسما للبنية التحتية والتقنية]] في منتدى التعاون الاقتصادي الصيني–السعودي 2026، إلى جانب قادة من القطاعين الصناعي والحكومي، لاستكشاف آفاق جديدة للاستثمار الثنائي وتبادل التقنية.",
        "تركزت النقاشات على البنية التحتية والطاقة والتحول الرقمي، وهي قطاعات تواصل فيها نسما للبنية التحتية والتقنية أداء دور فاعل في تحقيق الأولويات الوطنية للمملكة.",
        "نواصل التزامنا ببناء شراكات استراتيجية تجلب تقنيات وخبرات عالمية المستوى إلى قطاع البنية التحتية في المملكة العربية السعودية.",
      ],
    },
  },
  {
    slug: "international-alignment-forum-vision-2030",
    title: {
      en: "The International Alignment Forum on Saudi Vision 2030",
      ar: "المنتدى الدولي للتوافق بشأن رؤية السعودية 2030",
    },
    date: { en: "JAN 15, 2026", ar: "15 يناير 2026" },
    badge: { en: "INSIGHTS", ar: "رؤى" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    image: "/images/blog3.png",
    body: {
      en: [
        "We are proud at [[Nesma Infrastructure & Technology]] to have participated in the International Alignment Forum on Saudi Vision 2030, where Eng. [[Rayan Alamoudi]], Executive Manager of Strategy & Business Development, delivered a keynote speech on transforming ambitious visions into tangible achievements through execution and strategic partnerships.",
        "Saudi Arabia's Vision 2030 is not merely a strategic direction — it is a national transformation program driven by technology, investment, and innovation. Through key sectors such as smart cities, energy sustainability, advanced manufacturing, and the digital economy, the Kingdom is actively building a competitive and sustainable future.",
        "At NIT, we remain committed to supporting this transformation through resilient infrastructure, advanced technological solutions, and long-term partnerships that create real impact on the ground.",
      ],
      ar: [
        "يسعدنا في [[نسما للبنية التحتية والتقنية]] أن نكون قد شاركنا في المنتدى الدولي للتوافق بشأن رؤية السعودية 2030، حيث ألقى المهندس [[ريان العمودي]]، المدير التنفيذي للاستراتيجية وتطوير الأعمال، كلمة رئيسية حول تحويل الرؤى الطموحة إلى إنجازات ملموسة عبر التنفيذ والشراكات الاستراتيجية.",
        "لا تُعدّ رؤية السعودية 2030 مجرد توجه استراتيجي، بل برنامج تحول وطني تقوده التقنية والاستثمار والابتكار. ومن خلال قطاعات محورية مثل المدن الذكية واستدامة الطاقة والتصنيع المتقدم والاقتصاد الرقمي، تعمل المملكة بفاعلية على بناء مستقبل تنافسي ومستدام.",
        "في نسما للبنية التحتية والتقنية، نواصل التزامنا بدعم هذا التحول من خلال بنية تحتية مرنة، وحلول تقنية متقدمة، وشراكات طويلة الأمد تُحدث أثرًا حقيقيًا على أرض الواقع.",
      ],
    },
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
