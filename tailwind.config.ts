import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New ocean-themed palette
        ocean: {
          deep: '#0a1628',
          dark: '#0f2744',
          mid: '#1a4971',
          light: '#2e86ab',
          bright: '#61b3de',
        },
        sunset: {
          dark: '#c44536',
          DEFAULT: '#e94560',
          light: '#ff6b6b',
        },
        gold: {
          DEFAULT: '#f4a127',
          light: '#ffc857',
        },
        // Keep existing colors for compatibility
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#f0f5fa',
          100: '#dce8f3',
          200: '#c0d5e9',
          300: '#96bad9',
          400: '#6596c4',
          500: '#4578af',
          600: '#385f94',
          700: '#1e3a5f',
          800: '#2c4a6e',
          900: '#29405c',
          950: '#1c2a3d',
        },
        secondary: {
          DEFAULT: '#2d8c9e',
          50: '#f0fafb',
          100: '#d9f2f5',
          200: '#b8e5eb',
          300: '#87d1dc',
          400: '#4fb4c5',
          500: '#2d8c9e',
          600: '#297b8c',
          700: '#276573',
          800: '#275460',
          900: '#244751',
          950: '#132d36',
        },
        accent: {
          DEFAULT: '#f4a127',
          50: '#fefaec',
          100: '#fcf1ca',
          200: '#f9e290',
          300: '#f5cd56',
          400: '#f4a127',
          500: '#ed9115',
          600: '#d26d0f',
          700: '#ae4d10',
          800: '#8e3c14',
          900: '#753214',
          950: '#431806',
        },
        dark: '#0f1c2e',
        light: '#f8f9fa',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        wave: 'wave 20s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
