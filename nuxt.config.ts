// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  srcDir: 'src/',
  googleFonts: {
    families: {
      'Noto+Sans+JP': '200..700',
    },
  },
  css: [
    '@/assets/css/reset.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // NOTE: modern APIを使う
          api: "modern-compiler"
        }
      }
    }
  },
})
