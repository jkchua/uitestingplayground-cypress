/// <reference types="cypress" />

describe("Verify that we can find the text 'Welcome...' in the page", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/verifytext")
    })

    it("Verify that the text is present in the UI.", () => {
        cy.get("body > section > div > div.bg-primary > span").should("contain.text", "Welcome")
    })

})