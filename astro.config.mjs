import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://halmetojamodel.com",
  integrations: [sitemap()],
});
