import Image from "next/image";

type SolutionDetailHeroProps = {
  title: string;
  description: string;
  image: string;
  capabilities: string[];
};

export function SolutionDetailHero({ title, description, image, capabilities }: SolutionDetailHeroProps) {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[120px] lg:pt-[160px]">
      <div className="w-full px-6 lg:px-16">
        <h1 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-6 lg:mb-8">
          {title}
        </h1>

        <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-light text-[#727272] max-w-3xl mb-10 lg:mb-14">
          {description}
        </p>

        <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[480px] mb-12 lg:mb-16 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <h2 className="text-gray-900 text-[20px] sm:text-[24px] lg:text-[28px] font-extralight tracking-tight mb-6 lg:mb-8">
          Our Capabilities
        </h2>
        <div className="border-t border-gray-200 max-w-2xl">
          {capabilities.map((capability) => (
            <div key={capability} className="flex items-center justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600 text-[16px] sm:text-[18px] font-light">{capability}</span>
              <span className="text-gray-400 text-lg font-light shrink-0 ml-4">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
