const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    video: true,                // rekam video test
    screenshotOnRunFailure: true, // screenshot saat gagal
    setupNodeEvents(on, config) {
    },
  },
});