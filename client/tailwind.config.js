/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'green-freshness': '#7eb893',
                'midnight-ocean': '#274c5b',
                'yellow-sapphire': '#274c5b',
                'silver-mist': '#d4d4d4',
                'main-white': '#f9f8f8',
                'frosty-mint': '#eff6f1',
                'slate-gray': '#525c60',
            },
        },
    },
    plugins: [],
};
