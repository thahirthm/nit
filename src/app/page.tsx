import { Banner } from "@/components/home/Banner";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { GlanceSection } from "@/components/home/GlanceSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ClientsSection } from "@/components/home/ClientsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <Banner />

      {/* Second Section: Global Expertise */}
      <ExpertiseSection />

      {/* Third Section: At a glance (Horizontal Scroll) */}
      <GlanceSection />

      {/* Fourth Section: Our Solutions */}
      <SolutionsSection />

      {/* Fifth Section: Featured Projects */}
      <ProjectsSection />

      {/* Sixth Section: Trusted by Leading Organizations */}
      <ClientsSection />
    </main>
  );
}
