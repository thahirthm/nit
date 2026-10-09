"use client";

import { useLanguage } from "@/context/LanguageContext";

function Stat({ value, label, isAr }: { value: string; label: string; isAr: boolean }) {
  return (
    <div dir="ltr" className="flex items-baseline gap-3 px-10 shrink-0 whitespace-nowrap">
      <span className="font-[family-name:var(--font-anek-latin)] font-normal text-[#2E368F] text-[18px] sm:text-[20px]">
        {value}
      </span>
      {label && (
        <span dir={isAr ? "rtl" : "ltr"} className="text-gray-400 text-[18px] sm:text-[20px] font-light">
          {label}
        </span>
      )}
    </div>
  );
}

function StatsRow({ hidden, isAr }: { hidden?: boolean; isAr: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={hidden}>
      <Stat value="27.82 SAR" label={isAr ? "سعر السهم" : "Share Price"} isAr={isAr} />
      <Stat value="+0.82%" label={isAr ? "التغير اليومي" : "Daily Change"} isAr={isAr} />
      <Stat value="1.24M Shares" label={isAr ? "حجم التداول" : "Trading Volume"} isAr={isAr} />
      <Stat value="4.8B SAR" label={isAr ? "القيمة السوقية" : "Market Capitalization"} isAr={isAr} />
      <Stat value="May 21, 2026" label="" isAr={isAr} />
    </div>
  );
}

export function InvestorsStats() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section className={`w-full mt-10 lg:mt-14 bg-[#F5F5F5] overflow-hidden ${isAr ? "font-arabic" : "font-[family-name:var(--font-futura)]"}`}>
      <div className="flex w-max py-6 lg:py-4 animate-marquee hover:[animation-play-state:paused]">
        <StatsRow isAr={isAr} />
        <StatsRow hidden isAr={isAr} />
      </div>
    </section>
  );
}
