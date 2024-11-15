// nuxt.config.js
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-security"],
  plugins: ["~/plugins/axios.client.ts", "~/plugins/toastification.js"], // Agrega tu nuevo plugin aquí
  runtimeConfig: {
    public: {
      backBaseUrl: process.env.BACK_BASE_URL,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  compatibilityDate: "2024-10-23",
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
