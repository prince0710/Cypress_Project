describe('Dropdowns', () => {
  it('Selects dropdown value', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.get('#oldSelectMenu').select('Purple').should('have.value', '4')
  })
})

describe('Checkboxes and Radio Buttons', () => {
  it('Checks checkboxes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('.rct-checkbox').first().click()
    cy.get('.rct-icon-check').should('exist')
  })

  it('Selects radio button', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('label[for="yesRadio"]').click()
    cy.get('.text-success').should('contain', 'Yes')
  })
})