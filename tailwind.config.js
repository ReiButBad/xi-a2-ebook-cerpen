/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				lg: '1025px'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
};
