/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: { 16: "repeat(16, minmax(0, 1fr))" },
			gridTemplateRows: { 84: "repeat(84, minmax(0, 1fr))" },
			gridRowStart: {
				12: "13",
				24: "25",
				36: "37",
				48: "49",
				60: "61",
				72: "73",
				84: "85",
				96: "97",
			},
			gridRowEnd: {
				12: "13",
				24: "25",
				36: "37",
				48: "49",
				60: "61",
				72: "73",
				84: "85",
				96: "97",
				108: "108",
			},
		},
	},
	plugins: [],
};
