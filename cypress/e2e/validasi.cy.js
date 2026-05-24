describe('Login Test', () => {
  it('should open login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
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

    // =========================
    // 1. USER ROLE (DROPDOWN)
    // =========================
    cy.contains('User Role')
  .parents('.oxd-input-group')
  .find('.oxd-select-text')
  .click()

    cy.contains('Admin').click()

    // =========================
    // 2. EMPLOYEE NAME (SEARCH)
    // =========================
    cy.contains('Employee Name')
      .parent('.oxd-input-group')
      .find('input')
      .type('a')

    cy.contains('Orange Test').click({ force: true })
    // =========================
    // 3. STATUS (DROPDOWN)
    // =========================
    cy.contains('Status')
      .parent('.oxd-input-group')
      .find('.oxd-select-text')
      .click()

    cy.contains('Enabled').click()

    // =========================
    // 4. USERNAME
    // =========================
    cy.contains('Username')
      .parent('.oxd-input-group')
      .find('input')
      .type('testuser123')

    // =========================
    // 5. PASSWORD
    // =========================
    cy.contains('Password')
      .parent('.oxd-input-group')
      .find('input')
      .type('Test@12345')

    // =========================
    // 6. CONFIRM PASSWORD
    // =========================
    cy.contains('Confirm Password')
      .parent('.oxd-input-group')
      .find('input')
      .type('Test@12345')

    // submit
    cy.get('button[type="submit"]').click()

   
  })
})