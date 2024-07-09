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
        },
        fontFamily: {
            sans: ['Kanit', 'sans-serif'],
        },
        extend: {
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
}
