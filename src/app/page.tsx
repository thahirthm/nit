import type { Metadata } from "next";
import { Banner } from "@/components/home/Banner";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { GlanceSection } from "@/components/home/GlanceSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TypingSection } from "@/components/home/TypingSection";
import { NewsSection } from "@/components/home/NewsSection";
import { Reveal } from "@/components/ui/Reveal";
import { getNewsSectionData, NEWS_PAGE_SIZE } from "@/lib/api";

export const metadata: Metadata = {
  title: { absolute: "Nesma Infrastructure & Technology | Infrastructure & Technology Solutions in Saudi Arabia" },
  description: "Nesma Infrastructure & Technology (NIT) designs and delivers critical infrastructure and technology solutions across Saudi Arabia, from energy, water and communications to data centers and smart systems.",
};

export default async function Home() {
  const news = await getNewsSectionData(NEWS_PAGE_SIZE.home);

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
        <NewsSection initialCategories={news.categories} initialPosts={news.posts} />
      </Reveal>
    </main>
  );
}
