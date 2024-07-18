import Aura from '@primevue/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL,
        }
    },
    modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss", '@pinia/nuxt'],
    app: {
        head: {
            title: 'M-Bank',
            meta: [
                {name: 'apple-mobile-web-app-title', content: 'M-Bank'},
                {name: 'application-name', content: 'M-Bank'},
                {name: 'theme-color', content: '#f3f4f6'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
                {name: 'msapplication-TileImage', content: '/pwa/mstile-150x150.png'},
                {name: 'msapplication-config', content: '/pwa/browserconfig.xml'},
                {name: 'msapplication-tileimage', content: '/pwa/mstile-150x150.png'},
                {name: 'msapplication-TileColor', content: '#f3f4f6'},
                {name: 'mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-title', content: 'M-Bank'},
                {name: 'msapplication-starturl', content: '/app'},
            ],
            link: [
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/pwa/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'manifest', href: '/manifest.json'},
                {rel: 'mask-icon', href: '/pwa/safari-pinned-tab.svg', color: '#1f50f0'},
            ]
        }
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    css: [
        '~/assets/css/global.css'
    ],
    compatibilityDate: '2024-07-10'
})