import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: path.resolve('./src/components'),
			$lib: path.resolve('./src/lib')
		}
	}
};

export default config;
