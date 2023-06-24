/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1f1d2b',
                darkLight: '#252837',
                gray: '#2e303f',
                grayLight: '#7c808b',
                white: '#fefeff',
                red: '#ea7d69'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            spacing: {
                180: '32rem'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    }
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                }
            },
            animation: {
                wiggle: 'wiggle 4s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-in-left': 'fade-in-left 0.5s ease-out'
            }
        }
    },
    plugins: []
}
