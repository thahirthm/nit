import { Suspense } from "react";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsStats } from "@/components/projects/ProjectsStats";
import { SolutionsMap } from "@/components/solutions/SolutionsMap";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";
import { Reveal } from "@/components/ui/Reveal";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <ProjectsHero />

      <Reveal>
        <ProjectsStats />
      </Reveal>

      <Reveal>
        <SolutionsMap />
      </Reveal>

      <Reveal>
        {/* Suspense is required because ProjectsShowcase reads the URL's search params */}
        <Suspense>
          <ProjectsShowcase />
        </Suspense>
      </Reveal>

      <Reveal>
        <SolutionsCta />
      </Reveal>
    </main>
  );
}
