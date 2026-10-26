import type { Metadata } from "next";
import { InfrastructureHero } from "@/components/solutions/InfrastructureHero";
import { InfrastructureSolutions } from "@/components/solutions/InfrastructureSolutions";
import { InfrastructureProjects } from "@/components/solutions/InfrastructureProjects";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Infrastructure Solutions",
  description: "Designing and delivering critical infrastructure that supports energy, communications and industrial operations: transmission and distribution, energy solutions, water, industries, ICT, and O&M and MEP services.",
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen">
      <InfrastructureHero />
      <InfrastructureSolutions />
      <InfrastructureProjects />
      <SolutionsCta />
    </main>
  );
}
