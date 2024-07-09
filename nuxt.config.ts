import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    modules: ['@primevue/nuxt-module', "@nuxtjs/tailwindcss"],
    css: [
        '~/assets/css/global.css'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }
})