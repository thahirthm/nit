"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const milestones = [
  {
    year: "1979",
    label: { en: "Group foundation", ar: "تأسيس المجموعة" },
    title: { en: "Nesma group founded by H.E. Saleh Al Turki", ar: "تأسيس مجموعة نسما على يد سعادة صالح التركي" },
    description: {
      en: "A privately owned Saudi Arabian company is established in Jeddah, building a reputation for financial strength, business integrity, and world-class quality across multiple sectors.",
      ar: "تأسست شركة سعودية مملوكة ملكية خاصة في جدة، وبنت سمعة قوية في المتانة المالية والنزاهة التجارية والجودة العالمية عبر قطاعات متعددة.",
    },
  },
  {
    year: "1988",
    label: { en: "NIT founded", ar: "تأسيس NIT" },
    title: { en: "NIT Established in Riyadh, KSA", ar: "تأسيس NIT في الرياض، المملكة العربية السعودية" },
    description: {
      en: "Nesma Infrastructure & Technology is founded in Riyadh, beginning its journey as a specialized infrastructure and technology solutions provider focusing on energy solutions and communication systems across the Kingdom.",
      ar: "تأسست نسما للبنية التحتية والتقنية في الرياض، بادئة رحلتها كمزوّد متخصص لحلول البنية التحتية والتقنية، مع التركيز على حلول الطاقة وأنظمة الاتصالات في جميع مناطق المملكة.",
    },
  },
  {
    year: "1995",
    label: { en: "Expansion", ar: "التوسع" },
    title: { en: "Expansion into industrial infrastructure", ar: "التوسع في البنية التحتية الصناعية" },
    description: {
      en: "NIT broadens its portfolio into industrial and energy infrastructure, delivering complex projects for national clients.",
      ar: "وسّعت NIT محفظتها لتشمل البنية التحتية الصناعية وقطاع الطاقة، وقدّمت مشاريع معقدة لعملاء وطنيين.",
    },
  },
  {
    year: "2011",
    label: { en: "Technology division", ar: "قطاع التقنية" },
    title: { en: "Technology division launched", ar: "إطلاق قطاع التقنية" },
    description: {
      en: "A dedicated technology arm is formed to support digital transformation across energy, government, and telecom sectors.",
      ar: "تم تشكيل ذراع تقنية متخصصة لدعم التحول الرقمي في قطاعات الطاقة والحكومة والاتصالات.",
    },
  },
  {
    year: "2014",
    label: { en: "Strategic partnerships", ar: "شراكات استراتيجية" },
    title: { en: "Key strategic partnerships formed", ar: "تكوين شراكات استراتيجية رئيسية" },
    description: {
      en: "NIT forges alliances with leading international technology and engineering firms to strengthen local delivery capability.",
      ar: "عقدت NIT تحالفات مع شركات تقنية وهندسية عالمية رائدة لتعزيز قدرتها على التنفيذ المحلي.",
    },
  },
  {
    year: "2017",
    label: { en: "Vision 2030 alignment", ar: "التوافق مع رؤية 2030" },
    title: { en: "Aligning with Vision 2030", ar: "التوافق مع رؤية 2030" },
    description: {
      en: "NIT realigns its strategy to support the Kingdom's Vision 2030 goals, focusing on local content and digital infrastructure.",
      ar: "أعادت NIT صياغة استراتيجيتها لدعم أهداف رؤية المملكة 2030، مع التركيز على المحتوى المحلي والبنية التحتية الرقمية.",
    },
  },
  {
    year: "2019",
    label: { en: "Smart infrastructure", ar: "البنية التحتية الذكية" },
    title: { en: "Smart infrastructure projects begin", ar: "انطلاق مشاريع البنية التحتية الذكية" },
    description: {
      en: "Investment in smart grid, IoT, and connected infrastructure solutions accelerates across major Saudi cities.",
      ar: "تسارعت الاستثمارات في الشبكات الذكية وإنترنت الأشياء وحلول البنية التحتية المتصلة في كبرى المدن السعودية.",
    },
  },
  {
    year: "2021",
    label: { en: "Digital transformation", ar: "التحول الرقمي" },
    title: { en: "Enterprise digital transformation", ar: "التحول الرقمي للمؤسسات" },
    description: {
      en: "NIT scales its technology services, delivering ERP, cloud, and cybersecurity solutions to government and private clients.",
      ar: "عزّزت NIT خدماتها التقنية، وقدّمت حلول تخطيط موارد المؤسسات والحوسبة السحابية والأمن السيبراني لعملاء من القطاعين الحكومي والخاص.",
    },
  },
  {
    year: "2023",
    label: { en: "NEOM & giga-projects", ar: "نيوم والمشاريع العملاقة" },
    title: { en: "Entry into NEOM and giga-projects", ar: "الدخول في مشاريع نيوم والمشاريع العملاقة" },
    description: {
      en: "NIT secures major contracts supporting NEOM and other national giga-projects, reinforcing its role in the Kingdom's future.",
      ar: "حصلت NIT على عقود كبرى لدعم نيوم ومشاريع عملاقة وطنية أخرى، مما عزّز دورها في مستقبل المملكة.",
    },
  },
  {
    year: "2024",
    label: { en: "60,000+ workforce", ar: "أكثر من 60,000 موظف" },
    title: { en: "In-Kingdom workforce surpasses 60,000", ar: "تجاوز القوى العاملة داخل المملكة 60,000" },
    description: {
      en: "The Nesma Group workforce crosses 60,000, reflecting sustained growth across infrastructure and technology sectors.",
      ar: "تجاوزت القوى العاملة في مجموعة نسما 60,000 موظف، مما يعكس نموًا مستمرًا في قطاعي البنية التحتية والتقنية.",
    },
  },
  {
    year: "2026",
    label: { en: "Looking ahead", ar: "نحو المستقبل" },
    title: { en: "Continuing the journey", ar: "استمرار المسيرة" },
    description: {
      en: "NIT continues to engineer and deliver critical infrastructure and technology solutions across the Kingdom and beyond.",
      ar: "تواصل NIT تصميم وتنفيذ حلول البنية التحتية والتقنية الحيوية في المملكة وخارجها.",
    },
  },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function AboutHistory() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const active = milestones[activeIndex];
  const lastIndex = milestones.length - 1;

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lastIndex, i + 1));

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-12">
          {isAr ? "تاريخنا" : "Our history"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
          {/* Big year — slides in from the top on change */}
          <div dir="ltr" className="overflow-hidden h-[120px] sm:h-[160px] lg:h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h3
                key={active.year}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-anek-latin)] text-[90px] sm:text-[130px] lg:text-[170px] font-light text-[#2E368F] leading-none"
              >
                {active.year}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Right: label + title + description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.year}
              dir={isAr ? "rtl" : "ltr"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-2 text-[14px] lg:text-[15px] font-normal bg-gray-100 text-[#2E368F]">
                {isAr ? active.label.ar : active.label.en}
              </span>
              <h4 className="mt-4 text-[22px] lg:text-[28px] font-normal text-gray-900">
                {isAr ? active.title.ar : active.title.en}
              </h4>
              <p className="mt-3 text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl">
                {isAr ? active.description.ar : active.description.en}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline track — kept LTR so the chronological order never reverses */}
        <div dir="ltr" className="mt-10 lg:mt-14 flex items-start gap-4 lg:gap-10">
          {/* Arrows — aligned with the year-label row below the dots */}
          <div className="flex items-center gap-4 shrink-0 pt-[46px] lg:pt-[50px]">
            <button
              aria-label={isAr ? "السابق" : "Previous"}
              onClick={goPrev}
              disabled={activeIndex === 0}
              className={`transition-colors ${activeIndex === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-[#2E368F]"}`}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              aria-label={isAr ? "التالي" : "Next"}
              onClick={goNext}
              disabled={activeIndex === lastIndex}
              className={`transition-colors ${activeIndex === lastIndex ? "text-gray-300 cursor-not-allowed" : "text-[#2E368F] hover:text-[#1c2260]"}`}
            >
              <ArrowIcon />
            </button>
          </div>

          {/* Dots + line, and year labels — share the same width so each label sits under its dot */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              <div className="absolute top-[8px] left-[5px] right-[5px] h-px bg-gray-200" />
              <div
                className="absolute top-[8px] left-0 h-px bg-[#2E368F] transition-all duration-500 ease-out"
                style={{ width: `${(activeIndex / lastIndex) * 100}%` }}
              />
              <div className="relative flex justify-between">
                {milestones.map((m, i) => (
                  <button
                    key={m.year}
                    aria-label={`Show ${m.year}`}
                    onClick={() => setActiveIndex(i)}
                    className="p-1"
                  >
                    <span
                      className={`block w-[11px] h-[11px] rounded-full border-2 transition-colors duration-500 ${
                        i <= activeIndex ? "bg-[#2E368F] border-[#2E368F]" : "bg-white border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              {milestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => setActiveIndex(i)}
                  className={`font-[family-name:var(--font-anek-latin)] text-[13px] sm:text-sm lg:text-base transition-colors duration-300 ${
                    i === activeIndex ? "text-[#2E368F] font-medium" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
