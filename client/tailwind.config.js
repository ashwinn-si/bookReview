/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"]
            },
            colors: {
                primary: "#4B2E83",
                bg: "#FAF9F6",
                primaryText: "#2E2E2E",
                accent: "#8B4513",
                hilight: "#D4A373"
            }
        },
    },
    plugins: [],
};
