import fs from 'fs';

import type { PluginOption } from 'vite';
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
						'single-spa': 'singleSpa',
						'single-spa-layout': 'singleSpaLayout'
					}
				},
				preserveEntrySignatures: 'strict',
				external: ['single-spa', 'single-spa-layout']
			}
		},
		plugins: [
			handlebars({
				context: {
					isLocal: mode === 'development'
				}
			}) as unknown as PluginOption,
			{
				name: 'vite-plugin-build-rm-file',
				apply: 'build',
				enforce: 'post',
				closeBundle() {
					fs.unlinkSync(`${env.VITE_OUTDIR}/index.js`);
				}
			}
		]
	};

	if (mode === 'docs') {
		config.build.outDir = env.VITE_OUTDIR;
	}

	return config;
});
