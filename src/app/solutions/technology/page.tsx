import { SolutionDetailHero } from "@/components/solutions/SolutionDetailHero";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <SolutionDetailHero
        title="Technology"
        description="Enabling digital transformation through advanced technology solutions, secure networks, and managed services."
        image="/images/banner.png"
        capabilities={[
          "Digital Transformation",
          "Data & AI",
          "Cloud Services",
          "Cybersecurity",
          "Managed Services",
        ]}
      />
    </main>
  );
}
