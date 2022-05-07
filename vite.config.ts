import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
  return {
    base: './',
    server: {
      port: 9000,
    },
    build: {
      rollupOptions: {
        output: {
          format: 'systemjs',
          entryFileNames: 'root-config.js',
          globals: {
            'single-spa': 'SingleSpa',
          }
        },
        external: ["single-spa"],
      },
    },
    plugins: [
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        externalSystemJS: true,
        renderLegacyChunks: false
      }),
      handlebars({
        context: {
          isLocal: mode === "development"
        }
      })
    ],
  };
});
