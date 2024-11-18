export default defineNuxtConfig({
  app:{
     head:{
       title: "Route Eld",

       meta: [
        {
          name:"description",
          content:
          "Eld Company"
        },
        {
          name:"keywords",
          content:
          "Do You Need Electronic Logging Devices for Your Fleet?"
        },
        {
          property:"og:url",
          content:
          "https://routeld.com/routeld"
        },
        {
          property:"og:title",
          content:
          "Logistics Company"
        },
        {
          property:"og:description",
          content:
          "Eld Service"
        },
        {
          property:"og:type",
          content:
          "website"
        },
        {
          property:"og:image",
          content:
          "https://static.tildacdn.net/tild3231-3134-4863-a662-646565313965/clock.jpg"
        },
        {
          name:"format-detection",
          content:"telephon=no"
        }
       ]
     },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-swiper' ],
  css: ['~/assets/css/main.css'],
})