import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [

    {
      pattern: /bg-(red|green|blue|orange)-(100|150|200)/,
    },
    {
      pattern: /fill-(red|green|blue|orange)-(100|150|200)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#334155',
        'secondary': "#64748B",
        blue: {
          50: "#E4FAFF",
          150: "#8082FF",
        },
        orange: {
          150: "#F4A76F",
        },
        green: {
          150: "#57D2A9",
        },
        pink: {
          150: "#D4009B",

        },

        gray: {
          50: "#F3F4F4",
          150: "#E9ECEF",
        },

      }
    
    },
  },
  plugins: [],
}
export default config
