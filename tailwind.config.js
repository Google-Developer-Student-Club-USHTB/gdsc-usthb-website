/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1920px"

        },
        colors: {
            "gdsc-red": "#EA4335",
            "gdsc-blue": "#4285F4", //buttons , blue texts 
            "gdsc-green": "#0F9D58",
            "gdsc-yellow": "#FBBC04 ",
            "gdsc-blue-project": "#0563FF", //projects linear   
            "gdsc-dark-grey": "#474646",
            "gdsc-background": "#F6F5F5",
        },
        fontFamily: {
            "IBM-Plex": ["IBM Plex Sans", "sans-serif"],
        },
        extend: {
            borderRadius: {
                'large': '40px'
            },
        },
    },
    plugins: [],
}