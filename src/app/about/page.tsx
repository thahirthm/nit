import { AboutHero } from "@/components/about/AboutHero";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutStand } from "@/components/about/AboutStand";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutScale } from "@/components/about/AboutScale";
import { ClientsSection } from "@/components/home/ClientsSection";
import { AboutCeoMessage } from "@/components/about/AboutCeoMessage";
import { AboutLeadership } from "@/components/about/AboutLeadership";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutHighlights />
      <AboutStand />
      <AboutHistory />
      <AboutScale />
      <ClientsSection />
      <AboutCeoMessage />
      <AboutLeadership />
    </main>
  );
}
