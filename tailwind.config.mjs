/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'body': ['"Poppins"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	daisyui: {
		styled: true,
		themes: [
			'night',
			'winter',
		],
	},
}
