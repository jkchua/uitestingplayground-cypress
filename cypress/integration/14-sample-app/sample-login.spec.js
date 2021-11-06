/// <reference types = 'cypress' />

describe("Login Page", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/sampleapp")
    })

    it("Log in to the system.", () => {
        cy.get("[name='UserName']").type("bob")
        cy.get("[name='Password']").type("pwd")
    })

    it("Verify that the login is successful.", () => {
        cy.get("#login").click()
        cy.get("#loginstatus").should("contain.text", "Welcome, bob!")
    })

    it("Log out of the application.", () => {
        cy.get("#login").click()
        cy.get("#loginstatus").should("contain.text", "User logged out.")
    })
})