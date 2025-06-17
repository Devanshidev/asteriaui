
// import { view } from "framer-motion";
// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     screens: {
//   		pn: '0px',
//   		vs: '200px',
//   		ss: '360px',
//   		pp: '500px',
//   		sm: '821px',
//   		md: '1180px',
//   		lg: '1440px',
//   		xl: '1536px'
//   	},
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//         openSans: ['Open Sans', 'sans-serif'],
//         poppins: ['Poppins', 'sans-serif'],
//         markazi: ['Markazi Text', 'serif'],
//         inter: ['Inter', 'sans-serif'], // Changed to sans-serif (Inter is a sans-serif font)
//         merriweather: ['Merriweather', 'serif'], // Added serif as the fallback
//         nunito: ['Nunito', 'sans-serif'], // Changed fallback to sans-serif (Nunito is a sans-serif font)
//       },
      
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },

//       backgroundImage: {
//         homepage: "url('/homepage.png')",
//         preview: "url('/preview.png')",
//         home: "url('/home.svg')",
//         landing : "url('/landing.png')",
//         land: "url('/land.png')",
//         view: "url('/view.svg')",
//         vieww: "url('/vieww.png')",
//       },
      
//     },
    
//   },
//   plugins: [],
// } satisfies Config;


import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      pn: "0px",
      vs: "200px",
      ss: "360px",
      pp: "500px",
      sm: "821px",
      md: "1180px",
      lg: "1440px",
      xl: "1536px",
    },
    extend: {
      /** ✅ Custom Fonts */
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
        inter: ["Inter", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },

      /** ✅ Custom Colors */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      /** ✅ Background Images */
      backgroundImage: {
        homepage: "url('/homepage.png')",
        preview: "url('/preview.png')",
        home: "url('/home.svg')",
        landing: "url('/landing.png')",
        land: "url('/land.png')",
        view: "url('/view.svg')",
        vieww: "url('/vieww.png')",
      },

      /** ✅ Aurora Animation */
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },

  /** ✅ Plugins */
  plugins: [addVariablesForColors],
} satisfies Config;

/** ✅ Plugin to Add Tailwind Colors as CSS Variables */
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
