import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsStats } from "@/components/projects/ProjectsStats";
import { SolutionsMap } from "@/components/solutions/SolutionsMap";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { SolutionsCta } from "@/components/solutions/SolutionsCta";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsHero />
      <ProjectsStats />
      <SolutionsMap />
      <ProjectsShowcase />
      <SolutionsCta />
    </main>
  );
}
