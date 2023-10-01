/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		extend: {
			fontFamily: {
				metropolis: ['Metropolis', 'sans-serif'],
			},
			colors: {
				announcement: '#eef4f7',
				'boat-red': '#d83333',
				'bottom-nav-black': '#1a2024',
				'button-blue': '#2f5b96',
				'card-yellow': '#fcc50b',
				'card-span-border': '#d0d9de',
				'card-sub': '#fafafa',
				'card-sub-border': '#ecf0f4',
				'og-price': '#b2b9bf',
				discount: '#12b985',
				cart: '#1a2024',
			},
			lineHeight: {
				none: '1',
			},
		},
	},
	plugins: [],
}
