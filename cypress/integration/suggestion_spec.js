describe('Landing page view', () => {
  // it.skip('true should be true', () => {
  //   expect(true).to.equal(true);
  // })

  beforeEach(() => {
    cy.visit("http://localhost:3000/suggestion")
  })

  it('should display the suggestion form with name input', () => {
    cy.get('form').contains("Item Name")
  })

  it('should display the suggestion form with description input', () => {
    cy.get('form').contains("Item Description")
  })

  it('should display placeholder item name', () => {
    cy.get('input[type="text"]').should('have.attr', 'placeholder', 'e.g. Onion')
  })

  it('should allow user to enter item name', () => {
    cy.get('input[type="text"]').type("rubber ball")
    cy.get('input[type="text"]').should("have.value", "rubber ball")
  })

  it('should allow user to enter item description', () => {
    cy.get('textarea[id="itemDescription.ControlTextarea1"]').type("something to add maybe")
    cy.get('textarea[id="itemDescription.ControlTextarea1"]').should("have.value", "something to add maybe")
  })

  // NOTE:
  // need to test the submit button
});