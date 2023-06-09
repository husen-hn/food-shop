/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1C1E26',
                darkLight: '#232530',
                darkBlack: '#16161C',
                grayDark: '#2E303E',
                gray: '#6C6F93',
                white: '#FDF0ED',
                red: '#F43E5C'
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            spacing: {
                180: '32rem'
            }
        }
    },
    plugins: []
}
