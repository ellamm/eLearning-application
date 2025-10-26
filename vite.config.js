import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
    },
  },
  build: {
    target: "es2015", // Better browser support, smaller bundle
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split React into separate chunk
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "react-vendor";
          }
          // Split React Router into separate chunk
          if (id.includes("node_modules/react-router-dom")) {
            return "router-vendor";
          }
          // Split Lucide icons into separate chunk
          if (id.includes("node_modules/lucide-react")) {
            return "lucide-vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
