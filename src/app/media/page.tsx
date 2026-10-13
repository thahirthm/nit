import { MediaHero } from "@/components/media/MediaHero";
import { MediaNews } from "@/components/media/MediaNews";
import { MediaAwards } from "@/components/media/MediaAwards";
import { Reveal } from "@/components/ui/Reveal";

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — no reveal, it's the immediate above-the-fold content */}
      <MediaHero />

      <Reveal>
        <MediaNews />
      </Reveal>

      <Reveal>
        <MediaAwards />
      </Reveal>
    </main>
  );
}
