const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = [
	{
		files: ['**/*.{js,ts}'],
		extends: [js.configs.recommended, tseslint.configs.recommended, prettier],
		plugins: {
			'@typescript-eslint': tseslint,
		},
		parser,
		parserOptions: {
			sourceType: 'module',
			ecmaVersion: 2020,
		},
		env: {
			browser: true,
			es2017: true,
			node: true,
		},
	},
	{
		files: ['**/*.svelte'],
		processor: 'svelte3/svelte3',
		settings: {
			'svelte3/typescript': () => require('typescript'),
		},
	},
	{
		ignores: ['*.cjs'],
	},
];