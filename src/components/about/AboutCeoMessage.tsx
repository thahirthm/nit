"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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
        <h2 dir={isAr ? "rtl" : "ltr"} className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-8 lg:mb-10">
          {isAr ? "رسالة الرئيس التنفيذي" : "CEO's message"}
        </h2>

        <div className="relative bg-[#2E368F] overflow-visible min-h-[360px] sm:min-h-[400px] lg:min-h-[440px]">
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
            <div className="space-y-8">
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-snug">
                {isAr ? "بنية الغد لا تشبه بنية اليوم." : "Tomorrow's infrastructure looks nothing like today's."}
              </p>
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-snug">
                {isAr
                  ? "نبنيها بدقة، ونستشرف ما تحتاجه المملكة لاحقًا، ونحققها قبل أن يطلبها السوق."
                  : "We build it with precision, anticipate what the Kingdom needs next, and deliver before the market asks."}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white text-base sm:text-lg font-normal">
                {isAr ? "صالح الصنيدي - الرئيس التنفيذي" : "Salah Al Sunaid - CEO"}
              </span>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 border border-white/60 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                in
              </a>
            </div>
          </div>

          {/* CEO image — bleeds slightly above the panel's top edge */}
          <div
            className={`hidden lg:block absolute bottom-0 h-[480px] xl:h-[540px] w-auto z-20 pointer-events-none ${
              isAr ? "left-6 xl:left-12" : "right-6 xl:right-12"
            }`}
          >
            <Image
              src="/images/abt-ceo.png"
              alt={isAr ? "صالح الصنيدي، الرئيس التنفيذي" : "Salah Al Sunaid, CEO"}
              width={496}
              height={647}
              className="h-full w-auto object-contain object-bottom"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
