"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const cards = [
  {
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    slug: "infrastructure",
    image: "/images/infra-banner.png",
    capabilities: [
      { en: "Transmission and Distribution / Advanced Energy", slug: "transmission-distribution", ar: "النقل والتوزيع / الطاقة المتقدمة" },
      { en: "Energy Solutions (Energy Efficiency)", slug: "energy-efficiency", ar: "حلول الطاقة (كفاءة الطاقة)" },
      { en: "Industries (Industrial Solutions)", slug: "industrial", ar: "الصناعات (الحلول الصناعية)" },
      { en: "Water Infrastructure", slug: "water", ar: "البنية التحتية للمياه" },
      { en: "Communication and Technology (ICT)", slug: "ict", ar: "الاتصالات والتقنية (ICT)" },
      { en: "Infrastructure Services (O&M and MEP)", slug: "infrastructure-services", ar: "خدمات البنية التحتية (التشغيل والصيانة والأعمال الكهروميكانيكية)" },
    ],
  },
  {
    title: { en: "Technology", ar: "التقنية" },
    slug: "technology",
    image: "/images/banner.png",
    capabilities: [
      { en: "Digital Transformation", slug: "digital-transformation", ar: "التحول الرقمي" },
      { en: "Data & AI", slug: "data-ai", ar: "البيانات والذكاء الاصطناعي" },
      { en: "ERP Solutions", slug: "erp", ar: "حلول تخطيط موارد المؤسسة" },
      { en: "Blockchain", slug: "blockchain", ar: "سلاسل الكتل" },
      { en: "Cloud Services", slug: "cloud", ar: "الخدمات السحابية" },
      { en: "Cybersecurity", slug: "cybersecurity", ar: "الأمن السيبراني" },
      { en: "Data Center Services", slug: "data-center", ar: "خدمات مراكز البيانات" },
      { en: "Managed Services", slug: "managed-services", ar: "الخدمات المُدارة" },
      { en: "Smart Cities", slug: "smart-cities", ar: "المدن الذكية" },
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
              className="relative h-[560px] sm:h-[600px] lg:h-[660px] overflow-hidden"
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
                className={`absolute top-4 start-4 end-4 bottom-[88px] sm:start-auto sm:top-5 sm:end-5 sm:bottom-5 lg:top-6 lg:end-6 lg:bottom-6 sm:w-[65%] lg:w-[55%] bg-[#F5F5F5] flex flex-col px-5 sm:px-7 lg:px-8 py-5 sm:py-7 transition-transform duration-500 ease-out ${
                  isActive ? "translate-x-0" : isAr ? "-translate-x-[calc(100%+2rem)]" : "translate-x-[calc(100%+2rem)]"
                }`}
              >
                <h4 className="text-gray-900 text-[22px] sm:text-[26px] lg:text-[30px] font-extralight tracking-tight">
                  {isAr ? "قدراتنا:" : "Our Capabilities:"}
                </h4>
                {/* Fixed panel height (ends above the Read more button on mobile) — the list scrolls when it doesn't fit */}
                <div
                  className="border-t border-gray-300 mt-4 sm:mt-auto min-h-0 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#2E368F_transparent]"
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  {card.capabilities.map((capability) => (
                    // Opens that service's tab on the solution detail page (same ?service= deep link as the home page)
                    <Link
                      key={capability.en}
                      href={`/solutions/${card.slug}?service=${capability.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="group/cap flex items-center justify-between py-2.5 sm:py-3 border-b border-gray-300"
                    >
                      <span className="text-gray-600 text-[15px] sm:text-[17px] lg:text-[19px] font-light transition-colors duration-300 group-hover/cap:text-[#2E368F]">
                        {isAr ? capability.ar : capability.en}
                      </span>
                      <span className="text-gray-400 text-3xl font-light leading-none shrink-0 ms-4 transition-colors duration-300 group-hover/cap:text-[#2E368F]">+</span>
                    </Link>
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
