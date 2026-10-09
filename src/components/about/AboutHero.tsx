"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function AboutHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <h1 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-6 lg:mb-8">
          {isAr ? "من نحن" : "About us"}
        </h1>

        <p dir={isAr ? "rtl" : "ltr"} className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-light text-[#727272] max-w-3xl mb-8">
          {isAr
            ? "نسما للبنية التحتية والتقنية (NIT) هي شركة سعودية متخصصة في البنية التحتية والتقنية، تقدم حلولاً محورية في قطاعات الطاقة والاتصالات والصناعة والمياه والتحول الرقمي. ومنذ عام 1988، دعمت NIT التنمية الوطنية من خلال الخبرة الهندسية والتقنية المتقدمة وموثوقية تنفيذ المشاريع."
            : "Nesma Infrastructure & Technology (NIT) is a Saudi-based infrastructure and technology company delivering critical solutions across energy, communications, industrial, water, and digital sectors. Since 1988, NIT has supported national development through engineering expertise, advanced technology, and trusted project delivery."}
        </p>

        <Button variant="primary">{isAr ? "تواصل معنا" : "CONNECT WITH US"}</Button>

        <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[520px] mt-10 lg:mt-16 overflow-hidden">
          <Image
            src="/images/abt-banner.png"
            alt={isAr ? "خلف أساسات المملكة ومستقبلها" : "Behind the kingdom's foundations and its future."}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <h2
              dir={isAr ? "rtl" : "ltr"}
              className={`text-white text-[18px] sm:text-[28px] lg:text-[50px] font-extralight leading-tight whitespace-nowrap ${isAr ? "text-right" : ""}`}
            >
              {isAr ? "خلف أساسات المملكة ومستقبلها." : "Behind the kingdom's foundations and its future."}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
