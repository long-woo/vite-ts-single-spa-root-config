import { defineConfig } from "vite";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
  return {
    base: './',
    server: {
      port: 9000,
    },
    build: {
      rollupOptions: {
        preserveEntrySignatures: 'strict',
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
      handlebars({
        context: {
          isLocal: mode === "development"
        }
      })
    ],
  };
});
