import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {}
	},
	plugins: [
		typography(),
	]
} satisfies Config;
