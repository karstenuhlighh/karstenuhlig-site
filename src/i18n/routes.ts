export type Language = "de" | "en";

export interface RoutePair {
  de: string;
  en: string;
}

export const coreRoutePairs: RoutePair[] = [
  { de: "/", en: "/en/" },
  { de: "/commercial-management", en: "/en/commercial-management" },
  { de: "/data-ai-digital-product", en: "/en/data-ai-digital-product" },
  { de: "/digital-product-customer-experience", en: "/en/digital-product-customer-experience" },
  { de: "/leadership", en: "/en/leadership" },
  { de: "/track-record", en: "/en/track-record" },
  { de: "/performance-marketing-steering", en: "/en/performance-marketing-steering" },
  { de: "/transformation/product-organisation", en: "/en/transformation/product-organisation" },
  { de: "/agentic-ai", en: "/en/agentic-ai" },
  {
    de: "/agentic-ai/awareness-war-nie-der-engpass",
    en: "/en/agentic-ai/awareness-was-never-the-bottleneck",
  },
  { de: "/agentic-ai/sem-agentic", en: "/en/agentic-ai/sem-agentic" },
  { de: "/agentic-ai/signal-steering", en: "/en/agentic-ai/signal-steering" },
  {
    de: "/agentic-ai/ai-engineering-praxis",
    en: "/en/agentic-ai/how-i-work-with-ai",
  },
];

export function normalisePath(pathname: string): string {
  if (pathname === "/" || pathname === "/en/") return pathname;
  return pathname.replace(/\/$/, "");
}

export function getLanguage(pathname: string): Language {
  const path = normalisePath(pathname);
  return path === "/en/" || path.startsWith("/en/") ? "en" : "de";
}

export function getRoutePair(pathname: string): RoutePair | undefined {
  const path = normalisePath(pathname);
  return coreRoutePairs.find((pair) => pair.de === path || pair.en === path);
}

export function getLanguageSwitchPath(pathname: string, target: Language): string {
  const pair = getRoutePair(pathname);
  if (pair) return pair[target];
  return target === "de" ? "/" : "/en/";
}
