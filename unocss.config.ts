import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno({}),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {
    'nav-icon-btn': 'border border-0 rounded-md p-2 text-lg leading-4 bg-gray-50 dark:bg-gray-900',
    'card-container': 'm-auto text-left mb-3',
    'card-title': 'mt-2 text-left text-2xl text-special',
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  theme: {
    fontFamily: {
      sans: 'LXGW WenKai Screen R',
      serif: 'LXGW WenKai Screen R',
    },

    colors: {
      green: {
        50: '#e6fff1',
        100: '#a3ffce',
        200: '#7affbd',
        300: '#4ff7a9',
        400: '#26eb95',
        500: '#00dd83',
        600: '#00b874',
        700: '#009161',
        800: '#006b4b',
        900: '#004532',
      },
    },

    maxWidth: {
      prose: '80ch',
    },
  },
})
