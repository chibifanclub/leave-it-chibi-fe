describe('Find a vet', () => {
  it.skip('true should be true', () => {
    expect(true).to.equal(true);
  })

  beforeEach(() => {
    cy.visit("http://localhost:3000/find-vet")
  })

  it('should display the find vet form', () => {
    cy.get(".find-vet-form").contains("Find a Vet")
  })

  it.skip('should allow user to enter a state and city', () => {
    cy.get('input').type('Nevada').select('[value="Nevada"]')
    cy.get('input').should('have.value', 'Nevada')
    cy.get('.sc-bxivhb frjscc').type('Reno')
    cy.get('.sc-bxivhb frjscc').should('have.value', 'Reno')
  })

  it.skip('should display vets from the entered state', () => {
    cy.get('input').type('Nevada')
    cy.get('.vet-cards-container')
  })


});