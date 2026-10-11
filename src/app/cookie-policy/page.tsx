import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { cookiePolicyTitle, cookiePolicySections } from "@/data/cookiePolicy";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <LegalPageContent title={cookiePolicyTitle} sections={cookiePolicySections} />
    </main>
  );
}
