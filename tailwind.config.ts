import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pri': '#0F172A',
        'sec': '#06B6D4',
      },
      animation: {
        'slideIn': 'slideIn 0.5s ease-in-out 1',
        'slideOut': 'slideOut 0.5s ease-in-out 1s 1',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        slideOut: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 100%)' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
