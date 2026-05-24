// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ✅ Command tanpa parameter
Cypress.Commands.add('bukaBeranda', () => {
  cy.visit('https://example.cypress.io')
})

// ✅ Command dengan parameter
Cypress.Commands.add('ketikEmail', (email) => {
  cy.get('.action-email').type(email)
})

// ✅ Command login (simulasi)
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-email').type(email)
  cy.get('.action-btn').click()
  cy.log(`Login sebagai: ${email}`)
})