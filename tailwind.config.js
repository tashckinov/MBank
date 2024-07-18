/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx}', // Include all possible extensions
        './components/**/*.{html,js,jsx,ts,tsx}',
        './layouts/**/*.{html,js,jsx,ts,tsx}', // Include other directories if any
    ],
    theme: {
        // colors: {
        //     'blue': '#2451f0',
        //     'black': '#000000',
        //     'white': '#ffffff',
        //     'gray': '#878789',
        //     'light-gray': '#f3f4f6',
        //     'red': '#d52828'
        // },
        borderWidth: {
            DEFAULT: '1px'
        },
        fontFamily: {
            sans: ['Kanit', 'sans-serif'],
        },
        extend: {
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'up': '0 -2px 2px 0 rgba(0, 0, 0, 0.03), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card': '0 0 5px 1px #00000021',
            },
            screens: {
                'xs': {'max': '360px'},
            },
            colors: {
                primary: {
                    50: '#b7c3ee',
                    100: '#b2bae1',
                    200: '#7488de',
                    300: '#5f72e1',
                    400: '#4366da',
                    500: '#2451f0',
                    600: '#1241e5',
                    700: '#0c2aa6',
                    800: '#0e2f9f',
                    900: '#071e64',
                    950: '#041446',
                },
            }
        },
    },
    plugins: [],
}
