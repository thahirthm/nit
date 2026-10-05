import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function MediaHero() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[120px] lg:pt-[160px]">
      <div className="w-full px-6 lg:px-16">
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/media-banner.png"
            alt="NIT engineer on site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/0 to-black/10" />

          <h1 className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 text-white text-[28px] sm:text-[38px] lg:text-[48px] font-extralight leading-tight">
            Media centre
          </h1>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <Button href="/contact" variant="secondary">
              Connect with us
            </Button>
          </div>
        </div>

        <div className="flex justify-end mt-10 lg:mt-14">
          <div className="max-w-xl space-y-6">
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              Discover NIT&apos;s latest announcements, milestones, awards, and corporate news—all in one place.
            </p>
            <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
              The Media Centre centralizes key updates, recognitions, partnerships, and stories from our
              infrastructure and technology operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
