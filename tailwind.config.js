module.exports = {
	purge: {
		content: ["./public/**/*.html", "./src/**/*.vue"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				razer: {
					"50": "#10eff10d",
					"100": "#f0fff1",
					"200": "#b3ffba",
					"300": "#7aff88",
					"400": "#3dff51",
					"500": "#00ff1a",
					"600": "#00cc14",
					"700": "#00990f",
					"800": "#00660a",
					"900": "#003305",
				},
			},
			boxShadow: {
				big: " 0px 0px 30px 5px #00FF19",
				small: "0px 0px 10px 3px #00FF19",
			},
		},
	},
	variants: {
		animation: ["responsive", "motion-safe", "motion-reduce"],
		extend: {},
	},
	plugins: [],
};
