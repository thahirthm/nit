import { InvestorsHero } from "@/components/investors/InvestorsHero";
import { InvestorsStats } from "@/components/investors/InvestorsStats";
import { InvestorsDocuments } from "@/components/investors/InvestorsDocuments";
import { InvestorsKeyMetrics } from "@/components/investors/InvestorsKeyMetrics";
import { InvestorsNewsletter } from "@/components/investors/InvestorsNewsletter";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      <InvestorsHero />
      <InvestorsStats />
      <InvestorsDocuments />
      <InvestorsKeyMetrics />
      <InvestorsNewsletter />
    </main>
  );
}
