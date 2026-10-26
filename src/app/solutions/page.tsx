import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsCards } from "@/components/solutions/SolutionsCards";
import { SolutionsGrowth } from "@/components/solutions/SolutionsGrowth";
import { SolutionsMap } from "@/components/solutions/SolutionsMap";
import { SolutionsIndustries } from "@/components/solutions/SolutionsIndustries";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Solutions",
  description: "Infrastructure and technology solutions from NIT: transmission and distribution, energy efficiency, water, industrial systems, ICT, data centers, cybersecurity and digital transformation across the Kingdom.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <SolutionsHero />

      <Reveal>
        <SolutionsCards />
      </Reveal>

      <Reveal>
        <SolutionsGrowth />
      </Reveal>

      <Reveal>
        <SolutionsMap />
      </Reveal>

      <Reveal>
        <SolutionsIndustries />
      </Reveal>

      <Reveal>
        <SolutionsCta />
      </Reveal>
    </main>
  );
}
