import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import './styles.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Theme, defineTheme} from '@astryxdesign/core/theme';
import {ToastViewport} from '@astryxdesign/core/Toast';
import {themes, defaultThemeSlug} from './astryx-themes.js';
import {App} from './App';

// Stone + slate-blue accent + Manrope / Inter.
// typography replaces the base config wholesale, so Stone's scale, code font and heading weights are restated.
const sans = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const portfolioTheme = defineTheme({
  name: 'portfolio',
  extends: themes[defaultThemeSlug],
  typography: {
    scale: {base: 14, ratio: 1.25},
    body: {family: 'Inter', fallbacks: sans},
    heading: {family: 'Manrope', fallbacks: `"Inter", ${sans}`, weights: {3: 'bold', 4: 'bold'}},
    code: {family: 'JetBrains Mono', fallbacks: '"SF Mono", Monaco, Consolas, monospace'},
  },
  tokens: {
    '--color-accent': ['#3B5B8C', '#8AAEE0'],
    '--color-accent-muted': ['#3B5B8C24', '#8AAEE033'],
    '--color-text-accent': ['#3B5B8C', '#8AAEE0'],
    '--color-icon-accent': ['#3B5B8C', '#8AAEE0'],
    '--color-on-accent': ['#FFFFFF', '#14171C'],
    // Light-only, blue-tinted whites.
    '--color-background-body': '#EDF2F9',
    '--color-background-surface': '#EDF2F9',
    '--color-background-card': '#FFFFFF',
    '--color-background-muted': '#E3EAF5',
    '--color-border': '#CFD9E8',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={portfolioTheme} mode="light">
      <ToastViewport position="bottomEnd">
        <App />
      </ToastViewport>
    </Theme>
  </StrictMode>,
);
