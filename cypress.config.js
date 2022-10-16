const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://react-api-countries.vercel.app/',
    chromeWebSecurity: false,
    viewportWidth: 500,
    viewportHeight: 800,
  },
});
