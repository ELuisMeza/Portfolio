/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'color-hover': 'rgba(66, 66, 66, 10%)'
      },
    },
  },
  plugins: [],
};
