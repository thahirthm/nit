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
  // CMS SEO fields first; fall back to the article's own title/summary if they're left empty
  return post
    ? { title: post.meta_title || post.title, description: post.meta_description || post.short_description }
    : { title: "Article not found" };
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
