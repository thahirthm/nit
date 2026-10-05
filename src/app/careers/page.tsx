import { CareersHero } from "@/components/careers/CareersHero";
import { CareersWhyUs } from "@/components/careers/CareersWhyUs";
import { CareersGallery } from "@/components/careers/CareersGallery";
import { CareersApply } from "@/components/careers/CareersApply";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <CareersWhyUs />
      <CareersApply />
      <CareersGallery />
    </main>
  );
}
