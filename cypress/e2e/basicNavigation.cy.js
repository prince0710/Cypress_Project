describe('Basic Navigation and Content Tests', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Checks title', () => {
    cy.title().should('include', 'Cypress')
  })

  it('Navigates to Querying and checks header', () => {
    cy.contains('Commands').click()
    cy.contains('Querying').click()
    cy.get('h1').should('contain', 'Querying')
  })

  it('Clicks a link and checks URL', () => {
    cy.contains('Utilities').click()
    cy.url().should('include', '/utilities')
  })

  it('Checks if element contains text', () => {
    cy.contains('Commands').click()
    cy.contains('Querying').click()
    cy.get('.query-btn').should('contain', 'Button')
  })

  it('Checks button is visible', () => {
    cy.contains('Commands').click()
    cy.contains('Querying').click()
    cy.get('.query-btn').should('be.visible')
  })
})
