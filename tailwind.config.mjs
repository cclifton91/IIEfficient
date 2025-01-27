/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb392c",
        secondary: "#5db5f9",
        accent: "#0e1216",
        background: "#252627",
        textColor: "#eff0f4",
      },
      fontFamily: {
        display: ["Big SHoulders Display", "serif"],
        body: ["Space Mono", "serif"],
      },
      lineHeight: {
        'introText': '11rem',
      },
      fontSize: {
        'introHeading' : '13.9rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
