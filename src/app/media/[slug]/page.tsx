import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJSON, type BlogDetail } from "@/lib/api";
import { NewsArticle } from "@/components/media/NewsArticle";

// Posts are rendered on first visit and then cached (ISR), so new posts from the
// admin panel work without a rebuild.
export function generateStaticParams() {
  return [];
}

const blogPath = (slug: string) => `/blogs/${encodeURIComponent(slug)}/`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJSON<BlogDetail>(blogPath(slug));
  if (!post) return { title: "Article not found" };
  // CMS SEO fields first; fall back to the article's own title/summary if they're left empty
  const title = post.meta_title || post.title;
  const description = post.meta_description || post.short_description;
  // Open Graph / Twitter tags give shared links a preview card (image, title, summary) on LinkedIn and X.
  // post.image is an absolute admin-media URL, so it works without a metadataBase.
  const images = post.image ? [{ url: post.image, alt: post.title }] : undefined;
  return {
    title,
    description,
    openGraph: { type: "article", title, description, images, siteName: "Nesma Infrastructure & Technology" },
    twitter: { card: "summary_large_image", title, description, images: post.image ? [post.image] : undefined },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = blogPath(slug);
  const post = await getJSON<BlogDetail>(path);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <NewsArticle initialPost={{ path, data: post }} />
    </main>
  );
}
