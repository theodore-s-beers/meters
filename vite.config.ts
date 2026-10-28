import staticAdapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: staticAdapter(),
      preprocess: vitePreprocess(),
    }),
    tailwindcss(),
  ],
});
