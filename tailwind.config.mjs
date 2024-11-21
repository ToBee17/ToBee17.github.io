/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:
			 {Epilogue: ['Epilogue', 'sans-serif'],}
		},

		colors: {
			'primary': '#FFD700',
			'secondary': '#FFA500',
			'black': '#2D2D2D',
			'white': '#FFFFFF',
		}
	},
	plugins: [],
}
