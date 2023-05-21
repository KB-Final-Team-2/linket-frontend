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
                'primary':'#FF6000',
                'secondary':'#FFA559',
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

