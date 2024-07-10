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
                {
                    "rel": "apple-touch-icon",
                    "sizes": "16x16",
                    "href": "/ios/16.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "20x20",
                    "href": "/ios/20.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "29x29",
                    "href": "/ios/29.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "32x32",
                    "href": "/ios/32.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "40x40",
                    "href": "/ios/40.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "50x50",
                    "href": "/ios/50.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "57x57",
                    "href": "/ios/57.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "58x58",
                    "href": "/ios/58.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "60x60",
                    "href": "/ios/60.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "64x64",
                    "href": "/ios/64.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "72x72",
                    "href": "/ios/72.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "76x76",
                    "href": "/ios/76.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "80x80",
                    "href": "/ios/80.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "87x87",
                    "href": "/ios/87.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "100x100",
                    "href": "/ios/100.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "114x114",
                    "href": "/ios/114.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "120x120",
                    "href": "/ios/120.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "128x128",
                    "href": "/ios/128.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "144x144",
                    "href": "/ios/144.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "152x152",
                    "href": "/ios/152.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "167x167",
                    "href": "/ios/167.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "180x180",
                    "href": "/ios/180.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "192x192",
                    "href": "/ios/192.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "256x256",
                    "href": "/ios/256.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "512x512",
                    "href": "/ios/512.png"
                },
                {
                    "rel": "apple-touch-icon",
                    "sizes": "1024x1024",
                    "href": "/ios/1024.png"
                },
                // Иконки для Android
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "512x512",
                    "href": "/android/android-launchericon-512-512.png"
                },
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "192x192",
                    "href": "/android/android-launchericon-192-192.png"
                },
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "144x144",
                    "href": "/android/android-launchericon-144-144.png"
                },
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "96x96",
                    "href": "/android/android-launchericon-96-96.png"
                },
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "72x72",
                    "href": "/android/android-launchericon-72-72.png"
                },
                {
                    "rel": "icon",
                    "type": "image/png",
                    "sizes": "48x48",
                    "href": "/android/android-launchericon-48-48.png"
                },

                // Иконки для Windows
                {"rel": "icon", "sizes": "71x71", "href": "/windows11/SmallTile.scale-100.png"},
                {"rel": "icon", "sizes": "89x89", "href": "/windows11/SmallTile.scale-125.png"},
                {"rel": "icon", "sizes": "107x107", "href": "/windows11/SmallTile.scale-150.png"},
                {"rel": "icon", "sizes": "142x142", "href": "/windows11/SmallTile.scale-200.png"},
                {"rel": "icon", "sizes": "284x284", "href": "/windows11/SmallTile.scale-400.png"},
                {"rel": "icon", "sizes": "150x150", "href": "/windows11/Square150x150Logo.scale-100.png"},
                {"rel": "icon", "sizes": "188x188", "href": "/windows11/Square150x150Logo.scale-125.png"},
                {"rel": "icon", "sizes": "225x225", "href": "/windows11/Square150x150Logo.scale-150.png"},
                {"rel": "icon", "sizes": "300x300", "href": "/windows11/Square150x150Logo.scale-200.png"},
                {"rel": "icon", "sizes": "600x600", "href": "/windows11/Square150x150Logo.scale-400.png"},
                {"rel": "icon", "sizes": "310x150", "href": "/windows11/Wide310x150Logo.scale-100.png"},
                {"rel": "icon", "sizes": "388x188", "href": "/windows11/Wide310x150Logo.scale-125.png"},
                {"rel": "icon", "sizes": "465x225", "href": "/windows11/Wide310x150Logo.scale-150.png"},
                {"rel": "icon", "sizes": "620x300", "href": "/windows11/Wide310x150Logo.scale-200.png"},
                {"rel": "icon", "sizes": "1240x600", "href": "/windows11/Wide310x150Logo.scale-400.png"},
                {"rel": "icon", "sizes": "310x310", "href": "/windows11/LargeTile.scale-100.png"},
                {"rel": "icon", "sizes": "388x388", "href": "/windows11/LargeTile.scale-125.png"},
                {"rel": "icon", "sizes": "465x465", "href": "/windows11/LargeTile.scale-150.png"},
                {"rel": "icon", "sizes": "620x620", "href": "/windows11/LargeTile.scale-200.png"},
                {"rel": "icon", "sizes": "1240x1240", "href": "/windows11/LargeTile.scale-400.png"},
                {"rel": "icon", "sizes": "44x44", "href": "/windows11/Square44x44Logo.scale-100.png"},
                {"rel": "icon", "sizes": "55x55", "href": "/windows11/Square44x44Logo.scale-125.png"},
                {"rel": "icon", "sizes": "66x66", "href": "/windows11/Square44x44Logo.scale-150.png"},
                {"rel": "icon", "sizes": "88x88", "href": "/windows11/Square44x44Logo.scale-200.png"},
                {"rel": "icon", "sizes": "176x176", "href": "/windows11/Square44x44Logo.scale-400.png"},
                {"rel": "icon", "sizes": "50x50", "href": "/windows11/StoreLogo.scale-100.png"},
                {"rel": "icon", "sizes": "63x63", "href": "/windows11/StoreLogo.scale-125.png"},
                {"rel": "icon", "sizes": "75x75", "href": "/windows11/StoreLogo.scale-150.png"},
                {"rel": "icon", "sizes": "100x100", "href": "/windows11/StoreLogo.scale-200.png"},
                {"rel": "icon", "sizes": "200x200", "href": "/windows11/StoreLogo.scale-400.png"},
                {"rel": "icon", "sizes": "620x300", "href": "/windows11/SplashScreen.scale-100.png"},
                {"rel": "icon", "sizes": "775x375", "href": "/windows11/SplashScreen.scale-125.png"},
                {"rel": "icon", "sizes": "930x450", "href": "/windows11/SplashScreen.scale-150.png"},
                {"rel": "icon", "sizes": "1240x600", "href": "/windows11/SplashScreen.scale-200.png"},
                {"rel": "icon", "sizes": "2480x1200", "href": "/windows11/SplashScreen.scale-400.png"},
                {"rel": "icon", "sizes": "16x16", "href": "/windows11/Square44x44Logo.targetsize-16.png"},
                {"rel": "icon", "sizes": "20x20", "href": "/windows11/Square44x44Logo.targetsize-20.png"},
                {"rel": "icon", "sizes": "24x24", "href": "/windows11/Square44x44Logo.targetsize-24.png"},
                {"rel": "icon", "sizes": "30x30", "href": "/windows11/Square44x44Logo.targetsize-30.png"},
                {"rel": "icon", "sizes": "32x32", "href": "/windows11/Square44x44Logo.targetsize-32.png"},
                {"rel": "icon", "sizes": "36x36", "href": "/windows11/Square44x44Logo.targetsize-36.png"},
                {"rel": "icon", "sizes": "40x40", "href": "/windows11/Square44x44Logo.targetsize-40.png"},
                {"rel": "icon", "sizes": "44x44", "href": "/windows11/Square44x44Logo.targetsize-44.png"},
                {"rel": "icon", "sizes": "48x48", "href": "/windows11/Square44x44Logo.targetsize-48.png"},
                {"rel": "icon", "sizes": "60x60", "href": "/windows11/Square44x44Logo.targetsize-60.png"},
                {"rel": "icon", "sizes": "64x64", "href": "/windows11/Square44x44Logo.targetsize-64.png"},
                {"rel": "icon", "sizes": "72x72", "href": "/windows11/Square44x44Logo.targetsize-72.png"},
                {"rel": "icon", "sizes": "80x80", "href": "/windows11/Square44x44Logo.targetsize-80.png"},
                {"rel": "icon", "sizes": "96x96", "href": "/windows11/Square44x44Logo.targetsize-96.png"},
                {"rel": "icon", "sizes": "256x256", "href": "/windows11/Square44x44Logo.targetsize-256.png"},
                {
                    "rel": "icon",
                    "sizes": "16x16",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-16.png"
                },
                {
                    "rel": "icon",
                    "sizes": "20x20",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-20.png"
                },
                {
                    "rel": "icon",
                    "sizes": "24x24",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-24.png"
                },
                {
                    "rel": "icon",
                    "sizes": "30x30",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-30.png"
                },
                {
                    "rel": "icon",
                    "sizes": "32x32",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-32.png"
                },
                {
                    "rel": "icon",
                    "sizes": "36x36",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-36.png"
                },
                {
                    "rel": "icon",
                    "sizes": "40x40",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-40.png"
                },
                {
                    "rel": "icon",
                    "sizes": "44x44",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-44.png"
                },
                {
                    "rel": "icon",
                    "sizes": "48x48",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-48.png"
                },
                {
                    "rel": "icon",
                    "sizes": "60x60",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-60.png"
                },
                {
                    "rel": "icon",
                    "sizes": "64x64",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-64.png"
                },
                {
                    "rel": "icon",
                    "sizes": "72x72",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-72.png"
                },
                {
                    "rel": "icon",
                    "sizes": "80x80",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-80.png"
                },
                {
                    "rel": "icon",
                    "sizes": "96x96",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-96.png"
                },
                {
                    "rel": "icon",
                    "sizes": "256x256",
                    "href": "/windows11/Square44x44Logo.altform-unplated_targetsize-256.png"
                },
                {
                    "rel": "icon",
                    "sizes": "16x16",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png"
                },
                {
                    "rel": "icon",
                    "sizes": "20x20",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png"
                },
                {
                    "rel": "icon",
                    "sizes": "24x24",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png"
                },
                {
                    "rel": "icon",
                    "sizes": "30x30",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png"
                },
                {
                    "rel": "icon",
                    "sizes": "32x32",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png"
                },
                {
                    "rel": "icon",
                    "sizes": "36x36",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png"
                },
                {
                    "rel": "icon",
                    "sizes": "40x40",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png"
                },
                {
                    "rel": "icon",
                    "sizes": "44x44",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png"
                },
                {
                    "rel": "icon",
                    "sizes": "48x48",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png"
                },
                {
                    "rel": "icon",
                    "sizes": "60x60",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png"
                },
                {
                    "rel": "icon",
                    "sizes": "64x64",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png"
                },
                {
                    "rel": "icon",
                    "sizes": "72x72",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png"
                },
                {
                    "rel": "icon",
                    "sizes": "80x80",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png"
                },
                {
                    "rel": "icon",
                    "sizes": "96x96",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png"
                },
                {
                    "rel": "icon",
                    "sizes": "256x256",
                    "href": "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png"
                },
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