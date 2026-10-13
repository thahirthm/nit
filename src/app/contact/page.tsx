import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/contact/ContactMap";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no outer reveal, it's the immediate above-the-fold content (has its own on-mount cascade) */}
      <ContactHero />

      <Reveal>
        <ContactMap />
      </Reveal>
    </main>
  );
}
