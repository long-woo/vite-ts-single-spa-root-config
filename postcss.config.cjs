const path = require('node:path');

/* eslint-env node */
module.exports = {
	plugins: {
		tailwindcss: {
			config: path.join(__dirname, 'tailwind.config.cjs')
		},
		autoprefixer: {}
	}
};
