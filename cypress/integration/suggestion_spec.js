describe('Landing page view', () => {
  it.skip('true should be true', () => {
    expect(true).to.equal(true);
  })

  beforeEach(() => {
    cy.visit("http://localhost:3000/suggestion")
  })

  it('should display the suggestion form with name input', () => {
    cy.get('form').contains("Item Name")
  })

  it('should display the suggestion form with description input', () => {
    cy.get('form').contains("Item Description")
  })


  // it('should return onion if onion is searched for', () => {
  //   cy.get('input[type="text"]').type("onion")
  //   cy.get('.item-card').contains('onions')
  // })

  // it('should retain the value of onion in search bar', () => {
  //   cy.get('input[type="text"]').type("onion")
  //   cy.get('input').should("have.value", "onion")
  // })


});