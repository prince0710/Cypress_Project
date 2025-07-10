describe('Login Tests on AutomationExercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login')
  })

  it('Tries invalid login and checks error', () => {
    cy.get('[data-qa="login-email"]').type('wrong@example.com')
    cy.get('[data-qa="login-password"]').type('wrongpassword')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it('Logs in with valid credentials and checks login success', () => {
    cy.get('[data-qa="login-email"]').type(Cypress.env('login_email'))
    cy.get('[data-qa="login-password"]').type(Cypress.env('login_password'))
    cy.get('[data-qa="login-button"]').click()

    // Wait for login redirect and check welcome message
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible')

    
    // Ensure the user is redirected and logged in by checking nav bar or account label
    
  })
})