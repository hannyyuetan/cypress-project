describe('Belajar Custom Commands', () => {

  // ✅ Pakai command tanpa parameter
  it('Buka beranda dengan custom command', () => {
    cy.bukaBeranda()
    cy.get('h1').should('have.text', 'Kitchen Sink')
  })

  // ✅ Pakai command dengan parameter
  it('Ketik email dengan custom command', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.ketikEmail('budi@gmail.com')
    cy.get('.action-email').should('have.value', 'budi@gmail.com')
  })

  // ✅ Pakai command login
  it('Login dengan custom command', () => {
    cy.login('budi@gmail.com', 'password123')
  })

})