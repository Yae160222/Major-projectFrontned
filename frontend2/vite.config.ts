import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// 🚫 Don't import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(), // ✅ already includes the React plugin
    tsconfigPaths(),
    // 🚫 react() removed
  ],
  ssr: {
    noExternal: ["react-syntax-highlighter", "remark-gfm", "react-markdown"],
  },
});
