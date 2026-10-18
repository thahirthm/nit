"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const cards = [
  {
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    slug: "infrastructure",
    image: "/images/infra-banner.png",
    capabilities: [
      { en: "Energy Infrastructure", ar: "البنية التحتية للطاقة" },
      { en: "Transmission & Distribution", ar: "النقل والتوزيع" },
      { en: "Water & MEP Systems", ar: "أنظمة المياه والكهروميكانيكية" },
      { en: "Industrial Infrastructure", ar: "البنية التحتية الصناعية" },
      { en: "Operations & Maintenance", ar: "التشغيل والصيانة" },
    ],
  },
  {
    title: { en: "Technology", ar: "التقنية" },
    slug: "technology",
    image: "/images/banner.png",
    capabilities: [
      { en: "Digital Transformation", ar: "التحول الرقمي" },
      { en: "Data & AI", ar: "البيانات والذكاء الاصطناعي" },
      { en: "Cloud Services", ar: "الخدمات السحابية" },
      { en: "Cybersecurity", ar: "الأمن السيبراني" },
      { en: "Managed Services", ar: "الخدمات المُدارة" },
    ],
  },
];

export function SolutionsCards() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {cards.map((card, cardIndex) => {
          const isActive = activeCard === card.slug;
          const title = isAr ? card.title.ar : card.title.en;
          return (
            <Reveal
              key={card.slug}
              // RTL in Arabic: title/button move to the right and the capabilities panel slides in from the left
              dir={isAr ? "rtl" : "ltr"}
              delay={cardIndex * 0.12}
              duration={0.8}
              y={40}
              className="relative h-[600px] sm:h-[560px] lg:h-[620px] overflow-hidden"
              onMouseEnter={() => setActiveCard(card.slug)}
              onMouseLeave={() => setActiveCard((current) => (current === card.slug ? null : current))}
              onClick={() => setActiveCard((current) => (current === card.slug ? null : card.slug))}
            >
              <Image quality={95} src={card.image} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10" />

              <h3 className="absolute top-6 start-6 sm:top-8 sm:start-8 text-white text-[28px] sm:text-[36px] lg:text-[42px] font-extralight tracking-tight">
                {title}
              </h3>

              <div
                className="absolute z-20 bottom-6 start-6 sm:bottom-8 sm:start-8"
                onClick={(e) => e.stopPropagation()}
              >
                <Button href={`/solutions/${card.slug}`} variant="secondary">
                  {isAr ? "اقرأ المزيد" : "Read more"}
                </Button>
              </div>

              {/* Capabilities panel — slides in from the end side (right in English, left in Arabic) on hover (desktop) / tap (mobile) */}
              <div
                className={`absolute top-4 end-4 bottom-4 sm:top-5 sm:end-5 sm:bottom-5 lg:top-6 lg:end-6 lg:bottom-6 w-[62%] sm:w-[65%] lg:w-[55%] bg-[#F5F5F5] flex flex-col px-6 sm:px-7 lg:px-8 py-6 sm:py-7 transition-transform duration-500 ease-out ${
                  isActive ? "translate-x-0" : isAr ? "-translate-x-[calc(100%+2rem)]" : "translate-x-[calc(100%+2rem)]"
                }`}
              >
                <h4 className="text-gray-900 text-[22px] sm:text-[26px] lg:text-[30px] font-extralight tracking-tight">
                  {isAr ? "قدراتنا:" : "Our Capabilities:"}
                </h4>
                <div className="border-t border-gray-300 mt-auto">
                  {card.capabilities.map((capability) => (
                    <div
                      key={capability.en}
                      className="flex items-center justify-between py-2.5 sm:py-3 border-b border-gray-300"
                    >
                      <span className="text-gray-600 text-[15px] sm:text-[17px] lg:text-[19px] font-light">
                        {isAr ? capability.ar : capability.en}
                      </span>
                      <span className="text-gray-400 text-lg font-light shrink-0 ms-4">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
