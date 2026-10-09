"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = ["/images/career-1.png", "/images/career-2.png", "/images/career-3.png", "/images/career-4.png"];

function GalleryRow({ hidden, alt }: { hidden?: boolean; alt: string }) {
  return (
    <div className="flex items-center gap-6 shrink-0" aria-hidden={hidden}>
      {images.map((src, i) => (
        <div key={i} className="relative w-[240px] sm:w-[280px] h-[300px] sm:h-[340px] overflow-hidden shrink-0">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function CareersGallery() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const alt = isAr ? "فريق نسما في العمل" : "NIT team at work";

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] overflow-hidden ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="w-full px-6 lg:px-16">
        <div className={`flex ${isAr ? "justify-start" : "justify-end"}`}>
          <p dir={isAr ? "rtl" : "ltr"} className="max-w-xl text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
            {isAr
              ? "اعمل على مبادرات وطنية مؤثرة في مجالات البنية التحتية والتقنية، تشمل الطاقة والاتصالات والنقل والأنظمة الذكية."
              : "Work on high-impact national infrastructure and technology initiatives across energy, telecom, transportation, and smart systems."}
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-14 flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
        <GalleryRow alt={alt} />
        <GalleryRow hidden alt={alt} />
      </div>
    </section>
  );
}
