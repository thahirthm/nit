import { Button } from "@/components/ui/Button";

export function SolutionsHero() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[120px] lg:pt-[160px]">
      <div className="w-full px-6 lg:px-16">
        <h1 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight mb-6 lg:mb-8">
          Solutions
        </h1>

        <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-light text-[#727272] max-w-3xl mb-8">
          Built around two core verticals, NIT brings field engineering and enterprise systems together for critical operations across Saudi Arabia. From power, water, communications, and industrial facilities to data centers, cloud, cybersecurity, and managed services, our work supports sectors where reliability matters most.
        </p>

        <Button variant="primary">CONNECT WITH US</Button>
      </div>
    </section>
  );
}
