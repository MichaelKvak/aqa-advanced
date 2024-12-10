import js from '@eslint/js';

export default [
	js.configs.recommended,

	{
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { console: 'readonly' },
		},
		env: {
			node: true,
			browser: true,
		},
	},
	{
		ignores: ['node_modules/**', 'dist/**'],
	},
];
