import type { ProjectOffcanvasProject } from "@/components/ui/ProjectOffcanvas";

// Project listings shared by the Projects page showcase and the Infrastructure / Technology
// solutions pages, so each project is maintained in one place.

type Project = ProjectOffcanvasProject;

const badgeOngoing = { en: "ONGOING", ar: "قيد التنفيذ" };
const badgeCompleted = { en: "COMPLETED", ar: "مكتمل" };
const badgeEnergy = { en: "ENERGY", ar: "الطاقة" };
const badgeWater = { en: "WATER", ar: "المياه" };
const badgeOM = { en: "O & M", ar: "التشغيل والصيانة" };
const badgeComms = { en: "COMMS", ar: "الاتصالات" };
const badgeCyber = { en: "CYBER SECURITY", ar: "الأمن السيبراني" };
const badgeDataCenters = { en: "DATA CENTERS", ar: "مراكز البيانات" };
const scopeEpc = { en: "EPC", ar: "الهندسة والتوريد والإنشاء (EPC)" };
const scopeDesignBuild = { en: "Design+Build", ar: "التصميم والتنفيذ" };

const hotProjects: Project[] = [
  {
    title: { en: "Rumah 380kV BSP 9077", ar: "محطة تحويل روضة 380 كيلوفولت BSP 9077" },
    description: {
      en: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation along with the installation of two 380kV, 80MVAR line reactors each at Airport North BSP and PS3 BSP.",
      ar: "تصميم محطة تحويل روضة 380 كيلوفولت (BSP) — القسمين (A وB) — وتوريد مكوناتها وإنشائها وتركيبها ووضعها في الخدمة، إلى جانب تركيب مفاعلَي خط بجهد 380 كيلوفولت وقدرة 80 ميجافار في كل من محطتي Airport North وPS3.",
    },
    image: "/images/p-1.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "915M SAR",
    year: "2025",
    scope: scopeEpc,
    completion: "2027",
  },
  {
    title: { en: "BISHA – PV 380/132 KV BSP", ar: "محطة بيشة الكهروضوئية 380/132 كيلوفولت BSP" },
    description: {
      en: "Engineering, procurement, construction, installation, testing, and commissioning of a 380/132kV Bulk Supply Point (BSP) substation to interconnect the Bisha PV solar generation facility with the transmission network, including all associated high-voltage equipment and systems.",
      ar: "الهندسة والتوريد والإنشاء والتركيب والاختبار والتشغيل لمحطة تحويل رئيسية (BSP) بجهد 380/132 كيلوفولت لربط محطة بيشة للطاقة الشمسية الكهروضوئية بشبكة النقل، بما في ذلك جميع معدات وأنظمة الجهد العالي المرتبطة بها.",
    },
    image: "/images/p-2.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "644M SAR",
    year: "2025",
    scope: scopeEpc,
    completion: "2027",
  },
  {
    title: { en: "NIC North 132KV BSP Substation in NEOM", ar: "محطة تحويل NIC North بجهد 132 كيلوفولت في نيوم" },
    description: {
      en: "Design, engineering, procurement, supply, and delivery of all required equipment and materials. Construction of the NIC North and NIC EV2 Bulk Supply Points (BSP) under a contract with the Saudi Electricity Company.",
      ar: "التصميم والهندسة والتوريد وتسليم جميع المعدات والمواد المطلوبة، وإنشاء محطتي التحويل الرئيسيتين NIC North وNIC EV2 بموجب عقد مع الشركة السعودية للكهرباء.",
    },
    image: "/images/p-3.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "348M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "Jafurah 380/230kV BSP Substation", ar: "محطة تحويل الجافورة 380/230 كيلوفولت BSP" },
    description: {
      en: "Design, engineering, procurement, supply, and delivery of all required equipment and materials. Construction of the Jafurah 380/230 kV Bulk Supply Point (BSP) substation.",
      ar: "التصميم والهندسة والتوريد وتسليم جميع المعدات والمواد المطلوبة، وإنشاء محطة التحويل الرئيسية (BSP) في الجافورة بجهد 380/230 كيلوفولت.",
    },
    image: "/images/p-4.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "331M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "Al Sharafiyah, 132/13.8kV Substation", ar: "محطة تحويل الشرفية 132/13.8 كيلوفولت" },
    description: {
      en: "Design, engineering, procurement, supply, and delivery of all required equipment and materials. Installation of 13.8kV fully insulated bus bars, two 750kVA station service transformers, a new Substation Automation System (SAS), and all auxiliary systems including protection, control, telecommunication, AMI, AC/DC systems, lighting, grounding, HVAC, plumbing, fire protection, and cyber security.",
      ar: "التصميم والهندسة والتوريد وتسليم جميع المعدات والمواد المطلوبة، وتركيب قضبان توزيع معزولة بالكامل بجهد 13.8 كيلوفولت، ومحوّلَي خدمة للمحطة بقدرة 750 كيلوفولت أمبير، ونظام جديد لأتمتة المحطة (SAS)، وجميع الأنظمة المساندة بما فيها الحماية والتحكم والاتصالات والعدادات الذكية (AMI) وأنظمة التيار المتردد والمستمر والإنارة والتأريض والتكييف والسباكة والحماية من الحريق والأمن السيبراني.",
    },
    image: "/images/p-5.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "80M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "220kV & 66kV Transmission Development", ar: "تطوير شبكة النقل بجهد 220 و66 كيلوفولت" },
    description: {
      en: "Design, Engineering, Procure, Supply and delivery of all material and equipments to the work site, construction, installation, testing & Commissioning and put into service of 66kV Substation in Bahrain. Al Sahaylah S/S was the first substation energized in phase-2 within the specified timeline despite the global pandemic.",
      ar: "التصميم والهندسة والتوريد وتسليم جميع المواد والمعدات إلى موقع العمل، والإنشاء والتركيب والاختبار والتشغيل ووضع محطة تحويل بجهد 66 كيلوفولت في الخدمة في البحرين. وكانت محطة السهلة أول محطة تُشغَّل في المرحلة الثانية ضمن الجدول الزمني المحدد رغم الجائحة العالمية.",
    },
    image: "/images/p-6.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "145M SAR",
    year: "2019",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "Modon-Asfan 110/13.8kV substation Jeddah", ar: "محطة تحويل مدن عسفان 110/13.8 كيلوفولت بجدة" },
    description: {
      en: "Design, Engineer, Procure, supply and deliver all materials and equipments to the work site, construct, install, test & commission and put into service the 110/13.8KV Modon Asfan S/S including supplying of all necessary materials and equipment, followed by their installation on-site.",
      ar: "تصميم وهندسة وتوريد وتسليم جميع المواد والمعدات إلى موقع العمل، وإنشاء محطة تحويل مدن عسفان بجهد 110/13.8 كيلوفولت وتركيبها واختبارها وتشغيلها ووضعها في الخدمة، بما في ذلك توريد جميع المواد والمعدات اللازمة ثم تركيبها في الموقع.",
    },
    image: "/images/p-7.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "51M SAR",
    year: "2019",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "HV 1222 Al-Quwaiza East 110/13.8 kV S/S Jeddah", ar: "محطة تحويل HV 1222 القويزة الشرقية 110/13.8 كيلوفولت بجدة" },
    description: {
      en: "Detailed engineering and design, procuring and supplying all necessary equipment and materials, and delivering them to the designated work site. The project specifically comprises the construction of Quwaiza east 110/13.8 kV in Jeddah.",
      ar: "الهندسة والتصميم التفصيلي، وشراء وتوريد جميع المعدات والمواد اللازمة وتسليمها إلى موقع العمل المحدد. ويشمل المشروع تحديدًا إنشاء محطة تحويل القويزة الشرقية بجهد 110/13.8 كيلوفولت في جدة.",
    },
    image: "/images/p-8.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "76M SAR",
    year: "2017",
    scope: scopeEpc,
    completion: "202",
  },
  {
    title: { en: "HV 1222 Al-Jawad 110/13.8 kV S/S Jeddah", ar: "محطة تحويل HV 1222 الجواد 110/13.8 كيلوفولت بجدة" },
    description: {
      en: "Construction of the Al-Jawad 110/13.8 kV substation in Jeddah which includes performing detailed engineering and design, procuring and supplying all necessary equipment and materials, and delivering them to the designated work site. The project specifically comprises the installation of a 110 kV GIS system with 14 bays, one 13.8 kV switchgear with 51 bays, three 50/67 MVA 110/13.8 kV power transformers, and three 13.8 kV outdoor-type 7 MVAR shunt capacitor banks, along with all associated substation equipment.",
      ar: "إنشاء محطة تحويل الجواد بجهد 110/13.8 كيلوفولت في جدة، ويشمل ذلك الهندسة والتصميم التفصيلي، وشراء وتوريد جميع المعدات والمواد اللازمة وتسليمها إلى موقع العمل المحدد. ويتضمن المشروع تحديدًا تركيب نظام GIS بجهد 110 كيلوفولت بـ 14 خلية، ولوحة مفاتيح بجهد 13.8 كيلوفولت بـ 51 خلية، وثلاثة محولات قدرة 50/67 ميجافولت أمبير بجهد 110/13.8 كيلوفولت، وثلاث مجموعات مكثفات تفريعية خارجية بجهد 13.8 كيلوفولت وقدرة 7 ميجافار، إلى جانب جميع معدات المحطة المرتبطة.",
    },
    image: "/images/p-9.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "94.5M SAR",
    year: "2017",
    scope: scopeEpc,
    completion: "2021",
  },
];

const waterProjects: Project[] = [
  {
    title: { en: "Wastewater Transfer Facility at Ras Tanura Refinery - RTR", ar: "منشأة نقل مياه الصرف في مصفاة رأس تنورة - RTR" },
    description: {
      en: "Execute full LSTK delivery of the Ras Tanura facilities, including detailed engineering, procurement, construction, testing, commissioning, and start-up support, covering all systems and infrastructure such as the Waste Transfer Facility and hazardous material management, in strict compliance with Saudi Aramco specifications and interface coordination requirements.",
      ar: "تنفيذ منشآت رأس تنورة بالكامل بنظام تسليم المفتاح بمبلغ مقطوع (LSTK)، بما يشمل الهندسة التفصيلية والتوريد والإنشاء والاختبار والتشغيل ودعم بدء التشغيل، لجميع الأنظمة والبنية التحتية مثل منشأة نقل النفايات وإدارة المواد الخطرة، مع الالتزام التام بمواصفات أرامكو السعودية ومتطلبات تنسيق الواجهات.",
    },
    image: "/images/p-10.png",
    badges: [badgeOngoing, badgeWater],
    value: "205M SAR",
    year: "2023",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "Water Transmission Facilities For East Hidd & South Bahrain", ar: "مرافق نقل المياه لشرق الحد وجنوب البحرين" },
    description: {
      en: "Construction of water distribution station and ground storage tank with all associated fittings with the overall tank capacity of 50,000 m3. The station is equipped with pumps, chlorination system, surge system and all related infrastructure works associated with in the station",
      ar: "إنشاء محطة لتوزيع المياه وخزان أرضي مع جميع التجهيزات المرتبطة به بسعة إجمالية تبلغ 50,000 متر مكعب. والمحطة مجهزة بمضخات ونظام كلورة ونظام لامتصاص التموجات وجميع أعمال البنية التحتية المرتبطة بها.",
    },
    image: "/images/p-11.png",
    badges: [badgeCompleted, badgeWater],
    value: "134M SAR",
    year: "2019",
    scope: scopeEpc,
    completion: "2020",
  },
  {
    title: { en: "Increasing the Pumping and Water Transmission Capacity", ar: "زيادة قدرة ضخ المياه ونقلها" },
    description: {
      en: "Increasing the Pumping and Water Transmission Capacity for the Urban Development Project in Salman and Ramli Cities. Design, supply, execution, and testing of 2 elevated tanks and 1 ground tank, along with a control and monitoring room, a chlorine building, and administrative buildings. The works also include the replacement of a medium-voltage service line.",
      ar: "زيادة قدرة ضخ المياه ونقلها لمشروع التطوير العمراني في مدينتي سلمان والرملي. ويشمل تصميم وتوريد وتنفيذ واختبار خزانين علويين وخزان أرضي، إلى جانب غرفة للتحكم والمراقبة ومبنى للكلور ومبانٍ إدارية. كما تشمل الأعمال استبدال خط خدمة للجهد المتوسط.",
    },
    image: "/images/p-12.png",
    badges: [badgeCompleted, badgeWater],
    value: "9.7M SAR",
    year: "2021",
    scope: scopeEpc,
    completion: "2024",
  },
  {
    title: { en: "Wastewater Treatment Plant and Pumping Station", ar: "محطة معالجة مياه الصرف الصحي ومحطة الضخ" },
    description: {
      en: "Operation and maintenance of the Tabuk Sewage Treatment Plant with an average flow capacity of 90,000 m³/day and a peak flow of up to 153,000 m³/day. The scope also includes the management of the main pumping station and transmission line, supported by a dedicated team of over 110 personnel.",
      ar: "تشغيل وصيانة محطة معالجة مياه الصرف الصحي في تبوك بمتوسط طاقة تدفق يبلغ 90,000 متر مكعب يوميًا وتدفق أقصى يصل إلى 153,000 متر مكعب يوميًا. ويشمل النطاق أيضًا إدارة محطة الضخ الرئيسية وخط النقل، بدعم من فريق متخصص يضم أكثر من 110 موظفين.",
    },
    image: "/images/p-13.png",
    badges: [badgeCompleted, badgeWater],
    value: "24M SAR",
    year: "2020",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "Underground Infrastructure and Utility Works", ar: "أعمال البنية التحتية والمرافق تحت الأرض" },
    description: {
      en: "Designing and developing integrated infrastructure networks, including sewage systems, stormwater drainage, irrigation water systems, electrical power distribution, telecommunication lines, and road networks. The scope encompasses planning, construction, and coordination of all utility services to ensure reliable, efficient, and sustainable infrastructure solutions tailored to urban and industrial development needs",
      ar: "تصميم وتطوير شبكات بنية تحتية متكاملة، تشمل أنظمة الصرف الصحي وتصريف مياه الأمطار وأنظمة مياه الري وتوزيع الطاقة الكهربائية وخطوط الاتصالات وشبكات الطرق. ويشمل النطاق تخطيط جميع خدمات المرافق وإنشاءها والتنسيق بينها لضمان حلول بنية تحتية موثوقة وفعالة ومستدامة تلبي احتياجات التنمية الحضرية والصناعية.",
    },
    image: "/images/p-14.png",
    badges: [badgeCompleted, badgeWater],
    value: "3.75B SAR",
    year: "2014",
    scope: scopeEpc,
    completion: "2017",
  },
  {
    title: { en: "Drinking water stations in four industrial cities", ar: "محطات مياه الشرب في أربع مدن صناعية" },
    description: {
      en: "Design, construction, and operation of potable water treatment plants across four key industrial locations: the Third Industrial City in Riyadh, Darmaa, MODON Oasis in Al-Ahsa, and MODON Oasis in Hail. The facilities are designed to deliver high-quality drinking water in compliance with national standards, supporting the growing needs of industrial and urban communities in each region.",
      ar: "تصميم وإنشاء وتشغيل محطات معالجة مياه الشرب في أربعة مواقع صناعية رئيسية: المدينة الصناعية الثالثة بالرياض، وضرما، وواحة مدن بالأحساء، وواحة مدن بحائل. وصُممت المرافق لتوفير مياه شرب عالية الجودة وفق المعايير الوطنية، بما يلبي الاحتياجات المتزايدة للمجتمعات الصناعية والحضرية في كل منطقة.",
    },
    image: "/images/p-15.png",
    badges: [badgeCompleted, badgeWater],
    value: "65M SAR",
    year: "2015",
    scope: scopeEpc,
    completion: "2020",
  },
];

const omProjects: Project[] = [
  {
    title: { en: "Operation and Maintenance of NEOM Facilities", ar: "تشغيل وصيانة مرافق نيوم" },
    description: {
      en: "Providing comprehensive operation and maintenance (O&M) services for NEOM's critical infrastructure facilities, including radio and communication systems, power and backup generation units, HVAC, fire-fighting, and electromechanical systems, ensuring high availability, reliability, and compliance with international standards.",
      ar: "تقديم خدمات تشغيل وصيانة (O&M) شاملة لمرافق البنية التحتية الحيوية في نيوم، بما في ذلك أنظمة الراديو والاتصالات، ووحدات توليد الطاقة والطاقة الاحتياطية، والتكييف، ومكافحة الحريق، والأنظمة الكهروميكانيكية، بما يضمن جاهزية وموثوقية عالية والتزامًا بالمعايير الدولية.",
    },
    image: "/images/p-16.png",
    badges: [badgeOngoing, badgeOM],
    value: "27.6 M SAR",
    year: "2015",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "16 Radio transmitting stations for ministry of media KSA", ar: "16 محطة إرسال إذاعي لوزارة الإعلام في المملكة" },
    description: {
      en: "Provided operation and maintenance services for 16 stations on a renewable three-year contractual basis from 1995 to 2014 where the scope included electronic devices, radio transmission equipment, antennas, power stations, generators, mechanical systems, air conditioning units, and fire-fighting systems.",
      ar: "تقديم خدمات التشغيل والصيانة لـ 16 محطة بموجب عقود قابلة للتجديد كل ثلاث سنوات من عام 1995 إلى عام 2014، وشمل النطاق الأجهزة الإلكترونية ومعدات الإرسال الإذاعي والهوائيات ومحطات الطاقة والمولدات والأنظمة الميكانيكية ووحدات التكييف وأنظمة مكافحة الحريق.",
    },
    image: "/images/p-17.png",
    badges: [badgeCompleted, badgeOM],
    value: "256M SAR",
    year: "1995",
    scope: scopeEpc,
    completion: "2014",
  },
  {
    title: { en: "15 Radio transmitting stations for SBA", ar: "15 محطة إرسال إذاعي لهيئة الإذاعة السعودية" },
    description: {
      en: "Design, procure, construct, install, and commission the Rumah 380kV BSP (A&B) substation",
      ar: "تصميم محطة تحويل روضة 380 كيلوفولت (BSP) — القسمين (A وB) — وتوريد مكوناتها وإنشائها وتركيبها ووضعها في الخدمة.",
    },
    image: "/images/p-18.png",
    badges: [badgeComms],
    value: "443M SAR",
    year: "2024",
    scope: scopeDesignBuild,
  },
];

const techHotProjects: Project[] = [
  {
    title: { en: "Security and Technical Equipment at ZATCA", ar: "المعدات الأمنية والتقنية في هيئة الزكاة والضريبة والجمارك" },
    description: {
      en: "Design, Supply of physical Security and technical Equipment at ZATCA including development of infrastructure, operation & maintenance of CCTV cameras, X-Rays Scanners, RPM, Sliding Gate, Arm Barriers, Road Blocker, Weight in Motion, Parking Management System.",
      ar: "تصميم وتوريد المعدات الأمنية المادية والتقنية في هيئة الزكاة والضريبة والجمارك، بما يشمل تطوير البنية التحتية وتشغيل وصيانة كاميرات المراقبة وأجهزة الفحص بالأشعة السينية وأجهزة رصد الإشعاع (RPM) والبوابات المنزلقة والحواجز الذراعية وموانع الطرق وأنظمة الوزن أثناء الحركة ونظام إدارة المواقف.",
    },
    image: "/images/p-19.png",
    badges: [badgeOngoing, badgeEnergy],
    value: "200M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2026",
  },
  {
    title: { en: "Safety and Security System for Sindalah Island", ar: "نظام السلامة والأمن لجزيرة سندالة" },
    description: {
      en: "NIT responsible for the design, supply, installation as well as the operation and maintenance of comprehensive security systems, including CCTV cameras and radar. Located off the coast of NEOM in the kingdom's north-west region, Sindalah is the NEOM first luxury island and yacht club destination in the Red Sea",
      ar: "تتولى نسما للبنية التحتية والتقنية تصميم وتوريد وتركيب وتشغيل وصيانة أنظمة أمنية متكاملة، تشمل كاميرات المراقبة والرادار. وتقع سندالة قبالة ساحل نيوم في شمال غرب المملكة، وهي أول جزيرة فاخرة ووجهة لنادي اليخوت تابعة لنيوم في البحر الأحمر.",
    },
    image: "/images/p-20.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "50M SAR",
    year: "2024",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "NEOM Digital Ambassador (Nora AI Platform)", ar: "سفير نيوم الرقمي (منصة نورة للذكاء الاصطناعي)" },
    description: {
      en: "The delivery of the cognitive service layer as the demand of AI development and applications are surging across different sectors, the first batch of cognitive services are targeting the general-purpose capabilities that once in place can be widely adopted across NEOM. The immediate need in Phase 1 is for Voice Recognition and Remote Sensing. NIT completed Phase 2 & 3",
      ar: "تقديم طبقة الخدمات الإدراكية في ظل الطلب المتزايد على تطوير تطبيقات الذكاء الاصطناعي في مختلف القطاعات، إذ تستهدف الدفعة الأولى من الخدمات الإدراكية القدرات العامة التي يمكن اعتمادها على نطاق واسع في نيوم بعد تشغيلها. وتمثلت الحاجة الفورية في المرحلة الأولى في التعرف على الصوت والاستشعار عن بعد، وقد أنجزت نسما للبنية التحتية والتقنية المرحلتين الثانية والثالثة.",
    },
    image: "/images/p-21.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "17M SAR",
    year: "2021",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "Wireless Network (Point to Point) Microwave System Project", ar: "مشروع نظام الميكروويف للشبكة اللاسلكية (من نقطة إلى نقطة)" },
    description: {
      en: "Turn-Key project and NIT was responsible for supply, deployment, configuration, testing, commissioning and handing over a fully functional stable microwave (point-to-point) system.",
      ar: "مشروع بنظام تسليم المفتاح، تولّت فيه نسما للبنية التحتية والتقنية توريد نظام ميكروويف (من نقطة إلى نقطة) ونشره وتهيئته واختباره وتشغيله وتسليمه بكامل جاهزيته واستقراره.",
    },
    image: "/images/p-22.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "10M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "NEOM Fixed Network Rollout Agreement", ar: "اتفاقية نشر الشبكة الثابتة في نيوم" },
    description: {
      en: "Design, build, deploy, operate and maintain the fixed optical network in the access, aggregation and backbone layer of NEOM. The recommended architecture is a meshed topology with all backbone nodes dual-homed to two central core sites, providing access to datacenters, mobile core and external networks. All backbone locations shall implement a 1+1 protection configuration for both the optical DWDM transmission ports and the IP routing equipment.",
      ar: "تصميم الشبكة الضوئية الثابتة في طبقات الوصول والتجميع والشبكة الأساسية في نيوم وبناؤها ونشرها وتشغيلها وصيانتها. وتعتمد البنية الموصى بها على طوبولوجيا شبكية ترتبط فيها جميع عقد الشبكة الأساسية بموقعين مركزيين رئيسيين، بما يتيح الوصول إلى مراكز البيانات والشبكة الأساسية للهاتف المحمول والشبكات الخارجية. وتُطبَّق في جميع مواقع الشبكة الأساسية حماية بتهيئة 1+1 لكل من منافذ الإرسال الضوئي DWDM ومعدات توجيه IP.",
    },
    image: "/images/p-23.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "443M SAR",
    year: "2021",
    scope: scopeEpc,
    completion: "2024",
  },
  {
    title: { en: "NEOM Blockchain Asset Traceability", ar: "منصة نيوم لتتبع الأصول بتقنية البلوك تشين" },
    description: {
      en: "The development of a blockchain assets traceability platform to digitally track and trace, audit, and verify the life cycle of physical and digital assets procured by Tonomus. Increase visibility by providing the ability to onboard and identify participants (digital or physical) involved in the asset lifecycle to the platform.",
      ar: "تطوير منصة لتتبع الأصول بتقنية البلوك تشين لتتبع دورة حياة الأصول المادية والرقمية التي تشتريها توناموس وتدقيقها والتحقق منها رقميًا، وزيادة الشفافية من خلال إتاحة تسجيل المشاركين (الرقميين أو الفعليين) في دورة حياة الأصول على المنصة وتحديد هوياتهم.",
    },
    image: "/images/p-24.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "17M SAR",
    year: "2022",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "RSAF ODP Project", ar: "مشروع ODP للقوات الجوية الملكية السعودية" },
    description: {
      en: "The project aims to modernize the Saudi Royal Air Force's command, control, and communication systems by upgrading data-link systems, virtualized software, networks, and VCCS. It includes installing updated air control interfaces, monitoring tools, and essential hardware, along with training personnel to ensure effective operation and long-term system sustainability",
      ar: "يهدف المشروع إلى تحديث أنظمة القيادة والتحكم والاتصالات في القوات الجوية الملكية السعودية من خلال تطوير أنظمة ربط البيانات والبرمجيات الافتراضية والشبكات وأنظمة التحكم في الاتصالات الصوتية (VCCS). ويشمل تركيب واجهات محدّثة للتحكم الجوي وأدوات المراقبة والأجهزة الأساسية، إلى جانب تدريب الكوادر لضمان التشغيل الفعّال واستدامة الأنظمة على المدى الطويل.",
    },
    image: "/images/p-25.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "83.5M SAR",
    year: "2018",
    scope: scopeEpc,
    completion: "2022",
  },
  {
    title: { en: "Riyadh with Makkah via fiber optic cable", ar: "ربط الرياض بمكة المكرمة عبر كابلات الألياف الضوئية" },
    description: {
      en: "Established a high-speed fiber optic cable connection between Riyadh and Makkah. The completed project included the deployment of an Outside Plant Network covering FTTH (Fiber to the Home), DATA, FON (Fiber Optic Network), and LNOP (Last Network Optical Point), significantly enhancing data transmission capabilities and connectivity between the two cities (Makkah & Riyadh)",
      ar: "إنشاء وصلة عالية السرعة بكابلات الألياف الضوئية بين الرياض ومكة المكرمة. وشمل المشروع المنجز نشر شبكة خارجية تغطي خدمات FTTH (الألياف إلى المنازل) والبيانات وشبكة الألياف الضوئية (FON) ونقطة الشبكة الضوئية الأخيرة (LNOP)، مما عزّز بشكل كبير قدرات نقل البيانات والاتصال بين المدينتين (مكة المكرمة والرياض).",
    },
    image: "/images/p-26.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "307M SAR",
    year: "2014",
    scope: scopeEpc,
    completion: "2019",
  },
];

const telecomProjects: Project[] = [
  {
    title: { en: "Saudi Telecom Company (STC) / Mobily Company", ar: "شركة الاتصالات السعودية (STC) / شركة موبايلي" },
    description: {
      en: "Shelter Production for STC and Mobily as per their specification including all accessories like Lighting, Access Control, MDB, A/C, Fire fighting, Trunking and DC Power. WiMAX, GSM and DMW Projects (Including RDU & TDVs)",
      ar: "تصنيع غرف المعدات لشركتي STC وموبايلي وفق مواصفاتهما، بما يشمل جميع الملحقات مثل الإنارة والتحكم في الدخول ولوحات التوزيع الرئيسية (MDB) والتكييف ومكافحة الحريق ومجاري الكابلات وطاقة التيار المستمر، إضافة إلى مشاريع WiMAX وGSM وDMW (بما فيها RDU وTDVs).",
    },
    image: "/images/p-27.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "68M SAR",
    year: "2004",
    scope: scopeEpc,
    completion: "2013",
  },
  {
    title: { en: "Radar Tower under Package R12-100-B07", ar: "برج رادار ضمن الحزمة R12-100-B07" },
    description: {
      en: "Engineering, procurement, and construction of a prefabricated galvanized steel radar tower with a reinforced concrete foundation, incorporating IEC-compliant electrical grounding, lightning protection, and cable management systems, along with structural erection, mechanical supports, and final testing and commissioning, all executed in accordance with Red Sea Global's technical specifications and HSE standards.",
      ar: "الهندسة والتوريد والإنشاء لبرج رادار مسبق الصنع من الفولاذ المجلفن على أساس من الخرسانة المسلحة، مع أنظمة تأريض كهربائي متوافقة مع معايير IEC والحماية من الصواعق وإدارة الكابلات، إلى جانب التركيب الإنشائي والدعامات الميكانيكية والاختبار النهائي والتشغيل، وفق المواصفات الفنية لشركة البحر الأحمر الدولية ومعايير الصحة والسلامة والبيئة.",
    },
    image: "/images/p-28.png",
    badges: [badgeCompleted, badgeEnergy],
    value: "2.5M SAR",
    year: "2023",
    scope: scopeEpc,
    completion: "2024",
  },
];

const cyberProjects: Project[] = [
  {
    title: { en: "Palo Alto - Cybersecurity", ar: "بالو ألتو - الأمن السيبراني" },
    description: {
      en: "Design, deployment, and configuration of advanced Palo Alto Networks firewall solutions to secure the data center (DC) network. The project ensures robust network security architecture, including intrusion prevention, threat detection and response, and enhanced traffic control, significantly fortifying the cybersecurity posture of the SCE's data infrastructure",
      ar: "تصميم ونشر وتهيئة حلول جدران الحماية المتقدمة من Palo Alto Networks لتأمين شبكة مركز البيانات (DC). ويضمن المشروع بنية قوية لأمن الشبكات تشمل منع التسلل واكتشاف التهديدات والاستجابة لها وتعزيز التحكم في حركة البيانات، مما يعزز بشكل كبير وضع الأمن السيبراني للبنية التحتية للبيانات لدى SCE.",
    },
    image: "/images/p-29.png",
    badges: [badgeCompleted, badgeCyber],
    value: "85M SAR",
    year: "2020",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "Trend Micro - Cybersecurity", ar: "تريند مايكرو - الأمن السيبراني" },
    description: {
      en: "A comprehensive suite of endpoint security solutions designed to protect organizations from various cyber threats. Advance Threat Protection, Endpoint Detection and Response, Ransomware Protection, Data Loss Prevention, Web Threat Protection, Data Loss Prevention",
      ar: "مجموعة شاملة من حلول أمن الأجهزة الطرفية مصممة لحماية المؤسسات من مختلف التهديدات السيبرانية، تشمل الحماية المتقدمة من التهديدات، واكتشاف التهديدات على الأجهزة الطرفية والاستجابة لها، والحماية من برامج الفدية، ومنع فقدان البيانات، والحماية من تهديدات الويب.",
    },
    image: "/images/p-30.png",
    badges: [badgeCompleted, badgeCyber],
    value: "65M SAR",
    year: "2020",
    scope: scopeEpc,
    completion: "2022",
  },
];

const dataCenterProjects: Project[] = [
  {
    title: { en: "Sang Hospital Data Center", ar: "مركز بيانات مستشفى سانغ" },
    description: {
      en: "Design, Supply of physical Security and technical Equipment at ZATCA including development of infrastructure, operation & maintenance of CCTV cameras, X-Rays Scanners, RPM, Sliding Gate, Arm Barriers, Road Blocker, Weight in Motion, Parking Management System.",
      ar: "تصميم وتوريد المعدات الأمنية المادية والتقنية في هيئة الزكاة والضريبة والجمارك، بما يشمل تطوير البنية التحتية وتشغيل وصيانة كاميرات المراقبة وأجهزة الفحص بالأشعة السينية وأجهزة رصد الإشعاع (RPM) والبوابات المنزلقة والحواجز الذراعية وموانع الطرق وأنظمة الوزن أثناء الحركة ونظام إدارة المواقف.",
    },
    image: "/images/p-31.png",
    badges: [badgeOngoing, badgeDataCenters],
    value: "244M SAR",
    year: "2017",
    scope: scopeEpc,
    completion: "2023",
  },
  {
    title: { en: "KAUST-GDH Teir III Data centre", ar: "مركز بيانات KAUST-GDH من الفئة الثالثة" },
    description: {
      en: "The Tier III Data Center Complex is located on the eastern edge of King Abdullah University of Science and Technology (KAUST) Detail design, Supply, Installation, testing and commissioning of Civil Works, Communications and security systems, Electrical, HVAC and Mechanical",
      ar: "يقع مجمع مركز البيانات من الفئة الثالثة على الطرف الشرقي لجامعة الملك عبدالله للعلوم والتقنية (كاوست)، ويشمل المشروع التصميم التفصيلي والتوريد والتركيب والاختبار والتشغيل للأعمال المدنية وأنظمة الاتصالات والأمن والأنظمة الكهربائية والتكييف والأنظمة الميكانيكية.",
    },
    image: "/images/p-32.png",
    badges: [badgeCompleted, badgeDataCenters],
    value: "50M SAR",
    year: "2024",
    scope: scopeEpc,
    completion: "2025",
  },
  {
    title: { en: "NEOM Connect Teleco Park", ar: "مجمع نيوم كونكت للاتصالات" },
    description: {
      en: "Supply, installation, testing, and commissioning of critical data center and telecom park infrastructure, including prefabricated modules, power and electrical systems, HVAC, fire protection, ELV systems, and cabling. Works also include integration and multi-level mechanical/electrical testing to ensure full functionality, compliance with NEOM employer requirements, and readiness for operations.",
      ar: "توريد البنية التحتية الحيوية لمركز البيانات ومجمع الاتصالات وتركيبها واختبارها وتشغيلها، بما يشمل الوحدات مسبقة الصنع وأنظمة الطاقة والكهرباء والتكييف والحماية من الحريق وأنظمة الجهد المنخفض جدًا (ELV) والتمديدات. وتشمل الأعمال أيضًا التكامل والاختبارات الميكانيكية والكهربائية متعددة المستويات لضمان الأداء الكامل والامتثال لمتطلبات نيوم بصفتها صاحب العمل والجاهزية للتشغيل.",
    },
    image: "/images/p-33.png",
    badges: [badgeCompleted, badgeDataCenters],
    value: "94M SAR",
    year: "2021",
    scope: scopeEpc,
    completion: "2022",
  },
  {
    title: { en: "North Tabuk Data Center", ar: "مركز بيانات شمال تبوك" },
    description: {
      en: "Engineering, Procurement, Fabrication, Construction, Installation, supervision, testing and commissioning of all other work related to Data Center Scope include Utility Infrastructure, equipment and systems. Network, cooling and HVAC, electrical Infrastructure with Datacenter Operations & security, Fire Suppression System.",
      ar: "الهندسة والتوريد والتصنيع والإنشاء والتركيب والإشراف والاختبار والتشغيل لجميع الأعمال الأخرى المتعلقة بنطاق مركز البيانات، بما يشمل البنية التحتية للمرافق والمعدات والأنظمة، والشبكات والتبريد والتكييف، والبنية التحتية الكهربائية مع عمليات مركز البيانات والأمن، ونظام إخماد الحريق.",
    },
    image: "/images/p-34.png",
    badges: [badgeCompleted, badgeDataCenters],
    value: "226M SAR",
    year: "2019",
    scope: scopeEpc,
    completion: "2020",
  },
];

export interface ProjectCategory {
  key: string;
  label: { en: string; ar: string };
  projects: Project[];
}

export const infrastructureCategories: ProjectCategory[] = [
  { key: "whats-hot", label: { en: "What's hot", ar: "الأبرز" }, projects: hotProjects },
  { key: "water-mep", label: { en: "Water & MEP", ar: "المياه والكهروميكانيكية" }, projects: waterProjects },
  { key: "om", label: { en: "O & M", ar: "التشغيل والصيانة" }, projects: omProjects },
];

export const technologyCategories: ProjectCategory[] = [
  { key: "whats-hot", label: { en: "What's hot", ar: "الأبرز" }, projects: techHotProjects },
  { key: "telecom-radio", label: { en: "Telcom & Radio Station", ar: "الاتصالات ومحطات الإذاعة" }, projects: telecomProjects },
  { key: "cyber-security", label: { en: "Cyber Security", ar: "الأمن السيبراني" }, projects: cyberProjects },
  { key: "data-centers", label: { en: "Data Centers", ar: "مراكز البيانات" }, projects: dataCenterProjects },
];
