describe('Find a vet', () => {
  it('true should be true', () => {
    expect(true).to.equal(true);
  })

  beforeEach(() => {
    cy.visit("http://localhost:3000/find-vet")
  })

  it('should display the find vet form', () => {
    cy.get(".find-vet-form").contains("Find a Vet")
  })


  // it('should retain the value of onion in search bar', () => {
  //   cy.get('input[type="text"]').type("onion")
  //   cy.get('input').should("have.value", "onion")
  // })

});