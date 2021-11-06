/// <reference types = 'cypress' />

describe("Verify that My Button is the text of the button", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/nbsp")
    })

    it("Verify that the button text is 'My Button'.", () => {
        cy.get("body > section > div > button").should("have.html", "My&nbsp;Button")
    })
})