"use client";

import { useEffect, useState } from "react";
import { API_URL, withLang } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

type Cache = Record<string, unknown>;

/**
 * Loads a GET endpoint in the active site language. The language lives client-side
 * (localStorage), so pages are server-rendered in English and pass that response in
 * as `initialData`; this hook reuses it for English and refetches for Arabic.
 *
 * While a new path/language loads, the previous response is kept on screen so the
 * layout doesn't collapse. `data` is null when the endpoint returns 404 or fails.
 */
export function useApiData<T>(path: string | null, initialData?: { path: string; data: T | null }) {
  const { language } = useLanguage();
  const key = path ? withLang(path, language) : null;

  const [state, setState] = useState<{ cache: Cache; lastKey: string | null }>(() => {
    if (!initialData) return { cache: {}, lastKey: null };
    const seedKey = withLang(initialData.path, "en");
    return { cache: { [seedKey]: initialData.data }, lastKey: seedKey };
  });

  const loaded = key !== null && key in state.cache;

  useEffect(() => {
    if (!key || loaded) return;
    let cancelled = false;
    fetch(`${API_URL}${key}`)
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null)
      .then((data) => {
        if (!cancelled) setState((s) => ({ cache: { ...s.cache, [key]: data }, lastKey: key }));
      });
    return () => {
      cancelled = true;
    };
  }, [key, loaded]);

  const data = (loaded ? state.cache[key] : state.lastKey ? state.cache[state.lastKey] : undefined) as T | null | undefined;
  return { data, loading: !loaded && key !== null };
}
