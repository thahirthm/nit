"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const tabs = [
  {
    tab: { en: "Energy Solution", ar: "حلول الطاقة" },
    title: { en: "Energy Solutions", ar: "حلول الطاقة" },
    image: "/images/s-1.png",
    description: {
      en: "EPC of electrical substations up to 380kV, combined with certified ESCO services to deliver energy-saving solutions for commercial and industrial sectors in KSA.",
      ar: "تنفيذ محطات تحويل كهربائية حتى 380 كيلوفولت وفق نظام EPC، إلى جانب خدمات ESCO المعتمدة لتقديم حلول توفير الطاقة للقطاعين التجاري والصناعي في المملكة.",
    },
    items: [
      { en: "Substation projects", ar: "مشاريع محطات التحويل" },
      { en: "Underground cable & overhead lines", ar: "الكابلات الأرضية وخطوط النقل الهوائية" },
      { en: "STATCOM projects", ar: "مشاريع أنظمة STATCOM" },
      { en: "Extension & retrofit projects", ar: "مشاريع التوسعة والتحديث" },
      { en: "Streetlight projects & building retrofit projects", ar: "مشاريع إنارة الشوارع وتحديث المباني" },
      { en: "Industrial Solutions & rehabilitation Works", ar: "الحلول الصناعية وأعمال إعادة التأهيل" },
      { en: "Commercial & residential projects", ar: "المشاريع التجارية والسكنية" },
    ],
  },
  {
    tab: { en: "Communication Solutions", ar: "حلول الاتصالات" },
    title: { en: "Communication Solutions", ar: "حلول الاتصالات" },
    image: "/images/s-2.png",
    description: {
      en: "Comprehensive communication solutions, including OSP/ISP infrastructure, smart cities, wired/wireless networks, low current and security systems, integrating advanced technologies.",
      ar: "حلول اتصالات متكاملة تشمل البنية التحتية الخارجية والداخلية للشبكات (OSP/ISP)، والمدن الذكية، والشبكات السلكية واللاسلكية، وأنظمة التيار الخفيف والأمن، بالتكامل مع أحدث التقنيات.",
    },
    items: [
      { en: "OSP/ISP Infrastructure Solutions", ar: "حلول البنية التحتية الخارجية والداخلية للشبكات (OSP/ISP)" },
      { en: "Wired/Wireless Infrastructure", ar: "البنية التحتية السلكية واللاسلكية" },
      { en: "Low Current Solutions", ar: "حلول التيار الخفيف" },
      { en: "Security Solutions", ar: "الحلول الأمنية" },
      { en: "Smart Cities (ICT & IoT, Robotics, Drones)", ar: "المدن الذكية (تقنية المعلومات وإنترنت الأشياء، الروبوتات، الطائرات بدون طيار)" },
    ],
  },
  {
    tab: { en: "Water & MEP Systems", ar: "أنظمة المياه والكهروميكانيكية" },
    title: { en: "Water & MEP Systems", ar: "أنظمة المياه والكهروميكانيكية" },
    image: "/images/s3.png",
    description: {
      en: "Provide seawater desalination, water distribution networks, and wastewater treatment services, and cover the infrastructure works such as stormwater drainage, concrete & steel reservoirs, and transmission systems.",
      ar: "تقديم خدمات تحلية مياه البحر، وشبكات توزيع المياه، ومعالجة مياه الصرف الصحي، بالإضافة إلى أعمال البنية التحتية مثل تصريف مياه الأمطار، والخزانات الخرسانية والمعدنية، وأنظمة النقل.",
    },
    items: [
      { en: "Water & Sewage Distribution Networks and Pipelines", ar: "شبكات وخطوط أنابيب توزيع المياه والصرف الصحي" },
      { en: "Seawater Desalination & Wastewater Treatment", ar: "تحلية مياه البحر ومعالجة مياه الصرف الصحي" },
      { en: "Water Strategic Storage Implementation", ar: "تنفيذ مشاريع التخزين الاستراتيجي للمياه" },
      { en: "District Cooling", ar: "التبريد المركزي" },
    ],
  },
  {
    tab: { en: "Industrial Solutions", ar: "الحلول الصناعية" },
    title: { en: "Industrial Solutions", ar: "الحلول الصناعية" },
    image: "/images/s-4.png",
    description: {
      en: "Industrial equipment procurement, installation, & commissioning in continuous process industries.",
      ar: "توريد وتركيب وتشغيل المعدات الصناعية في الصناعات ذات العمليات المستمرة.",
    },
    items: [
      { en: "Manufacturing Facilities Refurbishment and Efficacy Enhancement", ar: "تجديد المنشآت التصنيعية وتعزيز كفاءتها" },
      { en: "Industrial Automation & Control Systems (SCADA, PLC, DCS)", ar: "أنظمة الأتمتة والتحكم الصناعي (SCADA، PLC، DCS)" },
      { en: "Mechanical, Electrical & Instrumentation Works", ar: "الأعمال الميكانيكية والكهربائية وأعمال الأجهزة الدقيقة" },
      { en: "Shutdowns & Turnarounds Services", ar: "خدمات الإيقاف والصيانة الدورية" },
    ],
  },
  {
    tab: { en: "Operations & Maintenance", ar: "التشغيل والصيانة" },
    title: { en: "Operations & Maintenance", ar: "التشغيل والصيانة" },
    image: "/images/s5.png",
    description: {
      en: "Complete range of operation, maintenance, and managed services in power transmission and distribution.",
      ar: "مجموعة متكاملة من خدمات التشغيل والصيانة والخدمات المُدارة في مجال نقل وتوزيع الطاقة.",
    },
    items: [
      { en: "Troubleshooting, Repair, Migrations, and Technical Support", ar: "استكشاف الأعطال وإصلاحها، وأعمال النقل، والدعم الفني" },
      { en: "Power and Energy", ar: "الطاقة والكهرباء" },
    ],
  },
];

export function InfrastructureSolutions() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  const prevTab = () => setActiveIndex((i) => (i === 0 ? tabs.length - 1 : i - 1));
  const nextTab = () => setActiveIndex((i) => (i === tabs.length - 1 ? 0 : i + 1));

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          {isAr ? "حلول البنية التحتية" : "Infrastructure solutions"}
        </h2>

        {/* Tabs — kept LTR so tab order never reorders by language */}
        <div dir="ltr" className="mt-8 lg:mt-10 flex flex-wrap gap-3">
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={tab.tab.en}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors duration-300 ${
                  isActive
                    ? "bg-[#2E368F] text-white border-[#2E368F]"
                    : "bg-white text-[#2E368F] border-[#2E368F] hover:bg-[#2E368F]/5"
                }`}
              >
                {isAr ? tab.tab.ar : tab.tab.en}
              </button>
            );
          })}
        </div>

        {/* Panel — kept LTR so the image always sits on the same side as the data panel.
            The items list below has a fixed height so the panel (and therefore the image,
            which stretches to match it) never changes size when switching tabs. */}
        <div dir="ltr" className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Left: image with overlay title */}
          <div className="relative h-[280px] sm:h-[380px] lg:h-full overflow-hidden">
            <Image src={active.image} alt={isAr ? active.title.ar : active.title.en} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
            <h3
              dir={isAr ? "rtl" : "ltr"}
              className={`absolute top-6 sm:top-8 text-white text-[28px] sm:text-[34px] lg:text-[40px] font-extralight tracking-tight ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}
            >
              {isAr ? active.title.ar : active.title.en}
            </h3>
          </div>

          {/* Right: data panel */}
          <div className="bg-[#F9F9F9] p-8 sm:p-10 lg:p-12 flex flex-col lg:h-[640px]">
            <h3 dir={isAr ? "rtl" : "ltr"} className="shrink-0 text-[#2E368F] text-[32px] sm:text-[40px] lg:text-[46px] font-extralight tracking-tight">
              {isAr ? "ماذا نقدّم" : "What we deliver"}
            </h3>
            <p dir={isAr ? "rtl" : "ltr"} className="shrink-0 mt-4 text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr ? active.description.ar : active.description.en}
            </p>

            <div className="mt-6 flex-1 overflow-y-auto">
              {active.items.map((item, idx) => (
                <div
                  key={item.en}
                  dir={isAr ? "rtl" : "ltr"}
                  className="flex items-center gap-4 py-3 border-b border-gray-200 text-gray-700"
                >
                  <span className="font-[family-name:var(--font-anek-latin)] text-base text-gray-400 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-light">{isAr ? item.ar : item.en}</span>
                </div>
              ))}
            </div>

            <div className="shrink-0 mt-8 flex items-center justify-end gap-6">
              <button
                aria-label={isAr ? "السابق" : "Previous"}
                onClick={prevTab}
                className="text-gray-400 hover:text-[#2E368F] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className="rotate-180">
                  <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <button
                aria-label={isAr ? "التالي" : "Next"}
                onClick={nextTab}
                className="text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
