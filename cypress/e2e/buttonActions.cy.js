describe('Button Actions on DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/buttons')
  })

  it('Performs double click and checks message', () => {
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('contain', 'You have done a double click')
  })

  it('Performs right click and checks message', () => {
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage').should('contain', 'You have done a right click')
  })


})