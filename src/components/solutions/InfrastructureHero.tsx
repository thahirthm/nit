import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function InfrastructureHero() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[120px] lg:pt-[160px]">
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[520px] overflow-hidden">
          <Image
            src="/images/infra-banner.png"
            alt="Aerial view of a Saudi Arabian city skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <h1 className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight">
            Engineered to power.
            <br />
            Built to connect.
          </h1>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <Button href="/contact" variant="secondary">
              Connect with us
            </Button>
          </div>
        </div>

        <div className="flex justify-end mt-10 lg:mt-14">
          <div className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed font-light">
              NIT engineers and delivers the critical infrastructure that powers Saudi Arabia — from substations and
              water pipelines to industrial systems, communication networks, and the long-term operations that keep
              them running.
            </p>
            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed font-light">
              A 1st-Class contractor, approved for EPC work up to 380kV, with three decades of execution across the
              Kingdom&apos;s most demanding projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
