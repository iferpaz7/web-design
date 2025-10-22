/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				'itsae': {
					'primary': '#003366',
					'primary-light': '#004080',
					'primary-dark': '#002244',
					'secondary': '#0066cc',
					'accent': '#ff6b35',
					'success': '#10b981',
					'warning': '#f59e0b',
					'error': '#ef4444'
				},
				'primary': {
					50: '#f0f7ff',
					100: '#e0efff',
					200: '#b8ddff',
					300: '#7cc4ff',
					400: '#36a7ff',
					500: '#0891ff',
					600: '#0066cc',
					700: '#004080',
					800: '#003366',
					900: '#002244',
					950: '#001122'
				}
			}
		},
	},
	plugins: [],
}