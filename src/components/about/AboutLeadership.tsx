"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { LeadershipOffcanvas, type LeadershipOffcanvasPerson } from "@/components/about/LeadershipOffcanvas";
import "swiper/css";

type Team = Record<string, LeadershipOffcanvasPerson>;

const leadership: Team = {
  p0: {
    name: { en: "Salah Al Sunaid", ar: "صلاح السنيد" },
    role: { en: "CEO", ar: "الرئيس التنفيذي" },
    image: "/images/new-ceo-team.png",
    linkedin: "https://www.linkedin.com/in/salah-al-sunaid-3870668/",
  },
  p1: {
    name: { en: "Majed Al Faiya", ar: "ماجد الفايع" },
    role: { en: "COO", ar: "الرئيس التنفيذي للعمليات" },
    image: "/images/abt-t1.png",
    linkedin: "https://www.linkedin.com/in/majed-alfaiya/",
  },
  p3: {
    name: { en: "Hassan El Melegi", ar: "حسن المليجي" },
    role: { en: "CFO", ar: "الرئيس التنفيذي المالي" },
    image: "/images/abt-t3.png",
    linkedin: "https://www.linkedin.com/in/hassan-el-melegi-00090b13/",
  },
  p2: {
    name: { en: "Khalid Mengash", ar: "خالد منقاش" },
    role: { en: "CHRO", ar: "الرئيس التنفيذي للموارد البشرية" },
    image: "/images/abt-t2.png",
    linkedin: "https://www.linkedin.com/in/kmengash/",
  },
  p4: {
    name: { en: "Nahil Bakri", ar: "ناهل بكري" },
    role: { en: "Chief Audit Executive", ar: "الرئيس التنفيذي للتدقيق" },
    image: "/images/abt-t4.png",
    linkedin: "https://www.linkedin.com/in/nahil-bakri-31973357/",
  },
};

const executiveTeam: Team = {
  b1: {
    name: { en: "Rayan Al Amoudi", ar: "ريان العمودي" },
    role: { en: "Strategy and Business Development Executive Manager", ar: "المدير التنفيذي للاستراتيجية وتطوير الأعمال" },
    image: "/images/bm-1.png",
    linkedin: "https://www.linkedin.com/in/eng-rayan-alamoudi/",
  },
  b2: {
    name: { en: "Bander Al Shehri", ar: "بندر الشهري" },
    role: { en: "QEHS Executive Manager", ar: "المدير التنفيذي للجودة والصحة والسلامة والبيئة" },
    image: "/images/bm-2.png",
    linkedin: "https://www.linkedin.com/in/bandar-al-shehri-ba73a5105/",
  },
  b3: {
    name: { en: "Mogbel Al Mogbel", ar: "مقبل المقبل" },
    role: { en: "Sales Executive Manager", ar: "المدير التنفيذي للمبيعات" },
    image: "/images/bm-3.png",
    linkedin: "https://www.linkedin.com/in/mogbel-almogbel-57b61a217/",
  },
  b4: {
    name: { en: "Mohammed Abbas", ar: "محمد عباس" },
    role: { en: "Supply Chain Executive Manager", ar: "المدير التنفيذي لسلاسل الإمداد" },
    image: "/images/bm-4.png",
    linkedin: "https://www.linkedin.com/in/mohamed-fekry-12a11196/",
  },
  b5: {
    name: { en: "Mohammed Al Sibaee", ar: "محمد السباعي" },
    role: { en: "Advanced Energy System Executive Manager", ar: "المدير التنفيذي لأنظمة الطاقة المتقدمة" },
    image: "/images/bm-5.png",
    linkedin: "https://www.linkedin.com/in/mohamed-al-sebay-b24a94119/",
  },
  b6: {
    name: { en: "Khalid Al Jomaih", ar: "خالد الجميعة" },
    role: { en: "Eastern Region Manager", ar: "مدير المنطقة الشرقية" },
    image: "/images/bm-6.png",
    linkedin: "https://www.linkedin.com/in/khalid-al-jomiah-22b815a4/",
  },
  b7: {
    name: { en: "Salem Al Shehri", ar: "سالم الشهري" },
    role: { en: "Central Region Manager", ar: "مدير المنطقة الوسطى" },
    image: "/images/bm-7.png",
  },
  b8: {
    name: { en: "Faisal Alwahabi", ar: "فيصل الوهابي" },
    role: { en: "Western & Southern Region Manager", ar: "مدير المنطقتين الغربية والجنوبية" },
    image: "/images/bm-8.png",
    linkedin: "https://www.linkedin.com/in/faisal-al-wahabi-0b444952/",
  },
};

const boardOfDirectors: Team = {
  b9: {
    name: { en: "Fouad Al Sherebi", ar: "فؤاد الشريبي" },
    role: { en: "Chairman of the Board", ar: "رئيس مجلس الإدارة" },
    image: "/images/bm2.png",
    bio: {
      en: "He holds a Bachelor’s and Master’s degree in Electrical Engineering from the University of California, Santa Barbara, and California State University, respectively, along with executive education from IMD and Harvard Business School. He has held senior leadership positions at Saudi Electricity Company, including Vice President of Power Generation, and currently serves as Chairman of Modern Buses Company. He also chairs the boards of Nesma Infrastructure and Technology and Nesma Projects, serves as Chairman of Nesma’s Advisory Council, and holds advisory roles with the Saudi Council of Engineers and IEEE.",
      // TODO: Arabic copy was cut off at "لدى الهيئة السعودية" — ending completed from the English; confirm wording
      ar: "يحمل درجة البكالوريوس والماجستير في الهندسة الكهربائية من جامعة كاليفورنيا، سانتا باربرا، وجامعة ولاية كاليفورنيا، على التوالي، كما تلقّى تعليمًا تنفيذيًا من معهد IMD وكلية هارفارد للأعمال. وشغل مناصب قيادية عليا في الشركة السعودية للكهرباء، من بينها منصب نائب الرئيس لتوليد الطاقة، ويشغل حاليًا منصب رئيس مجلس إدارة شركة الحافلات الحديثة. كما يرأس مجلسَي إدارة نسما للبنية التحتية والتقنية ونسما للمشاريع، ويتولى رئاسة المجلس الاستشاري لنسما، إضافةً إلى أدواره الاستشارية لدى الهيئة السعودية للمهندسين ومعهد مهندسي الكهرباء والإلكترونيات (IEEE).",
    },
  },
  b10: {
    name: { en: "Mohammad Al Sada", ar: "محمد السادة" },
    role: { en: "Vice Chairman", ar: "نائب رئيس مجلس الإدارة" },
    image: "/images/bm3.png",
    bio: {
      en: "He holds a PhD and Master’s degree in Materials Science and Engineering from the University of Manchester, and a Bachelor’s degree in Marine Science and Geology from Qatar University. He served as Qatar’s Minister of State for Energy and Industry Affairs and Managing Director of Qatar Petroleum, with extensive leadership experience in the energy sector. He currently serves as Chairman of Rosneft, Chairman of the GCC Supreme Council’s Advisory Board, and holds leadership roles at the University of Doha for Science and Technology and Qatar Solar Technologies.",
      // TODO: Arabic copy was cut off at "في ج" — ending completed from the English; confirm wording
      ar: "يحمل درجة الدكتوراه والماجستير في علوم وهندسة المواد من جامعة مانشستر، ودرجة البكالوريوس في العلوم البحرية والجيولوجيا من جامعة قطر. وشغل منصب وزير الدولة لشؤون الطاقة والصناعة في دولة قطر، ومنصب العضو المنتدب لشركة قطر للبترول، ويتمتع بخبرة قيادية واسعة في قطاع الطاقة. ويشغل حاليًا منصب رئيس مجلس إدارة شركة روسنفت، ورئيس المجلس الاستشاري للمجلس الأعلى لمجلس التعاون لدول الخليج العربية، كما يتولى مناصب قيادية في جامعة الدوحة للعلوم والتكنولوجيا وشركة قطر للتقنيات الشمسية.",
    },
  },
  b11: {
    name: { en: "Yousef Al Salmi", ar: "يوسف السالمي" },
    role: { en: "Board Member – Non-Executive", ar: "عضو مجلس إدارة غير تنفيذي" },
    image: "/images/bm4.png",
    bio: {
      en: "He holds a Bachelor’s degree in Industrial Engineering from King Abdulaziz University. He has served as Chief Strategy Officer at Nesma since 2019, following his role as Chief Commercial Officer at Nesma Airlines and several economic regulation and assessment positions at the General Authority of Civil Aviation (GACA). He also serves on the boards of South Jeddah Noor and Kaefer KSA.",
      ar: "يحمل درجة البكالوريوس في الهندسة الصناعية من جامعة الملك عبدالعزيز. ويشغل منصب الرئيس التنفيذي للاستراتيجية في نسما منذ عام 2019، بعد أن شغل منصب الرئيس التنفيذي للشؤون التجارية في نسما للطيران، وتولى عددًا من المناصب في مجالي التنظيم الاقتصادي والتقييم لدى الهيئة العامة للطيران المدني. كما يشغل عضوية مجلسَي إدارة شركة جنوب جدة نور وشركة كيفر السعودية (Kaefer KSA).",
    },
  },
  b12: {
    name: { en: "Paris Deletraz", ar: "باريس ديليتراز" },
    role: { en: "Board Member – Non-Executive", ar: "عضو مجلس إدارة غير تنفيذي" },
    image: "/images/bm5.png",
    bio: {
      en: "He holds a Bachelor’s degree in Computer Science from Boston University and a doctorate in Management Sciences from ESADE Business School. He has extensive experience in investment banking, including senior mergers and acquisitions roles at UBS and ABN AMRO. He currently serves as President of Amazing Lab, Managing Director of Venture Lab at IE University, and Chairman of the Applied Innovation Institute. He also serves on the boards of Qatar Science & Technology Park and IVY & Company.",
      ar: "يحمل درجة البكالوريوس في علوم الحاسب من جامعة بوسطن، ودرجة الدكتوراه في علوم الإدارة من كلية إيسادي للأعمال (ESADE). ويتمتع بخبرة واسعة في مجال الخدمات المصرفية الاستثمارية، بما في ذلك تولّي مناصب قيادية في مجال الاندماج والاستحواذ لدى كل من UBS وABN AMRO. ويشغل حاليًا منصب رئيس شركة Amazing Lab، والعضو المنتدب لـ Venture Lab في جامعة IE، ورئيس مجلس إدارة معهد الابتكار التطبيقي. كما يشغل عضوية مجلسَي إدارة حديقة قطر للعلوم والتكنولوجيا وشركة IVY & Company.",
    },
  },
  b13: {
    name: { en: "Omar Hifni", ar: "عمر حفني" },
    role: { en: "Board Member – Non-Executive", ar: "عضو مجلس إدارة غير تنفيذي" },
    image: "/images/bm6.png",
    bio: {
      en: "He holds an MSc in Finance, Investment and Risk from the University of Kent and a BSc in Finance and Investment from the University of Brighton, along with a Capital Market Qualification (CME-1). He has served as Chief Investment Officer at KUN Investment Holding since April 2023, following several investment roles at KUN, SEDCO Holding, and Vision Capital Group. He also holds board and committee positions at Anfas Medical Care, Dr. Samir Abbas Hospital, KUN Sports, Air Arabia DMM, and Western Luluha for Logistics Services.",
      ar: "يحمل درجة الماجستير في التمويل والاستثمار وإدارة المخاطر من جامعة كِنت، ودرجة البكالوريوس في التمويل والاستثمار من جامعة برايتون، إضافةً إلى شهادة التأهيل في سوق المال (CME-1). ويشغل منصب الرئيس التنفيذي للاستثمار في شركة كُنّ للاستثمار القابضة (KUN Investment Holding) منذ أبريل 2023، بعد أن شغل عدة مناصب استثمارية في كل من شركة كُنّ، وسيدكو القابضة، ومجموعة فيجن كابيتال. كما يشغل عضويات في مجالس الإدارة واللجان لدى عدد من الجهات، منها شركة أنفاس للرعاية الطبية، ومستشفى الدكتور سمير عباس، وكُنّ الرياضية، والعربية للطيران – الدمام (Air Arabia DMM)، وشركة لؤلؤة الغربية للخدمات اللوجستية.",
    },
  },
  b14: {
    name: { en: "Tariq Ibrahim Khoshhal", ar: "طارق ابراهيم خوش حال" },
    role: { en: "Board Member – Non-Executive", ar: "عضو مجلس إدارة غير تنفيذي" },
    image: "/images/bm7.png",
    bio: {
      en: "He holds an MBA in Finance from the University of Quebec, a BSc in Management Science from King Faisal University, and executive leadership and board director qualifications from Harvard Business School, IMD, and GCC BDI. He has extensive experience in investment management, private equity, and corporate leadership, having held senior roles at SEDCO, Alkhabeer Capital, and Autoworld. He has served as CEO of Dallah Albaraka Investment Holding since 2023 and holds board leadership positions at Taajeer Group, Nesma United Industries, Cool Inc., Benchmark, Dallah Driving Company, Anfas Medical Company, and Nun Academy.",
      ar: "يحمل درجة الماجستير في إدارة الأعمال تخصص التمويل من جامعة كيبيك، ودرجة البكالوريوس في العلوم الإدارية من جامعة الملك فيصل، إضافةً إلى مؤهلات في القيادة التنفيذية وعضوية مجالس الإدارة من كلية هارفارد للأعمال ومعهد IMD والمعهد الخليجي لمجالس الإدارات (GCC BDI). ويتمتع بخبرة واسعة في إدارة الاستثمارات والاستثمار في الملكية الخاصة والقيادة المؤسسية، حيث شغل مناصب قيادية عليا لدى كل من سيدكو، والخُبير كابيتال، وأوتوورلد. ويشغل منصب الرئيس التنفيذي لشركة دله البركة القابضة للاستثمار منذ عام 2023، كما يتولى مناصب قيادية في مجالس إدارة مجموعة تأجير، ونسما للصناعات المتحدة، وكول إنك (Cool Inc.)، وبنشمارك، وشركة دله لتعليم القيادة، وشركة أنفاس الطبية، وأكاديمية نون.",
    },
  },
};

const tabs = [
  { key: "leadership", name: { en: "Our Leadership", ar: "قيادتنا" }, team: leadership },
  { key: "board", name: { en: "Board of Directors", ar: "مجلس الإدارة" }, team: boardOfDirectors },
  { key: "executive", name: { en: "Executive Team", ar: "الفريق التنفيذي" }, team: executiveTeam },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutLeadership() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState<LeadershipOffcanvasPerson | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const activeTeam = tabs.find((t) => t.key === activeTab)?.team ?? tabs[0].team;
  const activePeople = Object.keys(activeTeam);

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
      <Reveal delay={0} duration={0.8} y={30} className="w-full px-6 lg:site-gutter mb-8 lg:mb-10">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "قادتنا" : "The minds behind the mission"}
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

      {/* Leadership slider */}
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
            // The slider remounts on tab and language change, so re-sync the arrow states.
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
            const person = activeTeam[id];
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
                  className="group relative w-full h-[380px] sm:h-[420px] lg:h-[460px] bg-[#F1F1F1] overflow-hidden cursor-pointer"
                >
                  {/* Same effect as the CEO message: on desktop the photo starts sunk below the card's
                      bottom edge and rises into place on hover. Mobile has no hover, so it sits fully in place.
                      The card colour matches the photos' studio background (#F1F1F1), so the gap above a
                      sunk photo blends in. */}
                  <Image quality={95}
                    src={person.image}
                    alt={personName}
                    fill
                    // Mobile/tablet: lifted ~9% (scaled from the top so the bottom stays covered) so the face sits
                    // above the name box instead of behind it. Desktop keeps the sunk-then-rise hover.
                    className="object-cover object-top origin-top transition-transform duration-700 ease-out scale-[1.1] -translate-y-[9%] lg:scale-100 lg:translate-y-[5%] lg:group-hover:translate-y-0"
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
                  i === activeSlide ? "w-1.5 h-1.5 bg-[#2E368F]" : "w-1.5 h-1.5 bg-[#2E368F]/25"
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
