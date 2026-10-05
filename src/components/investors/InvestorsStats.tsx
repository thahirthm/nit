function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 px-10 shrink-0 whitespace-nowrap">
      <span className="font-[family-name:var(--font-anek-latin)] font-normal text-[#2E368F] text-[18px] sm:text-[20px]">
        {value}
      </span>
      <span className="text-gray-400 text-[18px] sm:text-[20px] font-light">{label}</span>
    </div>
  );
}

function StatsRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={hidden}>
      <Stat value="27.82 SAR" label="Share Price" />
      <Stat value="+0.82%" label="Daily Change" />
      <Stat value="1.24M Shares" label="Trading Volume" />
      <Stat value="4.8B SAR" label="Market Cap" />
      <Stat value="May 21, 2026" label="" />
    </div>
  );
}

export function InvestorsStats() {
  return (
    <section className="w-full mt-10 lg:mt-14 bg-[#F5F5F5] font-[family-name:var(--font-futura)] overflow-hidden">
      <div className="flex w-max py-6 lg:py-4 animate-marquee hover:[animation-play-state:paused]">
        <StatsRow />
        <StatsRow hidden />
      </div>
    </section>
  );
}
