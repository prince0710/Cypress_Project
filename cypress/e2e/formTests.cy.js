describe('Form Input Tests on DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
  })

  it('Fills and submits form', () => {
    cy.get('#userName').type('John Doe')
    cy.get('#userEmail').type('john@example.com')
    cy.get('#currentAddress').type('123 Street')
    cy.get('#permanentAddress').type('456 Avenue')
    cy.get('#submit').click()
    cy.get('#output').should('be.visible')
  })

  it('Checks input validation for empty fields', () => {
    cy.get('#userName').clear()
    cy.get('#userEmail').clear()
    cy.get('#submit').click()

    cy.get('#userEmail').then(($input) => {
      expect($input[0].checkValidity()).to.be.true
    })
  })

  it('Types with special characters and clears input', () => {
    cy.get('#userName').type('!@#$%^&*()')
    cy.get('#userName').clear().should('have.value', '')
  })
})