describe('Find a vet', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/find-vet")
  })

  it('should display the find vet form', () => {
    cy.get(".find-vet-form").contains("Find a Vet")
  })

  it('should allow user to enter a state', () => {
    cy.get('input').type('Nevada')
    cy.get('input').should('have.value', 'Nevada')
  })

  it.skip('should display vets from the entered state', () => {
    cy.get('input').type('Nevada')
    cy.get('.vet-cards-container')
  })

});