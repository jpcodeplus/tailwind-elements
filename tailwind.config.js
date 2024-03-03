/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{php,html,js,jsx,ts,tsx}", // Für Projekte, die Frameworks wie React oder Vue verwenden
    "./src/**/*.{php,html,js,jsx,ts,tsx}", // Für Projekte, die Frameworks wie React oder Vue verwenden
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#849094',
          '50': '#f9fafa',
          '100': '#f3f4f4',
          '200': '#e5e8e9',
          '300': '#d0d5d7',
          '400': '#b4bbbe',
          '500': '#849094',
          '600': '#758084',
          '700': '#5f686c',
          '800': '#4f5659',
          '900': '#44484b',
          '950': '#262a2c',
      },
        secondary: '#64748b', // Ein gedämpftes Blau/Grau für sekundäre Elemente
        accent: '#fbbf24', // Ein lebhaftes Gelb für Akzentelemente
      }
    }
  },
  plugins: [],
};
