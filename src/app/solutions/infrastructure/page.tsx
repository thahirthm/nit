import { InfrastructureHero } from "@/components/solutions/InfrastructureHero";
import { InfrastructureSolutions } from "@/components/solutions/InfrastructureSolutions";
import { InfrastructureProjects } from "@/components/solutions/InfrastructureProjects";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen">
      <InfrastructureHero />
      <InfrastructureSolutions />
      <InfrastructureProjects />
      <SolutionsCta heading="Any technology project in mind?" />
    </main>
  );
}
