import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-minimal-starter.netlify.app/",
  integrations: [sitemap(), icon(), tailwind()],
});
