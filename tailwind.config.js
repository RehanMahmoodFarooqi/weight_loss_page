/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'theme-dark': 'rgb(40, 67, 111)',
                'theme-blue': 'rgb(0, 119, 181)',
                'theme-light': '#d0e8ec',
            },
            fontFamily: {
                lora: ['Lora', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
            },
            keyframes: {
                'fade-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'shimmer': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(-100%)' },
                }
            },
            animation: {
                'fade-in-left': 'fade-in-left 1.5s ease-out forwards',
                'fade-in-right': 'fade-in-right 1.5s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            }
        },
    },
    plugins: [],
}
