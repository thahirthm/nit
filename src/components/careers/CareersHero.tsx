import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CareersHero() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[120px] lg:pt-[160px]">
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/career-banner.png"
            alt="NIT team on site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <h1 className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight">
            Join our team
          </h1>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <Button href="#opportunities" variant="secondary">
              Our opportunities
            </Button>
          </div>
        </div>

        <div className="flex justify-end mt-10 lg:mt-14">
          <div className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              For more than three decades, NIT teams have delivered work that supports critical operations across
              Saudi Arabia. Our people bring engineering discipline, technical expertise, and field experience to
              projects across infrastructure and technology.
            </p>
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              Join a team where your work contributes to national-scale projects, reliable operations, and the
              Kingdom&apos;s next phase of growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
