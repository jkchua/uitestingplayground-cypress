/// <reference types="cypress" />

require("cypress-xpath")

describe("Scrollbars and hidden button", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/scrollbars")
    })

    it("Scroll to where the hidden button is.", () => {
        cy.xpath("/html/body/section/div/div").scrollTo("bottomRight").get("#hidingButton").click()
    })
    
})