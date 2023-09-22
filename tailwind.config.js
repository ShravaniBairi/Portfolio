/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': '10s ease-in-out infinite',
        'ping-slow': 'custom-ping 1s ease-in-out infinite'
      }


    },
  },
  plugins: [],
}

