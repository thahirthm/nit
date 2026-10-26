import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { termsOfServiceTitle, termsOfServiceIntro, termsOfServiceSections } from "@/data/termsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions that govern your use of the Nesma Infrastructure & Technology website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={termsOfServiceTitle} intro={termsOfServiceIntro} sections={termsOfServiceSections} />
    </main>
  );
}
