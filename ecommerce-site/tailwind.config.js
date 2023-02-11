/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            '2xl': '1440px',
            '3xl': '1920px',
        },
        extend: {
            colors: {
                primary: {
                    orange: 'hsl(26, 100%, 55%)',
                    paleOrange: 'hsl(25, 100%, 94%)',
                },
                neutral: {
                    darkBlue: 'hsl(220, 13%, 13%)',
                    darkGrayBlue: 'hsl(219, 9%, 45%)',
                    grayBlue: 'hsl(220, 14%, 75%)',
                    lightGrayBlue: 'hsl(223, 64%, 98%)',
                    white: 'hsl(0, 0%, 100%)',
                    black: 'hsl(0, 0%, 0%)',
                },
            },
            fontFamily: {
                kumbh: ['Kumbh Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
