describe('Belajar Fixtures', () => {

  // ✅ Cara 1 - load fixture di dalam it()
  it('Gunakan data user dari fixture', () => {
    cy.fixture('user').then((user) => {
      cy.log('Nama:', user.name)
      cy.log('Email:', user.email)

      cy.visit('https://example.cypress.io/commands/actions')

      cy.get('.action-email')
        .type(user.email)
        .should('have.value', user.email)
    })
  })

  // ✅ Cara 2 - load fixture di beforeEach() dengan alias
  describe('Menggunakan alias', () => {

    beforeEach(() => {
      cy.fixture('user').as('userData')
      cy.fixture('products').as('productData')
    })

    it('Cek data user dari alias', function () {
      // ⚠️ Pakai function() bukan arrow function saat pakai this
      cy.log('Nama:', this.userData.name)
      cy.log('Email:', this.userData.email)

      cy.visit('https://example.cypress.io/commands/actions')

      cy.get('.action-email')
        .type(this.userData.email)
        .should('have.value', this.userData.email)
    })

    it('Cek jumlah produk dari alias', function () {
      expect(this.productData).to.have.length(3)
      cy.log('Produk pertama:', this.productData[0].name)
    })

  })

})