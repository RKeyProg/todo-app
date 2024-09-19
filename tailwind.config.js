/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				rosario: ['Rosario', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				black: '#000000',
				red: {
					DEFAULT: '#FF4F5A',
				},
			},
		},
	},
	plugins: [],
}
