import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactMap />
    </main>
  );
}
