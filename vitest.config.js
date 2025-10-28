import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  pluging: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/test/setup.js",
    css: true,
    cache: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{js,jsx}"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.test.{js,jsx}",
        "**/*.spec.{js,jsx}",
        "src/main.jsx",
        "src/router/",
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@components": resolve("./src/components"),
      "@pages": resolve("./src/pages"),
      "@hooks": resolve("./src/hooks"),
      "@utils": resolve("./src/utils"),
      "@data": resolve("./src/data"),
      "@router": resolve("./src/router"),
      "@styles": resolve("./src/styles"),
    },
  },
});
