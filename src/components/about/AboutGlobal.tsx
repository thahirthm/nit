"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { GlobalReachMap } from "@/components/ui/GlobalReachMap";

export function AboutGlobal() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    // Anchor for the "Connected globally" card's arrow in AboutHighlights
    <section id="global-reach" className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:site-gutter">
        <Reveal delay={0} duration={0.8} y={30}>
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? "خبرات محلية. حضور عالمي." : "Local expertise. Global reach."}
          </h2>
        </Reveal>

        <Reveal delay={0.1} duration={0.9} y={30} dir="ltr" className="relative w-full -mx-6 sm:-mx-4 lg:-mx-8 px-0 sm:px-2 lg:px-4 pt-8 sm:pt-0 overflow-hidden sm:overflow-visible">
        {/* Mobile: zoomed in (180%) and shifted so the view centres on the Middle East cluster while
            keeping the US (far left) and China (far right) markers on screen */}
        <GlobalReachMap className="w-[180%] -ml-[38%] sm:w-full sm:ml-0" />
        </Reveal>

        <Reveal
          delay={0.3}
          duration={0.7}
          y={24}
          dir={isAr ? "rtl" : "ltr"}
          className={`relative bg-[#F5F5F5] px-6 py-6 sm:px-8 sm:py-8 max-w-xl mt-6 lg:mt-10 ${
            isAr ? "border-r-4" : "border-l-4"
          } border-[#81D1E8]`}
        >
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {isAr
              ? "تجمع نسما للبنية التحتية والتقنية بين حضور محلي وعالمي قوي، مع سلسلة توريد مستقلة عن الموردين ومبنية على شراكات موثوقة."
              : "Nesma Infrastructure & Technology combines strong local and global presence with a vendor-agnostic supply chain built on trusted partnerships."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
