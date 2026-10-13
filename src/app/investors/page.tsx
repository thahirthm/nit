import { InvestorsHero } from "@/components/investors/InvestorsHero";
import { InvestorsStats } from "@/components/investors/InvestorsStats";
import { InvestorsDocuments } from "@/components/investors/InvestorsDocuments";
import { InvestorsKeyMetrics } from "@/components/investors/InvestorsKeyMetrics";
import { InvestorsNewsletter } from "@/components/investors/InvestorsNewsletter";
import { Reveal } from "@/components/ui/Reveal";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <InvestorsHero />

      <Reveal>
        <InvestorsStats />
      </Reveal>

      <Reveal>
        <InvestorsDocuments />
      </Reveal>

      <Reveal>
        <InvestorsKeyMetrics />
      </Reveal>

      <Reveal>
        <InvestorsNewsletter />
      </Reveal>
    </main>
  );
}
