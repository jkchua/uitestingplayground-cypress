/// <reference types="cypress" />

describe("AJAX", () => {
    before(() => {
        cy.visit("http://www.uitestingplayground.com/ajax")
    })

    it("Click the button and verify if data is loaded.", () => {
        cy.intercept('GET', '/ajaxdata').as("responseMessage")

        cy.get('#ajaxButton').click()
        
        cy.wait('@responseMessage').then(() => {
            cy.get("#content p").should("contain", "Data loaded with AJAX get request.")
        })
    })

})