/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx}', // Include all possible extensions
        './components/**/*.{html,js,jsx,ts,tsx}',
        './layouts/**/*.{html,js,jsx,ts,tsx}', // Include other directories if any
    ],
    theme: {
        colors: {
            'blue': '#2451f0',
            'black': '#000000',
            'white': '#ffffff',
            'gray': '#878789',
            'light-gray': '#f3f4f6'
        },
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
            },
            screens: {
                'xs': {'max': '360px'},
            }
        },
    },
    plugins: [],
}
