// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://github.com/Tahul/pinceau
    'pinceau/nuxt',
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
  },

  pinceau: {
    configFileName: 'tokens.config',
  },
})
