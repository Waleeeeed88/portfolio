import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.5' }],
        sm: ['1rem', { lineHeight: '1.6' }],
        base: ['1.125rem', { lineHeight: '1.75' }],
        lg: ['1.25rem', { lineHeight: '1.75' }],
        xl: ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '2' }],
        '3xl': ['2.25rem', { lineHeight: '2.25' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
        '5xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'primary-text': '#e5e5e5',
        'secondary-text': '#a3a3a3',
        'accent-cyan': '#00e5ff',
        'accent-blue': '#0066ff',
        'electric-blue': '#00d9ff',
        'neon-blue': '#00ffff',
        'electric-green': '#00ff41',
        'neon-green': '#39ff14',
        'lime-glow': '#ccff00',
        'accent-magenta': '#f000ff',
        'accent-purple': '#7000ff',
        'border-color': '#262626',
      },
    },
  },
  plugins: [],
};

export default config;