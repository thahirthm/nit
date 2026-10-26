import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersWhyUs } from "@/components/careers/CareersWhyUs";
import { CareersGallery } from "@/components/careers/CareersGallery";
import { CareersApply } from "@/components/careers/CareersApply";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career at NIT and work on high-impact national infrastructure and technology initiatives across energy, telecom, transportation and smart systems in Saudi Arabia.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <CareersHero />

      <Reveal>
        <CareersWhyUs />
      </Reveal>

      <Reveal>
        <CareersApply />
      </Reveal>

      <Reveal>
        <CareersGallery />
      </Reveal>
    </main>
  );
}
