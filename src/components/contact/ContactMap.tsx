"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const offices = [
  {
    tab: { en: "Head Office", ar: "المقر الرئيس" },
    name: { en: "NIT- Jeddah Head Office", ar: "نسما للبنية التحتية والتقنية – المقر الرئيس في جدة" },
    address: {
      en: "Randa Tower, King Abdul Aziz Rd, An Nahdah, Jeddah 23523, Saudi Arabia",
      ar: "برج رندا، طريق الملك عبدالعزيز، حي النهضة، جدة 23523، المملكة العربية السعودية",
    },
    phone: "+966550634599",
    email: "info@Nesma-nit.com",
    mapQuery: "Randa Tower, King Abdul Aziz Rd, An Nahdah, Jeddah 23523, Saudi Arabia",
  },
  {
    tab: { en: "Office 1", ar: "مكتب 1" },
    name: { en: "NIT - Riyadh Office", ar: "نسما للبنية التحتية والتقنية – مكتب الرياض" },
    address: { en: "Al Olaya, Riyadh, Saudi Arabia", ar: "حي العليا، الرياض، المملكة العربية السعودية" },
    phone: "011 465 1188",
    email: "riyadh@nesma-nit.com",
    mapQuery: "Al Olaya, Riyadh, Saudi Arabia",
  },
  {
    tab: { en: "Office 2", ar: "مكتب 2" },
    name: { en: "NIT - Dammam Office", ar: "نسما للبنية التحتية والتقنية – مكتب الدمام" },
    address: {
      en: "King Fahd Rd, Al Faisaliyah, Dammam, Saudi Arabia",
      ar: "طريق الملك فهد، الفيصلية، الدمام، المملكة العربية السعودية",
    },
    phone: "013 833 0000",
    email: "dammam@nesma-nit.com",
    mapQuery: "King Fahd Rd, Al Faisaliyah, Dammam, Saudi Arabia",
  },
];

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5A5.17 5.17 0 0 0 2.83 6.67C2.83 10.5 8 14.5 8 14.5s5.17-4 5.17-7.83A5.17 5.17 0 0 0 8 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="8" cy="6.67" r="1.83" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2.5 3.17c0-.37.3-.67.67-.67h2.2c.3 0 .57.2.65.5l.73 2.5a.67.67 0 0 1-.17.67l-1.1 1.1a8 8 0 0 0 3.65 3.65l1.1-1.1a.67.67 0 0 1 .67-.17l2.5.73c.3.08.5.35.5.65v2.2c0 .37-.3.67-.67.67A10.67 10.67 0 0 1 2.5 3.17Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function ContactMap() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const office = offices[activeIndex];

  const prevOffice = () => setActiveIndex((i) => (i === 0 ? offices.length - 1 : i - 1));
  const nextOffice = () => setActiveIndex((i) => (i === offices.length - 1 ? 0 : i + 1));

  return (
    <section className={`w-full bg-white pb-16 lg:pb-24 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full">
          <div className="relative w-full h-[240px] sm:h-[500px] lg:h-[560px]">
            <iframe
              key={office.mapQuery}
              title={isAr ? office.name.ar : office.name.en}
              src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Office card — normal flow below the map on mobile (so wrapped content never
              overflows the fixed-height map), becomes a floating overlay from sm+ */}
          <div className="relative mt-4 sm:mt-0 sm:absolute sm:left-6 sm:right-6 lg:left-8 lg:right-8 sm:bottom-6 lg:bottom-8 bg-white sm:shadow-lg p-6 sm:p-8">
            <div dir="ltr" className="flex items-center gap-6 border-b border-gray-200 pb-3">
              {offices.map((o, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={o.tab.en}
                    onClick={() => setActiveIndex(i)}
                    className={`pb-3 -mb-[13px] text-[12px] font-medium tracking-wide uppercase border-b-2 transition-colors duration-300 ${
                      isActive ? "text-[#2E368F] border-[#2E368F]" : "text-gray-400 border-transparent hover:text-gray-600"
                    }`}
                  >
                    {isAr ? o.tab.ar : o.tab.en}
                  </button>
                );
              })}
            </div>

            <div dir={isAr ? "rtl" : "ltr"} className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-gray-900 text-[20px] sm:text-[22px] font-light">
                  {isAr ? office.name.ar : office.name.en}
                </h3>

                <div className="mt-4 flex flex-wrap items-start gap-x-8 gap-y-3">
                  <div className="flex items-start gap-2 text-gray-500 max-w-xs">
                    <span className="mt-0.5 shrink-0">
                      <PinIcon />
                    </span>
                    <span className="text-[14px] font-light leading-relaxed">
                      {isAr ? office.address.ar : office.address.en}
                    </span>
                  </div>
                  <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-[#2E368F] hover:text-[#1c2260] transition-colors">
                    <PhoneIcon />
                    <span dir="ltr" className="text-[14px] font-light underline underline-offset-2">
                      {office.phone}
                    </span>
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-[#2E368F] hover:text-[#1c2260] transition-colors">
                    <MailIcon />
                    <span dir="ltr" className="text-[14px] font-light underline underline-offset-2">
                      {office.email}
                    </span>
                  </a>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <button
                  aria-label={isAr ? "المكتب السابق" : "Previous office"}
                  onClick={prevOffice}
                  className="w-11 h-11 flex items-center justify-center bg-[#F5F5F5] text-gray-400 hover:text-[#2E368F] transition-colors duration-300"
                >
                  <ArrowIcon className={isAr ? "" : "rotate-180"} />
                </button>
                <button
                  aria-label={isAr ? "المكتب التالي" : "Next office"}
                  onClick={nextOffice}
                  className="w-11 h-11 flex items-center justify-center bg-[#F5F5F5] text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300"
                >
                  <ArrowIcon className={isAr ? "rotate-180" : ""} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
