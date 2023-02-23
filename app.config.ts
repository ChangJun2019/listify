export default defineAppConfig({
  listify: {
    author: 'listify',
    icons: {
      home: 'ph:triangle-bold',
      dark: 'ri-moon-line',
      system: 'mi-computer',
      light: 'ri-sun-line',
    },
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    listify: {
      author?: string
      icons?: {}
    }
  }
}
