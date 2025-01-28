/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Grand Hotel', 'cursive'],
			'body': ['Inter Variable', 'sans-serif']
		},
		extend: {
			colors: {
				moss: {
					DEFAULT: '#27291E'
				},
				sand: {
					DEFAULT: '#d8d7d0',
					'light': '#ecece8',
					'dark': '#bfbdb2'
				}
			}
		}
	},
	plugins: []
};
