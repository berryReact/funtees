/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#E5E7EB',
					200: '#C8CBD0',
					300: '#aaa',
					900: '#333',
				},
				secondary: {
					100: '#EDD9CC',
					200: '#DBB4A0',
					300: '#CBA490',
					900: '#1B1410',
				},
			},
		},
	},
	plugins: [],
};
