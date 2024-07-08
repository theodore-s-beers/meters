/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			gentium: ['"Gentium Plus"', 'serif'],
			markazi: ['"Markazi Text"', 'serif'],
			noto: ['"Noto Serif"', 'serif']
		}
	},
	plugins: []
};
