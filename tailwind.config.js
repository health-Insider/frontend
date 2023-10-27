import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{jsx,tsx,html,js,ts}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,tsx,jsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [nextui()],
    darkMode: 'class',
};
