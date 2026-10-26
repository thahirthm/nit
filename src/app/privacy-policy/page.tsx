import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { privacyPolicyTitle, privacyPolicyIntro, privacyPolicySections } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nesma Infrastructure & Technology collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={privacyPolicyTitle} intro={privacyPolicyIntro} sections={privacyPolicySections} />
    </main>
  );
}
