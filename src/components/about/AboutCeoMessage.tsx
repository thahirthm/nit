"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";

const QuoteMark = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 278" fill="none" className={className}>
    <path
      opacity="0.05"
      d="M3.03578e-05 104.374C2.15935e-05 154.499 12.0386 193.743 36.1158 222.103C60.5228 250.464 94.6596 269.096 138.526 278L138.526 226.555C105.214 216.332 82.7859 197.865 71.2421 171.153C64.6456 156.973 62.007 143.287 63.3263 130.096L141 130.096L141 -5.86436e-06L4.86071e-05 -3.05176e-05L3.03578e-05 104.374Z"
      fill="#F7F7F7"
    />
  </svg>
);

export function AboutCeoMessage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full bg-white pt-[60px] lg:pt-[100px] ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="px-6 lg:px-16">
        <Reveal delay={0} duration={0.8} y={30}>
          <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
            {isAr ? "رسالة الرئيس التنفيذي" : "CEO's message"}
          </h2>
        </Reveal>

        {/* No overflow-hidden: the CEO photo is taller than the panel on desktop and pops out above its
            top edge, so the panel gets extra top margin to keep the head clear of the heading. */}
        <Reveal delay={0.1} duration={0.9} y={40}
          className="group relative bg-[#2E368F] min-h-[360px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[560px] lg:mt-[90px] lg:flex lg:items-center">
          {/* Decorative quote mark */}
          <QuoteMark
            className={`absolute top-4 sm:top-6 w-[70px] sm:w-[100px] lg:w-[141px] h-auto pointer-events-none ${
              isAr ? "right-4 sm:right-6 scale-x-[-1]" : "left-4 sm:left-6"
            }`}
          />

          {/* Text content */}
          <div
            dir={isAr ? "rtl" : "ltr"}
            className={`relative z-10 flex flex-col gap-10 lg:gap-14 py-14 sm:py-16 lg:py-20 px-8 sm:px-10 lg:px-16 max-w-full ${
              isAr ? "lg:max-w-[55%] lg:ml-auto" : "lg:max-w-[55%]"
            }`}
          >
            <Reveal delay={0.25} duration={0.7} y={24} className="space-y-8">
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-snug">
                {isAr ? "بنية الغد لا تشبه بنية اليوم." : "Tomorrow's infrastructure looks nothing like today's."}
              </p>
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-snug">
                {isAr
                  ? "نبنيها بدقة، ونستشرف ما تحتاجه المملكة لاحقًا، ونحققها قبل أن يطلبها السوق."
                  : "We build it with precision, anticipate what the Kingdom needs next, and deliver before the market asks."}
              </p>
            </Reveal>

            <Reveal delay={0.4} duration={0.7} y={24} className="flex items-center gap-4">
              <span className="text-white text-base sm:text-lg font-normal">
                {isAr ? "صالح الصنيدي - الرئيس التنفيذي" : "Salah Al Sunaid - CEO"}
              </span>
              <a
                href="https://www.linkedin.com/in/salah-al-sunaid-3870668/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 border border-white/60 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                in
              </a>
            </Reveal>
          </div>

          {/* CEO image — on desktop it starts sunk into the panel and rises on hover, coming up from
              under the panel's bottom edge until it pops out ~70px above the top edge. The clip-path
              hides only what's below the panel (the top stays open for the pop-out).
              Mobile/tablet: no hover, so it simply sits fully visible below the text. */}
          <Reveal
            delay={0.3}
            duration={0.9}
            y={50}
            className={`relative mt-2 h-[260px] sm:h-[320px] w-full flex justify-center lg:absolute lg:mt-0 lg:bottom-0 lg:h-[570px] xl:h-[630px] lg:w-auto lg:block lg:[clip-path:inset(-200px_0_0_0)] z-20 pointer-events-none ${
              isAr ? "lg:left-6 xl:left-12" : "lg:right-6 xl:right-12"
            }`}
          >
            <Image quality={100}
              src="/images/new-ceo.png"
              alt={isAr ? "صالح الصنيدي، الرئيس التنفيذي" : "Salah Al Sunaid, CEO"}
              width={1984}
              height={2588}
              sizes="(min-width: 1280px) 483px, (min-width: 1024px) 437px, 245px"
              className="h-full w-auto object-contain object-bottom transition-transform duration-700 ease-out lg:translate-y-[18%] lg:group-hover:translate-y-0"
              priority={false}
            />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
