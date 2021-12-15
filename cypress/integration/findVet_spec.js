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


});