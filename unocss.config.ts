import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'

export default {
  // presets
  uno: true, // enabled `@unocss/preset-uno`
  icons: true, // enabled `@unocss/preset-icons`
  attributify: true, // enabled `@unocss/preset-attributify`,
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetWind(),
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
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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

    width: {
      prose: '80ch',
    },
  },
}
