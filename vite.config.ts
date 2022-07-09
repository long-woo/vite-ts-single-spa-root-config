import { defineConfig, loadEnv, UserConfigExport } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	const config: UserConfigExport = {
		base: './',
		server: {
			port: 9000
		},
		build: {
			rollupOptions: {
				input: {
					index: './index.html',
					'root-config': './src/main.ts'
				},
				output: {
					format: 'system',
					entryFileNames: '[name].js',
					assetFileNames: 'assets/[name][ext]',
					globals: {
						'single-spa': 'SingleSpa'
					}
				},
				preserveEntrySignatures: 'strict',
				external: ['single-spa']
			}
		},
		plugins: [
			handlebars({
				context: {
					isLocal: mode === 'development'
				}
			})
			// {
			// 	name: 'vite-plugin-systemjs-module',
			// 	enforce: 'pre',
			// 	apply: 'build',
			// 	transformIndexHtml: (html, ctx) => {
			// 		console.log(/type="systemjs-module"/.test(html));
			// 		return html;
			// 	}
			// }
		]
	};

	if (mode === 'docs') {
		config.build.outDir = env.VITE_OUTDIR;
	}

	return config;
});
