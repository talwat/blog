import type { UserConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
};

export default config;
