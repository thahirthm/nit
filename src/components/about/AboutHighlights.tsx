"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";

const clientLogos = [
  { src: "/images/tc-1.png", alt: { en: "Saudi Aramco", ar: "أرامكو السعودية" } },
  { src: "/images/tc-2.png", alt: { en: "NEOM", ar: "نيوم" } },
  { src: "/images/tc-3.png", alt: { en: "stc", ar: "stc" } },
  { src: "/images/tc-4.png", alt: { en: "Ministry of Culture", ar: "وزارة الثقافة" } },
  { src: "/images/tc-5.png", alt: { en: "Saudi National Bank (SNB)", ar: "البنك الأهلي السعودي" } },
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

  const scrollToClients = () =>
    document.getElementById("clients-partners")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="who-we-are" className={`w-full bg-white mt-5 ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:site-gutter grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-8">
        {/* Card 1: Trusted by many — clicking the card scrolls to "Trusted by leading organizations"
            (#clients-partners) on this page; the logo dots cycle logos and the arrow jumps to the stats section (#our-stats) */}
        <Reveal
          delay={0}
          duration={0.7}
          y={40}
          role="link"
          tabIndex={0}
          onClick={scrollToClients}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToClients();
            }
          }}
          className={`${cardClasses} cursor-pointer`}
        >
          <h3 dir={isAr ? "rtl" : "ltr"} className="text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "موثوق به من الكثيرين." : "Trusted by many."}
          </h3>

          {/* Logos are centred in a fixed box; mix-blend-multiply drops the white background baked
              into the logo files so only the mark shows on the grey card. */}
          <div className="relative self-center w-[80%] max-w-[300px] h-[110px] lg:h-[130px]">
            <Image quality={95}
              src={clientLogos[logoIndex].src}
              alt={isAr ? clientLogos[logoIndex].alt.ar : clientLogos[logoIndex].alt.en}
              fill
              className="object-contain object-center mix-blend-multiply"
            />
          </div>

          {/* Follows the page direction: in Arabic the dots sit on the right (first dot rightmost) and the arrow on the left, pointing left */}
          <div dir={isAr ? "rtl" : "ltr"} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {clientLogos.map((logo, i) => (
                <button
                  key={logo.alt.en}
                  aria-label={`Show ${logo.alt.en}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLogoIndex(i);
                  }}
                  className={`w-1.5 h-1.5 transition-colors duration-300 ${i === logoIndex ? "bg-[#2E368F]" : "bg-gray-300"}`}
                />
              ))}
            </div>
            {/* Arrow jumps down to the "Scale that speaks." stats section (#our-stats); the dots still pick logos */}
            <button
              aria-label={isAr ? "عرض الإحصائيات" : "View stats"}
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById("our-stats")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-[#2E368F] hover:text-[#1c2260] transition-colors"
            >
              <ArrowIcon className={isAr ? "scale-x-[-1]" : ""} />
            </button>
          </div>
        </Reveal>

        {/* Card 2: The growth story, in figures */}
        <Reveal delay={0.12} duration={0.7} y={40} className={cardClasses}>
          <h3 dir={isAr ? "rtl" : "ltr"} className="text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "قصة النمو، بالأرقام." : "The growth story, in figures."}
          </h3>

          <div dir="ltr" className="flex items-end justify-between gap-3 sm:gap-6">
            {/* Scrolls down to the "Scale that speaks." section (#our-stats) on this page */}
            <Button
              variant="primary"
              className="shrink-0"
              onClick={() => document.getElementById("our-stats")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              {isAr ? "عرض الإحصائيات" : "VIEW STATS"}
            </Button>

            <div className="text-right shrink-0">
              <div className="font-[family-name:var(--font-anek-latin)] text-[34px] sm:text-[44px] lg:text-[70px] font-light text-[#2E368F] leading-none">
                60k+
              </div>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 whitespace-nowrap">{isAr ? "الموارد داخل المملكة" : "In-Kingdom resources"}</p>
            </div>
          </div>
        </Reveal>

        {/* Card 3: Connected globally */}
        <Reveal delay={0.24} duration={0.7} y={40} className={cardClasses}>
          <h3 dir={isAr ? "rtl" : "ltr"} className="relative z-10 text-[28px] lg:text-[30px] font-extralight text-[#2E368F]">
            {isAr ? "حضور عالمي متصل" : "Connected globally"}
          </h3>

          {/* Map fills the card below the heading, edge to edge (sides crop slightly rather than leaving empty bands) */}
          <div className="absolute inset-x-0 bottom-0 top-[70px] lg:top-[90px] pointer-events-none">
            <Image quality={95} src="/images/glob-dots.png" alt={isAr ? "حضور عالمي متصل" : "Connected globally"} fill className="object-contain object-center" />
          </div>

          <div className={`relative z-10 ${isAr ? "self-start" : "self-end"}`}>
            {/* Scrolls down to the "Local expertise. Global reach." section on this page */}
            <button
              aria-label="Explore"
              onClick={() => document.getElementById("global-reach")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`text-[#2E368F] hover:text-[#1c2260] transition-colors ${isAr ? "scale-x-[-1]" : ""}`}
            >
              <ArrowIcon />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
