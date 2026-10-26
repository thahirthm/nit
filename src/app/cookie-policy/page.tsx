import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { cookiePolicyTitle, cookiePolicySections } from "@/data/cookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Nesma Infrastructure & Technology website uses cookies and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={cookiePolicyTitle} sections={cookiePolicySections} />
    </main>
  );
}
