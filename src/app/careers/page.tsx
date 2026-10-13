import { CareersHero } from "@/components/careers/CareersHero";
import { CareersWhyUs } from "@/components/careers/CareersWhyUs";
import { CareersGallery } from "@/components/careers/CareersGallery";
import { CareersApply } from "@/components/careers/CareersApply";
import { Reveal } from "@/components/ui/Reveal";

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
