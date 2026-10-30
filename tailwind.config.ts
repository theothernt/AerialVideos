import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

// Loaded via `@config '../tailwind.config.ts'` in src/app.css (Tailwind v4 CSS-first setup).
// Source files are auto-detected by Tailwind v4, so `content` is only kept as an explicit hint.
// `darkMode` is intentionally left at the default (`prefers-color-scheme`) because Skeleton's
// legacy theme drives dark styling through the `dark` variant and the app never sets a `.dark` class.
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [typography()]
} satisfies Config;
