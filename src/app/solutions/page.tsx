import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsCards } from "@/components/solutions/SolutionsCards";
import { SolutionsGrowth } from "@/components/solutions/SolutionsGrowth";
import { SolutionsMap } from "@/components/solutions/SolutionsMap";
import { SolutionsIndustries } from "@/components/solutions/SolutionsIndustries";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <SolutionsHero />
      <SolutionsCards />
      <SolutionsGrowth />
      <SolutionsMap />
      <SolutionsIndustries />
      <SolutionsCta />
    </main>
  );
}
