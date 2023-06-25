import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  resolve: {
    alias: {
      $store: path.resolve(__dirname, "./src/store"),
      $apps: path.resolve(__dirname, "./src/apps"),
      $components: path.resolve(__dirname, "./src/components"),
      $lib: path.resolve(__dirname, "./src/lib"),
    },
  },
});
