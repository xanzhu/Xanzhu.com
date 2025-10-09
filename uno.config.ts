// uno.config.ts
import type { TypographyTheme } from '@unocss/preset-typography'
import type { Theme as Wind3Theme } from '@unocss/preset-wind3'
import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig<Wind3Theme & TypographyTheme>({
  presets: [
    presetWind3({
      dark: 'class',
    }),
    presetTypography({
      cssExtend: {
        '.prose h1': {
          visibility: 'hidden',
        },
        '.prose h2': {
          'font-size': '1.75rem',
          'line-height': '1.3',
          'font-weight': '600',
          'margin-top': '2rem',
          'margin-bottom': '1rem',
        },
        '.prose h3': {
          'font-size': '1.5rem',
          'line-height': '1.4',
          'font-weight': '600',
          'margin-top': '1.75rem',
          'margin-bottom': '0.75rem',
        },
        '.prose h4': {
          'font-size': '1.25rem',
          'line-height': '1.5',
          'font-weight': '500',
          'margin-top': '1.5rem',
          'margin-bottom': '0.5rem',
        },
        '.prose h5': {
          'font-size': '1.125rem',
          'line-height': '1.5',
          'font-weight': '500',
        },
        '.prose h6': {
          'font-size': '1rem',
          'line-height': '1.5',
          'font-weight': '500',
        },
        '.prose h2 > a, .prose h3 > a, .prose h4 > a, .prose h5 > a, .prose h6 > a': {
          'pointer-events': 'none',
          'text-decoration': 'none',
        },

        // Paragraphs
        '.prose p': {
          'font-size': '1rem',
          'line-height': '1.75',
          'margin-bottom': '1.25rem',
        },

        // Lists
        '.prose ul': {
          'list-style-type': 'disc',
          'margin-bottom': '1.25rem',
          'padding-left': '1.5rem',
        },
        '.prose ol': {
          'list-style-type': 'decimal',
          'margin-bottom': '1.25rem',
          'padding-left': '1.5rem',
        },
        '.prose ol li::marker': {
          'font-weight': 'bold',
        },

        '.prose li': {
          'margin-bottom': '0.5rem',
        },

        // Code and Pre
        '.prose pre, .prose code': {
          '--uno':
            'core-theme core-border font-mono',
          'font-size': '0.875rem',
        },
        '.prose pre': {
          'padding': '1rem',
          'margin-bottom': '1.5rem',
          'overflow-x': 'auto',
        },
        '.prose pre > code': {
          border: 'none',
        },

        // Youtube iframe | <Vid>
        '.ifr iframe': {
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': '100%',
          'border-radius': '0.375rem',
        },
        '.ifr': {
          'position': 'relative',
          'width': '100%',
          'padding-bottom': '56.25%',
          'height': '0',
          'margin': '1.5rem 0',
        },

        // Figure styling
        '.prose figure figcaption': {
          'font-size': '0.75rem',
          'line-height': '1.5',
          'margin-top': '0.3rem',
          'text-align': 'left',
          '--uno': 'dark:text-light-900 text-gray-600 font-mono',
        },

        'figure': {
          margin: '0',
        },

        '.prose img': {
          margin: '0',
        },

        // Italics
        '.prose i': {
          'opacity': '0.9',
          'font-weight': '400',
        },

        // Tables
        '.prose table': {
          'width': '100%',
          'border-collapse': 'collapse',
          'margin': '1.5rem 0',
          'font-size': '0.875rem',
          '--uno': 'core-theme core-border min-w-5rem',
          'display': 'table',
        },
        '.prose th, .prose td': {
          'padding': '0.75rem',
          'text-align': 'left',
          'border': '1px solid',
          '--uno': 'core-border core-theme',
        },
        '.prose th': {
          'background-color': '#f1f1f1',
          'font-weight': '600',
          '--uno': 'dark:bg-dark-800',
        },
        '.prose tr:nth-child(even)': {
          'background-color': '#f9f9f9',
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: '#007BFF',
        light: '#0067d4',
      },
      element: {
        dark: '#050505',
        light: '#fffffffa',
      },
    },
    fontFamily: {
      sans: 'Noto Sans CJK KR, system-ui, sans-serif',
      mono: 'monospace',
    },
  },
  shortcuts: {
    'core-theme':
      'bg-element-light dark:(bg-element-dark text-white) text-black',
    'core-border': 'dark:b-dark4 b-gray-3 b-1 b-solid',
    'core-ui': 'dark:(bg-dark9 text-white) bg-gray-100 text-black',
  },
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|md|html)($|\?)/],
    },
  },
})
