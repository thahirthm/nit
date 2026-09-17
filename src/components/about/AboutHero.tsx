import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <h1 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-6 lg:mb-8">
          About us
        </h1>

        <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-light text-[#727272] max-w-3xl mb-8">
          Nesma Infrastructure &amp; Technology (NIT) is a Saudi-based infrastructure and technology company delivering critical solutions across energy, communications, industrial, water, and digital sectors. Since 1988, NIT has supported national development through engineering expertise, advanced technology, and trusted project delivery.
        </p>

        <Button variant="primary">CONNECT WITH US</Button>

        <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[520px] mt-10 lg:mt-16 overflow-hidden">
          <Image
            src="/images/abt-banner.png"
            alt="Behind the kingdom's foundations and its future."
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <h2 className="text-white text-[18px] sm:text-[28px] lg:text-[50px] font-extralight leading-tight whitespace-nowrap">
              Behind the kingdom&apos;s foundations and its future.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
