import { fileURLToPath } from "node:url";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [
    tanstackStart({ srcDirectory: "src" }),
    // Nitro gera a saída no formato da Vercel (.vercel/output) quando roda lá.
    nitro(),
    react(),
  ],
});
