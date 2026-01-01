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

        // Inline Code
        '.prose :not(pre) > code': {
          '--uno': 'font-mono',
          'font-size': '0.875rem',
          'background-color': '#f1f5f9',
          'padding': '0.2rem 0.4rem',
          'border-radius': '6px',
          'color': '#111827',
        },

        // Code Block Container
        '.prose pre': {
          '--uno': 'font-mono',
          'padding': '1.25rem',
          'margin-bottom': '1.5rem',
          'overflow-x': 'auto',
          'background-color': '#f5f5f5',
          'border-radius': '8px',
          'line-height': '1.6',
        },

        '.prose pre > code': {
          'font-size': '0.875rem',
          'color': '#000000ff',
          'background-color': 'transparent',
          'border': 'none',
          'padding': '0',
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

        '.prose figure': {
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
          '--uno': 'min-w-5rem',
          'display': 'table',
          'color': '#000',
        },
        '.prose th, .prose td': {
          'padding': '0.75rem',
          'text-align': 'left',
          'border': '1px solid #c2c2c2ff',
        },
        '.prose th': {
          'background-color': '#f1f1f1',
          'font-weight': '600',
        },
        '.prose tr:nth-child(even)': {
          'background-color': '#f9f9f9',
        },
        '.prose tr:nth-child(odd)': {
          'background-color': '#fff',
        },

        // Dark Styling
        '.dark .prose tr:nth-child(even)': {
          'background-color': '#000000ff',
        },
        '.dark .prose tr:nth-child(odd)': {
          'background-color': '#181818ff',
        },
        '.dark .prose th': {
          'background-color': '#000000ff',
        },
        '.dark .prose th, .dark .prose td': {
          border: '1px solid #262626ff',
        },
        '.dark .prose table': {
          'background-color': '#101010ff',
          'color': '#fff',
        },
        '.dark .prose pre code': {
          color: '#fff',
        },
        '.dark .prose pre': {
          'border': 'none',
          'background-color': '#171717',
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
      mono: 'Google Sans Code, monospace',
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
