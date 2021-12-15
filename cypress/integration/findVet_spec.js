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

  // it('should allow user to enter item name', () => {
  //   cy.get('input[type="text"]').type("rubber ball")
  //   cy.get('input[type="text"]').should("have.value", "rubber ball")
  // })

  // it('should allow user to enter item description', () => {
  //   cy.get('textarea[id="itemDescription.ControlTextarea1"]').type("something to add maybe")
  //   cy.get('textarea[id="itemDescription.ControlTextarea1"]').should("have.value", "something to add maybe")
  // })

  // it('should retain the value of onion in search bar', () => {
  //   cy.get('input[type="text"]').type("onion")
  //   cy.get('input').should("have.value", "onion")
  // })

});