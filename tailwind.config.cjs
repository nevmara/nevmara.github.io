const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './404.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        md: {
          primary: 'var(--md-sys-color-primary)',
          onPrimary: 'var(--md-sys-color-on-primary)',
          primaryContainer: 'var(--md-sys-color-primary-container)',
          onPrimaryContainer: 'var(--md-sys-color-on-primary-container)',
          surface: 'var(--md-sys-color-surface)',
          onSurface: 'var(--md-sys-color-on-surface)',
          onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
          surfaceContainerLow: 'var(--md-sys-color-surface-container-low)',
          surfaceContainer: 'var(--md-sys-color-surface-container)',
          surfaceContainerHigh: 'var(--md-sys-color-surface-container-high)',
          surfaceContainerHighest: 'var(--md-sys-color-surface-container-highest)',
          inverseSurface: 'var(--md-sys-color-inverse-surface)',
          inverseOnSurface: 'var(--md-sys-color-inverse-on-surface)',
          outlineVariant: 'var(--md-sys-color-outline-variant)',
        },
      },
      borderRadius: {
        'md-card': '32px',
        'md-modal': '36px',
      },
    },
  },
  plugins: [typography],
};