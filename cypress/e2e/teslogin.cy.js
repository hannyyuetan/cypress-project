describe('tes pertama saya', () => {
  it('Buka halaman dan cek judul', () => {
    //buka url 
    cy.visit('https://example.cypress.io')

    //cek judul halaman ada tulisan "kitchen sink"
    cy.contains('Kitchen Sink').should('be.visible')
    
    
  })
  //klik tombol dan klik hasilnya
  it('Klik tombol dan klik hasilnya',()=>{
    cy.visit('https://example.cypress.io/commands/actions')

    //ketik email di form input

    cy.get('.action-email')
    .type('belajar@cypress.io')
    .should('have.value', 'belajar@cypress.io')

    //submit
    cy.get('.action-btn').click()

  })

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })
  // ✅ 1. Cek visibility elemen
  it('Assertion - visibility', () => {
    cy.get('h1').should('be.visible') //elemen terlihat
    cy.get('h1').should('not.be.hidden')
  })

  // ✅ 2. Cek teks elemen
  it('Assertion - teks', () => {
    cy.get('h1').should('have.text', 'Kitchen Sink') //teks persis sama ...
    cy.contains('h1', 'Kitchen Sink').should('exist') //elemen yang di DOM
  })

  // tambahan cacatan should('contain', '...')Teks mengandung kata

  // ✅ 3. Cek attribute elemen
  it('Assertion - attribute', () => {
    cy.get('a').first()
      .should('have.attr', 'href')          // punya attribute href should('have.attr', '...')Punya attribute tertentu
      .and('not.be.empty')                  // href tidak kosong
  })

  // ✅ 4. Cek value input
  it('Assertion - value input', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('hanny@gmail.com')
      .should('have.value', 'hanny@gmail.com') //should('have.value', '...') Value input field
  })

  // ✅ 5. Cek class elemen
  it('Assertion - class', () => {
    cy.get('nav').should('have.class', 'navbar') //should('have.class', '...')Punya class tertentu
  })

  // ✅ 6. Cek jumlah elemen
  it('Assertion - jumlah elemen', () => {
    cy.get('.home-list li').should('have.length', 113) //should('have.length', N)Jumlah elemen
  })

  it('Chaining assertions', () => {
  cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('hanny@cypress.io')
      .should('be.visible')       //should('be.disabled')Elemen disabled
      .and('have.value', 'hanny@cypress.io')
      .and('not.be.disabled')
  })

  it('Negative assertions', () => {
  cy.visit('https://example.cypress.io')

  cy.get('h1').should('not.have.text', 'Halaman Salah')
  cy.get('.nonexistent').should('not.exist') //elemen tidak ada
})

it('Assertion - kondisi elemen', () => {
  cy.visit('https://example.cypress.io/commands/actions')

  // Cek elemen disabled
  cy.get('.action-btn').should('not.be.disabled')

  // Cek checkbox - gunakan selector yang benar
  cy.get('.action-checkboxes [type="checkbox"]').first()
    .check()
    .should('be.checked') //should('be.checked')Checkbox tercentang
})

it('Assertion dengan then()', () => {
  cy.visit('https://example.cypress.io')

  cy.get('h1').then(($el) => {
    const text = $el.text()
    expect(text).to.include('Kitchen')
    expect(text).to.have.length.greaterThan(3)
  })
})
})