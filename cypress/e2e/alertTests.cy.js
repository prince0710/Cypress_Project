describe('Alert Handling on DemoQA', () => {
  it('Handles alert and confirms alert text', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.get('#alertButton').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.equal('You clicked a button')
    })
  })
})