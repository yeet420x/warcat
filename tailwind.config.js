/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {},
    },
    // Tailwind v4 changes
    future: {
      respectDefaultRingColorOpacity: true,
      disableColorOpacityUtilitiesByDefault: true,
      relativeContentPathsByDefault: true,
    },
    plugins: [],
  }