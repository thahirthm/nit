import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { termsOfServiceTitle, termsOfServiceIntro, termsOfServiceSections } from "@/data/termsOfService";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={termsOfServiceTitle} intro={termsOfServiceIntro} sections={termsOfServiceSections} />
    </main>
  );
}
