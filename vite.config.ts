import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import legacy from "@vitejs/plugin-legacy";

// console.log(import.meta.env)
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 9000,
    },
    build: {
      rollupOptions: {
        input: "src/lyh-root-config.ts",
        output: {
          file: "dist/root-config.js",
          format: "system",
        },
        external: ["single-spa", "single-spa-layout"],
      },
    },
    plugins: [
      createHtmlPlugin({
        entry: "src/root-config.ts",
        template: "src/index.html",
        inject: {
          data: {
            isLocal: mode === "development",
          },
        },
      }),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        externalSystemJS: true,
      }),
    ],
  };
});
