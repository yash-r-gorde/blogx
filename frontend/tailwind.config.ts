// tailwind.config.ts

import type { Config } from 'tailwindcss'

export default {
  // Tell Tailwind where to look for your classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // Define your theme customizations
  theme: {
    extend: {
      screens: {
        'lap': '1000px', // Your custom 1000px breakpoint
      },
    },
  },

  // No plugins needed for now
  plugins: [],

} satisfies Config