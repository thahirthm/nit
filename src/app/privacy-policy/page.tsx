import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { privacyPolicyTitle, privacyPolicyIntro, privacyPolicySections } from "@/data/privacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={privacyPolicyTitle} intro={privacyPolicyIntro} sections={privacyPolicySections} />
    </main>
  );
}
