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
            }
        },
    },
    plugins: [],
}

