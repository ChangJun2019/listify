import { createResolver } from '@nuxt/kit'
import unocssConfig from './unocss.config'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/typography',
  ],

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
    // https://github.com/Tahul/pinceau
    'pinceau/nuxt',
    '@vueuse/nuxt',
  ],

  css: [
    resolve('./assets/style/main.css'),
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  pinceau: {
    configFileName: 'tokens.config',
  },

  unocss: unocssConfig,
})
