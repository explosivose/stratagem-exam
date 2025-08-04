// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
  site: "https://explosivose.github.io",
  base: "stratagem-exam",
});
