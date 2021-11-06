/// <reference types="cypress" />

describe("Text input via physical keyboard and not by DOM setting.", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/textinput")
    })

    it("Input the text 'Karen from Finance' from the text input.", () => {
        cy.get("#newButtonName").type("Karen from Finance")
        cy.get("#updatingButton").click().should("contain", "Karen from Finance")
    })

})