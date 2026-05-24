describe('Login Test', () => {
  it('should open login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Dipakai ketika ingin ngetes long teks const longText = 'A'.repeat(100) jangan lupa type nya ganti jadi longteks
    
    //Menu Login
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    
    //Kalau mau pake long teks
    //cy.url().should('include', 'auth')
    cy.get('button[type="submit"]').click()

    //Menu masuk ke halaman Admin (contoh selector)
    cy.contains('Admin').click()

    // klik Add User
    cy.get('button').contains('Add').click()

    // langsung submit tanpa isi form
    cy.get('button[type="submit"]').click()

    // ASSERT: error muncul
    cy.contains('Required').should('be.visible')
  })
})