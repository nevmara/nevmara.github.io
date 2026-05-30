const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
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
          secondary: 'var(--md-sys-color-secondary)',
          onSecondary: 'var(--md-sys-color-on-secondary)',
          secondaryContainer: 'var(--md-sys-color-secondary-container)',
          onSecondaryContainer: 'var(--md-sys-color-on-secondary-container)',
          tertiary: 'var(--md-sys-color-tertiary)',
          onTertiary: 'var(--md-sys-color-on-tertiary)',
          tertiaryContainer: 'var(--md-sys-color-tertiary-container)',
          onTertiaryContainer: 'var(--md-sys-color-on-tertiary-container)',
          surface: 'var(--md-sys-color-surface)',
          onSurface: 'var(--md-sys-color-on-surface)',
          surfaceVariant: 'var(--md-sys-color-surface-variant)',
          onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
          surfaceContainerLowest: 'var(--md-sys-color-surface-container-lowest)',
          surfaceContainerLow: 'var(--md-sys-color-surface-container-low)',
          surfaceContainer: 'var(--md-sys-color-surface-container)',
          surfaceContainerHigh: 'var(--md-sys-color-surface-container-high)',
          surfaceContainerHighest: 'var(--md-sys-color-surface-container-highest)',
          inverseSurface: 'var(--md-sys-color-inverse-surface)',
          inverseOnSurface: 'var(--md-sys-color-inverse-on-surface)',
          inversePrimary: 'var(--md-sys-color-inverse-primary)',
          outline: 'var(--md-sys-color-outline)',
          outlineVariant: 'var(--md-sys-color-outline-variant)',
        },
      },
      borderRadius: {
        'md-card': '32px',
        'md-modal': '36px',
      },
      animation: {
        'spring-up': 'springUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        springUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [typography],
};