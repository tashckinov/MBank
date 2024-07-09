import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss"],

  app: {
      head: {
          title: 'M-Bank',
          meta: [
              {name: 'mobile-web-app-capable', content: 'yes'},
              {name: 'apple-mobile-web-app-capable', content: 'yes'},
              {name: 'application-name', content: 'M-Bank'},
              {name: 'apple-mobile-web-app-title', content: 'M-Bank'},
              {name: 'msapplication-starturl', content: '/'},
              {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
              {name: 'msapplication-TileColor', content: '#ffffff'},
              {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
              {name: 'theme-color', content: '#ffffff'}
          ],
          link: [
              {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
              {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
              {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
              {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
              {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
              {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
              {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
              {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
              {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
              {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
              {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
              {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
              {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
              {rel: 'manifest', href: '/manifest.json'}
          ]
      }
  },

  css: [
      '~/assets/css/global.css'
  ],

  primevue: {
      options: {
          theme: {
              preset: Aura
          }
      }
  },

  compatibilityDate: '2024-07-10'
})