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
        output: {
          format: 'systemjs',
          entryFileNames: 'root-config.js',
          assetFileNames: 'assets/[name].[ext]',
          globals: {
            'single-spa': 'SingleSpa',
          }
        },
        preserveEntrySignatures: 'strict',
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
