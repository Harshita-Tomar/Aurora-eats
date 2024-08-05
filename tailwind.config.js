/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    backgroundImage: {
      "main-bg-img": "url('/images/aurora_eats_main_bg_img.jpg')",
      "eats-img": "url('/images/eats_img.jpg')",
      "drink-img": "url('/images/drink_img.jpg')",
      "enjoy-img": "url('/images/enjoy_img.jpg')",
      "table-img": "url('/images/table_img.jpg')",
      "coros1-img": "url('/images/coros1_img.jpg')",
      "coros2-img": "url('/images/coros2_img.jpg')",
      "resto1-img": "url('/images/resto1_img.jpg')",
      "resto2-img": "url('/images/resto2_img.jpg')",
      "resto3-img": "url('/images/resto3_img.jpg')",
      "resto4-img": "url('/images/resto4_img.jpg')",
      "aboutus-img": "url('/images/about_us.jpg')",
      "about1-img": "url('/images/about1.jpg')",
      "about2-img": "url('/images/about2.jpg')",
      "kitchen1-img": "url('/images/kitchen1.jpg')",
      "kitchen2-img": "url('/images/kitchen2.jpg')",
      "menu-img": "url('/images/menu_img.jpg')",
    },
    boxShadow: {
      custom:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      custom2:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      custom3: "0px 0px 11px 0px #00000040",
      custom4: "0px 20px 50px 0px #12112714",
      custom5: "0px 10px 40px 0px #1D161712",
    },

    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif", "system-ui"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
