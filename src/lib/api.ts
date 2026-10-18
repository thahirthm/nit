import type { Language } from "@/context/LanguageContext";

// Backend: NIT admin API (Django). See NIT_API_Integration_Guide.pdf.
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://nit-admin.zakhf.com/api";

/* ---------------------------------- Types --------------------------------- */

export type Category = { id: number; name: string; slug: string };

export type BlogItem = {
  id: number;
  slug: string;
  title: string;
  category: Category;
  location: string;
  date: string;
  formatted_date: string;
  image: string | null;
  short_description: string;
};

export type BlogPage = {
  count: number;
  total_pages: number;
  current_page: number;
  next_page: number | null;
  previous_page: number | null;
  results: BlogItem[];
};

export type BlogDetail = BlogItem & {
  content: string;
  meta_title: string;
  meta_description: string;
  updated_at: string;
  related: BlogItem[];
};

export type CareerOptions = { education: { value: string; label: string }[] };

export type FormResult = {
  ok: boolean;
  message: string;
  errors: Record<string, string[]>;
};

/* ---------------------------------- GETs ---------------------------------- */

export function withLang(path: string, lang: Language) {
  return `${path}${path.includes("?") ? "&" : "?"}lang=${lang}`;
}

/**
 * Fetches a GET endpoint. Returns null on 404 and throws on other failures.
 * On the server the response is cached for 60s (the API refreshes its own cache on admin saves).
 */
export async function getJSON<T>(path: string, lang: Language = "en", revalidate = 60): Promise<T | null> {
  const res = await fetch(`${API_URL}${withLang(path, lang)}`, { next: { revalidate } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`API ${res.status} for ${path}`);
  return res.json();
}

/** Server-side variant that never throws, so a backend outage degrades a section instead of crashing the page. */
export async function getJSONSafe<T>(path: string, lang: Language = "en"): Promise<T | null> {
  try {
    return await getJSON<T>(path, lang);
  } catch (error) {
    console.error(error);
    return null;
  }
}

/** A server-fetched (English) response handed to a client component's `useApiData`. */
export type Seed<T> = { path: string; data: T | null };

/** Posts per tab in the news sliders. Shared so the server-fetched seed matches the client's request. */
export const NEWS_PAGE_SIZE = { home: 5, media: 50 } as const;

export const blogsPath = (category: string | undefined, pageSize: number) =>
  `/blogs/?category=${category ?? "all"}&page_size=${pageSize}`;

/** Category tabs plus the first tab's posts, for the news sliders on the home and media pages. */
export async function getNewsSectionData(pageSize: number) {
  const categoriesPath = "/blog-categories/";
  const categories = await getJSONSafe<Category[]>(categoriesPath);
  const postsPath = blogsPath(categories?.[0]?.slug, pageSize);
  const posts = await getJSONSafe<BlogPage>(postsPath);
  return {
    categories: { path: categoriesPath, data: categories } satisfies Seed<Category[]>,
    posts: { path: postsPath, data: posts } satisfies Seed<BlogPage>,
  };
}

/* ---------------------------------- POSTs --------------------------------- */

const FALLBACK_MESSAGES = {
  throttled: {
    en: "Too many submissions. Please try again later.",
    ar: "تم إرسال عدد كبير من الطلبات. يرجى المحاولة لاحقًا.",
  },
  network: {
    en: "Something went wrong. Please try again later.",
    ar: "حدث خطأ ما. يرجى المحاولة لاحقًا.",
  },
};

async function postForm(path: string, body: BodyInit, lang: Language, headers?: HeadersInit): Promise<FormResult> {
  try {
    const res = await fetch(`${API_URL}${withLang(path, lang)}`, { method: "POST", headers, body, cache: "no-store" });
    if (res.status === 429) {
      return { ok: false, message: FALLBACK_MESSAGES.throttled[lang], errors: {} };
    }
    const json = await res.json().catch(() => null);
    return {
      ok: res.ok && json?.status === "success",
      message: json?.message ?? FALLBACK_MESSAGES.network[lang],
      errors: json?.errors ?? {},
    };
  } catch {
    return { ok: false, message: FALLBACK_MESSAGES.network[lang], errors: {} };
  }
}

/** Footer ("footer") and contact page ("contact") forms. Always sends the empty `website` honeypot. */
export function submitEnquiry(source: "footer" | "contact", values: Record<string, string>, lang: Language) {
  return postForm(
    "/enquiry/",
    JSON.stringify({ ...values, source, website: values.website ?? "" }),
    lang,
    { "Content-Type": "application/json" }
  );
}

/** Careers form. Sent as multipart (includes the CV); the browser sets the Content-Type boundary. */
export function submitApplication(data: FormData, lang: Language) {
  return postForm("/career-application/", data, lang);
}
