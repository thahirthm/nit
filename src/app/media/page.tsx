import { MediaHero } from "@/components/media/MediaHero";
import { MediaNews } from "@/components/media/MediaNews";
import { MediaAwards } from "@/components/media/MediaAwards";

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <MediaHero />
      <MediaNews />
      <MediaAwards />
    </main>
  );
}
