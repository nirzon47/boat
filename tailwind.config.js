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
			},
			lineHeight: {
				none: '1',
			},
		},
	},
	plugins: [],
}
