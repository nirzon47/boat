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
			},
			lineHeight: {
				none: '1',
			},
		},
	},
	plugins: [],
}
