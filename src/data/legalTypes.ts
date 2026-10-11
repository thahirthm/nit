export type Localized = { en: string; ar: string };
export type LegalBlock = { type: "p"; en: string; ar: string } | { type: "ul"; en: string[]; ar: string[] };

export type LegalSection = {
  id: string;
  heading: Localized;
  blocks: LegalBlock[];
};
