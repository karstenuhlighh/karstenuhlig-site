// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://karstenuhlig.de",
  integrations: [
    sitemap({
      // Whitelist: nur fertige Pages in Sitemap.
      // Sub-Page-Stubs (/e-commerce-marketing, /martech, /agentic-ai*)
      // bewusst raus, bis dort echter Inhalt steht.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return ["/", "/ueber-mich", "/impressum", "/datenschutz"].includes(
          path,
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
