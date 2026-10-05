"use client";

import { useState } from "react";

const offices = [
  {
    tab: "Head Office",
    name: "NIT- Jeddah Head Office",
    address: "Randa Tower, King Abdul Aziz Rd, An Nahdah, Jeddah 23523, Saudi Arabia",
    phone: "+966550634599",
    email: "info@Nesma-nit.com",
    mapQuery: "Randa Tower, King Abdul Aziz Rd, An Nahdah, Jeddah 23523, Saudi Arabia",
  },
  {
    tab: "Office 1",
    name: "NIT - Riyadh Office",
    address: "Al Olaya, Riyadh, Saudi Arabia",
    phone: "011 465 1188",
    email: "riyadh@nesma-nit.com",
    mapQuery: "Al Olaya, Riyadh, Saudi Arabia",
  },
  {
    tab: "Office 2",
    name: "NIT - Dammam Office",
    address: "King Fahd Rd, Al Faisaliyah, Dammam, Saudi Arabia",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const office = offices[activeIndex];

  const prevOffice = () => setActiveIndex((i) => (i === 0 ? offices.length - 1 : i - 1));
  const nextOffice = () => setActiveIndex((i) => (i === offices.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pb-16 lg:pb-24">
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px]">
          <iframe
            key={office.mapQuery}
            title={office.name}
            src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />

          {/* Floating office card */}
          <div className="absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bottom-4 sm:bottom-6 lg:bottom-8 bg-white shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-6 border-b border-gray-200 pb-3">
              {offices.map((o, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={o.tab}
                    onClick={() => setActiveIndex(i)}
                    className={`pb-3 -mb-[13px] text-[12px] font-medium tracking-wide uppercase border-b-2 transition-colors duration-300 ${
                      isActive ? "text-[#2E368F] border-[#2E368F]" : "text-gray-400 border-transparent hover:text-gray-600"
                    }`}
                  >
                    {o.tab}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-gray-900 text-[20px] sm:text-[22px] font-light">{office.name}</h3>

                <div className="mt-4 flex flex-wrap items-start gap-x-8 gap-y-3">
                  <div className="flex items-start gap-2 text-gray-500 max-w-xs">
                    <span className="mt-0.5 shrink-0">
                      <PinIcon />
                    </span>
                    <span className="text-[14px] font-light leading-relaxed">{office.address}</span>
                  </div>
                  <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-[#2E368F] hover:text-[#1c2260] transition-colors">
                    <PhoneIcon />
                    <span className="text-[14px] font-light underline underline-offset-2">{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-[#2E368F] hover:text-[#1c2260] transition-colors">
                    <MailIcon />
                    <span className="text-[14px] font-light underline underline-offset-2">{office.email}</span>
                  </a>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <button
                  aria-label="Previous office"
                  onClick={prevOffice}
                  className="w-11 h-11 flex items-center justify-center bg-[#F5F5F5] text-gray-400 hover:text-[#2E368F] transition-colors duration-300"
                >
                  <ArrowIcon className="rotate-180" />
                </button>
                <button
                  aria-label="Next office"
                  onClick={nextOffice}
                  className="w-11 h-11 flex items-center justify-center bg-[#F5F5F5] text-[#2E368F] hover:text-[#1c2260] transition-colors duration-300"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
