import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-electric-green',
    'text-electric-blue',
    'text-accent-cyan',
    'text-accent-purple',
    'text-neon-green',
    'text-accent-magenta',
    'border-electric-green/30',
    'border-electric-blue/30',
    'border-accent-cyan/30',
    'border-accent-purple/30',
    'border-neon-green/30',
    'border-accent-magenta/30',
    'hover:border-electric-green/60',
    'hover:border-electric-blue/60',
    'hover:border-accent-cyan/60',
    'hover:border-accent-purple/60',
    'hover:border-neon-green/60',
    'hover:border-accent-magenta/60',
  ],
  theme: {
    extend: {
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
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      fontFamily: {
        'display': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;