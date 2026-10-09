"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function MediaHero() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[120px] lg:pt-[160px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/media-banner.png"
            alt={isAr ? "مهندس نسما في موقع العمل" : "NIT engineer on site"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <h1
            dir={isAr ? "rtl" : "ltr"}
            className={`absolute top-6 sm:top-8 lg:top-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight ${
              isAr ? "right-6 sm:right-8 lg:right-10" : "left-6 sm:left-8 lg:left-10"
            }`}
          >
            {isAr ? "المركز الإعلامي" : "Media centre"}
          </h1>

          <div className={`absolute bottom-6 sm:bottom-8 ${isAr ? "right-6 sm:right-8" : "left-6 sm:left-8"}`}>
            <Button href="/contact" variant="secondary">
              {isAr ? "تواصل معنا" : "Connect with us"}
            </Button>
          </div>
        </div>

        <div className={`flex mt-10 lg:mt-14 ${isAr ? "justify-start" : "justify-end"}`}>
          <div dir={isAr ? "rtl" : "ltr"} className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "اطّلع على أحدث إعلانات نسما للبنية التحتية والتقنية، وإنجازاتها، وجوائزها، وأخبارها المؤسسية في مكان واحد."
                : "Discover NIT's latest announcements, milestones, awards, and corporate news—all in one place."}
            </p>
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              {isAr
                ? "يجمع المركز الإعلامي أبرز المستجدات والتكريمات والشراكات والقصص المتعلقة بأعمالنا في قطاعي البنية التحتية والتقنية."
                : "The Media Centre centralizes key updates, recognitions, partnerships, and stories from our infrastructure and technology operations."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
