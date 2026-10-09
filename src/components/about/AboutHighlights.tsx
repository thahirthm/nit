"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

const clientLogos = [
  { src: "/images/abt-logo.png", alt: { en: "Saudi Aramco", ar: "أرامكو السعودية" } },
  { src: "/images/logos/l2.png", alt: { en: "NEOM", ar: "نيوم" } },
  { src: "/images/logos/l3.png", alt: { en: "stc", ar: "stc" } },
  { src: "/images/logos/l4.png", alt: { en: "Ministry of Culture", ar: "وزارة الثقافة" } },
  { src: "/images/logos/l5.png", alt: { en: "Saudi Central Bank", ar: "البنك المركزي السعودي" } },
];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const cardClasses = "relative bg-[#F2F2F2] p-8 lg:p-10 h-[340px] sm:h-[400px] lg:h-[350px] flex flex-col justify-between overflow-hidden";

export function AboutHighlights() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [logoIndex, setLogoIndex] = useState(0);

  const nextLogo = () => setLogoIndex((i) => (i === clientLogos.length - 1 ? 0 : i + 1));

  return (
    <section className={`w-full bg-white mt-5 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-8">
        {/* Card 1: Trusted by many */}
        <div className={cardClasses}>
          <h3 dir={isAr ? "rtl" : "ltr"} className="text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "موثوق به من الكثيرين." : "Trusted by many."}
          </h3>

          <div className="relative w-[65%] max-w-[280px] h-[70px] lg:h-[90px]">
            <Image
              src={clientLogos[logoIndex].src}
              alt={isAr ? clientLogos[logoIndex].alt.ar : clientLogos[logoIndex].alt.en}
              fill
              className="object-contain object-left"
            />
          </div>

          <div dir="ltr" className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {clientLogos.map((logo, i) => (
                <button
                  key={logo.alt.en}
                  aria-label={`Show ${logo.alt.en}`}
                  onClick={() => setLogoIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === logoIndex ? "bg-[#2E368F]" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button aria-label="Next client" onClick={nextLogo} className="text-[#2E368F] hover:text-[#1c2260] transition-colors">
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Card 2: The growth story, in figures */}
        <div className={cardClasses}>
          <h3 dir={isAr ? "rtl" : "ltr"} className="text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "قصة النمو، بالأرقام." : "The growth story, in figures."}
          </h3>

          <div dir="ltr" className="flex items-end justify-between gap-6">
            <Button variant="primary">{isAr ? "عرض الإحصائيات" : "VIEW STATS"}</Button>

            <div className="text-right">
              <div className="font-[family-name:var(--font-anek-latin)] text-[56px] lg:text-[70px] font-light text-[#2E368F] leading-none">
                60k +
              </div>
              <p className="text-gray-500 text-sm lg:text-base mt-2">{isAr ? "الموارد داخل المملكة" : "In-Kingdom resources"}</p>
            </div>
          </div>
        </div>

        {/* Card 3: Connected globally */}
        <div className={cardClasses}>
          <h3 dir={isAr ? "rtl" : "ltr"} className="relative z-10 text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "حضور عالمي متصل" : "Connected globally"}
          </h3>

          <div className="absolute inset-x-4 bottom-0 top-[70px] lg:top-[90px] pointer-events-none">
            <Image src="/images/abt-globe.png" alt={isAr ? "حضور عالمي متصل" : "Connected globally"} fill className="object-contain" />
          </div>

          <div className={`relative z-10 ${isAr ? "self-start" : "self-end"}`}>
            <button aria-label="Explore" className={`text-[#2E368F] hover:text-[#1c2260] transition-colors ${isAr ? "scale-x-[-1]" : ""}`}>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
