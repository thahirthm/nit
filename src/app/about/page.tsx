import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutStand } from "@/components/about/AboutStand";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutScale } from "@/components/about/AboutScale";
import { ClientsSection } from "@/components/home/ClientsSection";
import { AboutCeoMessage } from "@/components/about/AboutCeoMessage";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutGlobal } from "@/components/about/AboutGlobal";
import { AboutCertifications } from "@/components/about/AboutCertifications";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nesma Infrastructure & Technology: our history, values, leadership team, certifications and the local expertise behind our infrastructure and technology delivery across Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <AboutHero />

      <Reveal>
        <AboutHighlights />
      </Reveal>

      <Reveal>
        <AboutStand />
      </Reveal>

      <Reveal>
        <AboutHistory />
      </Reveal>

      <Reveal>
        <AboutScale />
      </Reveal>

      <Reveal>
        <ClientsSection withPartners />
      </Reveal>

      <Reveal>
        <AboutCeoMessage />
      </Reveal>

      <Reveal>
        <AboutLeadership />
      </Reveal>

      <Reveal>
        <AboutGlobal />
      </Reveal>

      <Reveal>
        <AboutCertifications />
      </Reveal>
    </main>
  );
}
