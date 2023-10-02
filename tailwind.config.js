/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
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
			screens: {
				category: '500px',
				'header-smaller-tablet': '741px',
				lg: '1000px',
				xl: '1200px',
			},
			backgroundImage: {
				'search-in-header': "url('./assets/images/search.webp')",
			},
			backgroundSize: {
				'search-in-header': '18px',
			},
			backgroundPosition: {
				'search-in-header': '12px center',
			},
		},
	},
	plugins: [],
}
