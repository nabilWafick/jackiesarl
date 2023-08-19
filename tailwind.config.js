/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/form/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/dashboard/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/position/**/*.{js,jsx,ts,tsx}",
    "./src/features/clients/**/*.{js,jsx,ts,tsx}",
    "./src/features/clients/components/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/pages/dashboard/**/*.{js,jsx,ts,tsx}",
    "./src/pages/dashboard/contents/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/services/**/*.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}"

  ],
  theme: {
    extend: {
      colors:{
        primary:'#FAE5E5',
        secondary: '#D55F5A',
      
      }
    },
  },
  plugins: [
    '@tailwindcss/forms',
  ],
}

