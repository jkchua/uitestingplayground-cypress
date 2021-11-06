/// <reference types="cypress" />

// I am not exactly sure of the expected output but the specifications say that
// the button will turn green if the click is successful.

describe("Event-based click", () => {

    before(() =>{
        cy.visit("http://www.uitestingplayground.com/click")
    })

    it("Click the button that turns green.", () => {
        cy.get("#badButton").click().should("have.class", "btn-success")
    })
})