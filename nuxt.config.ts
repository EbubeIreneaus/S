// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app:{
    head:{
      title: 'FieldSpring Investment',
    script: [
      {
        src: '/main.js',
        defer: true,
      },
      {
        src: 'https://salesiq.zohopublic.com/widget',
        defer: true,
      },
   
    ],
  }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.css','@splidejs/splide/css'],
  compatibilityDate: '2024-08-09',
})