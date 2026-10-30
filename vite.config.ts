import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: vitePreprocess(),
			// Nothing polls for new deployments: the site is static and ships no client runtime.
			version: { pollInterval: 0 },
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true
			})
		})
	]
});
