// svelte.config.js
const sveltePreprocess = require('svelte-preprocess')
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const precss = require("precss");

module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [tailwindcss, autoprefixer, precss],
    },
  }),
  // ...other svelte options
}
