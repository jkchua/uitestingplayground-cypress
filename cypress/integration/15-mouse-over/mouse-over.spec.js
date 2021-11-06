/// <reference types = 'cypress' />

describe("Click the link twice", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/mouseover")
    })

    it("Hover the link called 'Click Me'.", () => {
        cy.get("body > section > div > div:nth-child(7) > a").trigger("mouseenter")
    })

    it("Click the link then add 1 to the counter.", () => {
        cy.get("body > section > div > div:nth-child(7) > a").click()
        cy.get("#clickCount").should("contain.text", "1")
    })

    it("Click the link again to add 1 to the counter.", () => {
        cy.get("body > section > div > div:nth-child(7) > a").click()
        cy.get("#clickCount").should("contain.text", "2")
    })

})