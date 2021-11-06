/// <reference types="cypress" />

describe("Hidden layers", () => {

    before(() =>{
        cy.visit("http://www.uitestingplayground.com/hiddenlayers")
    })

    it("Click the green button once.", () => {
        cy.get('#greenButton').click()
    })
})