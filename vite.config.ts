import { defineConfig, loadEnv, UserConfigExport } from "vite";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  
  const config: UserConfigExport = {
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
  }

  if (mode === 'docs') {
    config.build.outDir = env.VITE_OUTDIR
  }

  return config;
});
