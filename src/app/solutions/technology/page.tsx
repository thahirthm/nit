import { TechnologyHero } from "@/components/solutions/TechnologyHero";
import { TechnologySolutions } from "@/components/solutions/TechnologySolutions";
import { TechnologyProjects } from "@/components/solutions/TechnologyProjects";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <TechnologyHero />
      <TechnologySolutions />
      <TechnologyProjects />
      <SolutionsCta heading="Any technology project in mind?" />
    </main>
  );
}
