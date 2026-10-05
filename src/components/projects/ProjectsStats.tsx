import type { ReactNode } from "react";

function Stat({
  value,
  unit,
  label,
}: {
  value?: string;
  unit: ReactNode;
  label?: string;
}) {
  return (
    <div className="flex items-baseline gap-3 px-10 shrink-0 whitespace-nowrap">
      {value && (
        <span className="font-[family-name:var(--font-anek-latin)] font-light text-[#2E368F]/50 text-[18px] sm:text-[20px]">
          {value}
        </span>
      )}
      <span className="font-[family-name:var(--font-anek-latin)] font-normal text-[#2E368F] text-[18px] sm:text-[20px]">
        {unit}
      </span>
      {label && <span className="text-gray-400 text-[18px] sm:text-[20px] font-light">{label}</span>}
    </div>
  );
}

function StatsRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={hidden}>
      <Stat value="587" unit="km" label="Jubail–Buraydah water pipeline" />
      <Stat value="1,100" unit="MW" label="Al Henakiyah solar PV" />
      <Stat
        value="650"
        unit={
          <>
            km<sup>3</sup>/d
          </>
        }
        label="Desalinated water capacity"
      />
      <Stat
        unit={
          <>
            <span className="text-gray-400 font-light">ISO</span> 9001 · 14001
          </>
        }
      />
    </div>
  );
}

export function ProjectsStats() {
  return (
    <section className="w-full mt-10 lg:mt-14 bg-[#F5F5F5] font-[family-name:var(--font-futura)] overflow-hidden">
      <div className="flex w-max py-6 lg:py-4 animate-marquee hover:[animation-play-state:paused]">
        <StatsRow />
        <StatsRow hidden />
      </div>
    </section>
  );
}
