/// <reference types="cypress" />

describe("Load delays client-side", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/clientdelay")
    })

    it("Click the button.", () => {
        cy.get("#ajaxButton").click()
    })

    it("Verify if the process is completed.", () => {
        cy.get("#spinner", { timeout: 15000 }).should("not.be.visible").then(() => {
            cy.get("#content p").should("contain", "Data calculated on the client side.") 
        })
    })
})