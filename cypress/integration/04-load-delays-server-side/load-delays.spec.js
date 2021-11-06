/// <reference types="cypress" />

describe("Load delays", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/")
    })

    it("Wait for the page to load.", () => {
        cy.get('a[href="/loaddelay"]').click()
    })

    it("Verify if the button is present.", () => {
        cy.url().should("eq", "http://www.uitestingplayground.com/loaddelay")
        cy.get('button[class="btn btn-primary"]').should("exist");
    })

})