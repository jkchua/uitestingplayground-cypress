/// <reference types="cypress" />

describe('Class Attributes', () => {

    before(() => {
        cy.visit('http://www.uitestingplayground.com/classattr')
    })

    it('Verify if the primary button can be found.', () => {
        cy.get('button.btn-primary').click()

        // Cypress do not support clicking the browser alerts but we can listen to it
        // via callbacks.
        cy.on("window:alert", (text) => {
            expect(text).to.contains('Primary button pressed');
        })
    })
})