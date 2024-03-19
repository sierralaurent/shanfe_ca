import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Josefin Sans', 'Sans-Serif']
      },
      colors: {
        'Eggshell':'#f1f1de',
        'Sky': '#abc8e7',
        'Chocolate': '#402020'
      },
    },
    screens: {

      'mobile': {'max': '767px'},
      // => @media (min-width: 350px and max-width: 767px) { ... }

      'tablet': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  
  plugins: [],
}

export default config
