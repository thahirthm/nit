import type { Metadata } from "next";
import { TechnologyHero } from "@/components/solutions/TechnologyHero";
import { TechnologySolutions } from "@/components/solutions/TechnologySolutions";
import { TechnologyProjects } from "@/components/solutions/TechnologyProjects";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Technology Solutions",
  description: "Digital transformation, data and AI, ERP, blockchain, cloud, cybersecurity, data center services, managed services and smart cities from Nesma Infrastructure & Technology.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <TechnologyHero />
      <TechnologySolutions />
      <TechnologyProjects />
      <SolutionsCta />
    </main>
  );
}
