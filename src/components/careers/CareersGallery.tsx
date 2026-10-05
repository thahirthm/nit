import Image from "next/image";

const images = ["/images/career-1.png", "/images/career-2.png", "/images/career-3.png", "/images/career-4.png"];

function GalleryRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-6 shrink-0" aria-hidden={hidden}>
      {images.map((src, i) => (
        <div key={i} className="relative w-[240px] sm:w-[280px] h-[300px] sm:h-[340px] overflow-hidden shrink-0">
          <Image src={src} alt="NIT team at work" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function CareersGallery() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px] overflow-hidden">
      <div className="w-full px-6 lg:px-16">
        <div className="flex justify-end">
          <p className="max-w-xl text-gray-500 text-[17px] sm:text-[19px] leading-relaxed font-light">
            Work on high-impact national infrastructure and technology initiatives across energy, telecom,
            transportation, and smart systems.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-14 flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
        <GalleryRow />
        <GalleryRow hidden />
      </div>
    </section>
  );
}
