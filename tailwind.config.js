module.exports = {
	mode: "jit", // Just-In-Time Compiler
	purge: ["./src/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// blue: "#007BFF"
			},
			fontFamily: {
				// poppins: ["Poppins", "sans-serif"]
			},
			transitionProperty: {
				// height: "height"
			},
			backgroundImage: {
				// circle: "url('../img/circle.png')"
			}
		}
	},
	variants: {
		extend: {
			// display: ["group-hover"]
		}
	},
	plugins: []
};
