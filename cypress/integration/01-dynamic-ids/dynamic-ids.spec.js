/// <reference types="cypress" />

require("cypress-xpath")

describe('Dynamic IDs', () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/dynamicid")
    })

    it('Verify if automation can click the button using a CSS class.', () => {
        cy.get('button[class="btn btn-primary"]').click();
    })

    it('Verify if automation can click the button using XPath.', () => {
        cy.xpath('//*[@class="btn btn-primary"]').click();
    })
})