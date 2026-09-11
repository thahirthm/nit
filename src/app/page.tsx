import { Banner } from "@/components/home/Banner";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { GlanceSection } from "@/components/home/GlanceSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TypingSection } from "@/components/home/TypingSection";
import { NewsSection } from "@/components/home/NewsSection";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Banner Section — no reveal, it's the immediate hero */}
      <Banner />

      {/* Second Section: Global Expertise */}
      <Reveal>
        <ExpertiseSection />
      </Reveal>

      {/* Third Section: At a glance (Horizontal Scroll) — no reveal wrapper:
          it relies on position:sticky for its desktop scroll-jack effect, and
          an animated transform on an ancestor breaks sticky positioning. */}
      <GlanceSection />

      {/* Fourth Section: Our Solutions */}
      <Reveal>
        <SolutionsSection />
      </Reveal>

      {/* Fifth Section: Featured Projects */}
      <Reveal>
        <ProjectsSection />
      </Reveal>

      {/* Sixth Section: Trusted by Leading Organizations */}
      <Reveal>
        <ClientsSection />
      </Reveal>

      {/* Seventh Section: Engineering Statement (Typing + Video) */}
      <Reveal>
        <TypingSection />
      </Reveal>

      {/* Eighth Section: News & Announcements */}
      <Reveal>
        <NewsSection />
      </Reveal>
    </main>
  );
}
