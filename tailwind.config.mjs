/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  corePlugins: {
    // Design system base lives in src/styles/global.css; skip Tailwind's reset.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        brand: 'var(--brand)',
        'brand-2': 'var(--brand-2)',
        accent: 'var(--accent)',
        'accent-cta': 'var(--accent-cta)',
        bg: 'var(--bg)',
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
      },
      fontFamily: {
        serif: ['Rokkitt', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Urbanist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        wrap: 'var(--maxw)',
      },
    },
  },
  plugins: [],
};
