/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'background':{
                    'light':"#ffffff",
                    'dark':'#454545',
                },
                'primary':{
                    "100":"#ff6600",
                    "200":"#ff983f",
                    "300":"#ffffa1",
                },
                'accent':{
                    "100":"#f5f5f5",
                    "200":"#929292",
                },
                'text':{
                    "100":"#ffffff",
                    "200":"#e0e0e0",
                },
                'bg':{
                    "100":"#1d1f21",
                    "200":"#2c2e30",
                    "300":"#444648",
                },
                'stats':{
                    '1':'#f77171',
                    '2':'#fa913c',
                    '3':'#fcdf47',
                    '4':'#a2e535',
                    '5':'#3b81f5',
                    '6':'#a755f6'
                }
            }
        },
    },
    plugins: [],
}

