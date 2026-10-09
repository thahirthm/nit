"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const awards = [
  {
    year: "2026",
    title: {
      en: "Visionary Leader in Digital & Energy Infrastructure Transformation",
      ar: "قائد رؤيوي في التحول في البنية التحتية الرقمية والطاقة",
    },
    date: { en: "Apr 14", ar: "14 أبريل" },
    body: { en: "Global Economics Awards", ar: "جوائز Global Economics" },
    tag: { en: "Leadership", ar: "القيادة" },
    image: "/images/re1.png",
  },
  {
    year: "2025",
    title: {
      en: "Fastest Growing EPC Solutions Provider — Power & Energy",
      ar: "أسرع مزوّد حلول نموًا في مجال الهندسة والمشتريات والإنشاءات — الطاقة والكهرباء",
    },
    date: { en: "Mar 12", ar: "12 مارس" },
    body: { en: "Global Business Outlook Awards", ar: "جوائز Global Business Outlook" },
    tag: { en: "EPC Solutions", ar: "حلول الهندسة والمشتريات والإنشاءات" },
    image: "/images/re2.png",
  },
  {
    year: "2026",
    title: {
      en: "Leading Smart Infrastructure Partner — Digital Construction",
      ar: "شريك رائد في البنية التحتية الذكية — الإنشاءات الرقمية",
    },
    date: { en: "Jul 20", ar: "20 يوليو" },
    body: { en: "Global Economics Awards", ar: "جوائز Global Economics" },
    tag: { en: "Smart Infrastructure", ar: "البنية التحتية الذكية" },
    image: "/images/re3.png",
  },
  {
    year: "2025",
    title: {
      en: "Most Innovative Infrastructure Technology Integrator",
      ar: "أكثر الجهات ابتكارًا في تكامل تقنيات البنية التحتية",
    },
    date: { en: "Dec 28", ar: "28 ديسمبر" },
    body: { en: "Global Business Outlook Awards", ar: "جوائز Global Business Outlook" },
    tag: { en: "Innovation", ar: "الابتكار" },
    image: "/images/re4.png",
  },
];

export function MediaAwards() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[48px] font-extralight tracking-tight mb-8 lg:mb-10">
          {isAr ? "تقديرًا للتميز" : "Recognized for excellence"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="border-t border-gray-200">
            {awards.map((award, i) => (
              <div
                key={award.title.en}
                onMouseEnter={() => setActiveIndex(i)}
                dir={isAr ? "rtl" : "ltr"}
                className="group py-4 border-b border-gray-200 cursor-default"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-anek-latin)] text-[#2E368F] text-[28px] sm:text-[32px] font-normal shrink-0">
                    {award.year}
                  </span>
                  <h3 className="text-gray-700 text-[22px] sm:text-[26px] font-light group-hover:text-[#2E368F] transition-colors duration-300">
                    {isAr ? award.title.ar : award.title.en}
                  </h3>
                </div>
                <p className="mt-2 text-gray-400 text-[16px] sm:text-[17px] font-light">
                  {isAr ? award.date.ar : award.date.en}
                  <span className="mx-1">·</span>
                  {isAr ? award.body.ar : award.body.en}
                  <span className="mx-1.5">|</span>
                  {isAr ? award.tag.ar : award.tag.en}
                </p>
              </div>
            ))}
          </div>

          {/* Award image — swaps per hovered row */}
          <div className="hidden lg:block relative w-full h-[420px]">
            <div key={activeIndex} className="absolute inset-0 animate-fade-in">
              <Image
                src={awards[activeIndex].image}
                alt={isAr ? awards[activeIndex].title.ar : awards[activeIndex].title.en}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
