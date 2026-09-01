// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://karstenuhlig.de",
  integrations: [
    sitemap({
      // Geprüfte veröffentlichte Seiten, Stand 31.08.2026.
      // Neue Seiten erst nach Inhaltsprüfung ergänzen; Stubs bleiben ausgeschlossen.
      // Collection-Entwürfe (draft: true) erzeugen bereits keine Detailroute.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return [
          "/",
          "/ueber-mich",
          "/track-record",
          "/track-record/deep-dive",
          "/commercial-management",
          "/data-ai-digital-product",
          "/leadership",
          "/schwerpunkte",
          "/commercial-growth/ergebnisabweichungen-zerlegen",
          "/commercial-growth/wachstum-neu-begruenden",
          "/commercial-growth/kundenbasis-ueber-economics",
          "/commercial-growth/angebot-und-customer-journey",
          "/commercial-growth/ueber-maerkte-skalieren",
          "/commercial-growth/attribution-von-wirkung-trennen",
          "/commercial-growth/verantwortung-ordnen",
          "/commercial-growth/reale-knappheit-priorisieren",
          "/e-commerce-marketing",
          "/e-commerce-marketing/conversion-insights",
          "/e-commerce-marketing/organisatorische-schwerkraft",
          "/martech",
          "/martech/marketing-und-it-verschmelzen",
          "/martech/operating-model-schlaegt-stack",
          "/agentic-ai",
          "/agentic-ai/awareness-war-nie-der-engpass",
          "/agentic-ai/sem-agentic",
          "/agentic-ai/signal-steering",
          "/impressum",
          "/datenschutz",
        ].includes(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
