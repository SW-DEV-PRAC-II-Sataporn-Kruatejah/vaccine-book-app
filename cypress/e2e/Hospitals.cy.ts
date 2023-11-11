describe('Hospitals', () => {
  it('Should fetch hospitals and display', () => {

    cy.visit('/')
    cy.get("video", { timeout: 10000}).should("exist")
    cy.get("video").its("0.paused").should("equal", false);
    cy.wait(5000)
    cy.get("#video-button").click()
    cy.get("video").its("0.paused").should("equal", true);
    cy.get("#hospitals-button").click()
    cy.get("img", { timeout: 10000}).should('have.length.at.least', 3)
  })
})
