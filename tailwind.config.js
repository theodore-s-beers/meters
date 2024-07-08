/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			gentium: ['"Gentium Plus"', 'serif'],
			noto: ['"Noto Serif"', 'serif'],
			scheherazade: ['"Markazi Text"', 'serif']
		}
	},
	plugins: []
};
