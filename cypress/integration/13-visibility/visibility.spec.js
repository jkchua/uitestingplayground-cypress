/// <reference types='cypress' />

let removedButton = "#removedButton"
let zeroWidthButton = "#zeroWidthButton"
let overlappedButton = "#overlappedButton"
let opacityZeroButton = "#transparentButton"
let invisibleButton = "#invisibleButton"
let notDisplayedButton = "#notdisplayedButton"
let offscreenButton = "#offscreenButton"
let hidingLayer = "#hidingLayer"

describe("Visibility of all buttons", () => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/visibility")
    })

    it("Click the Hide button.", () => {
        cy.get("#hideButton").click()
    })

    it("Verify that the Removed Button is not visible.", () => {
        cy.get(removedButton).should("not.be.NaN")
    })

    it("Verify that the Zero-Width Button is not visible.", () => {
        cy.get(zeroWidthButton).should("not.be.visible")
    })

    it("Verify that the Overlapped Button is not visible.", () => {
        cy.get(overlappedButton).should("not.be.NaN")
        cy.get(hidingLayer).should("exist")
    })
    
    it("Verify that the Opacity-Zero Button is not visible.", () => {
        cy.get(opacityZeroButton).should("not.be.visible")     
    })

    it("Verify that the Invisible Button is not visible.", () => {
        cy.get(invisibleButton).should("not.be.visible")
    })

    it("Verify that the Not Displayed Button is not visible.", () => {
        cy.get(notDisplayedButton).should("not.be.visible")
    })

    it("Verify that the Off-screen Button is not visible.", () => {
        cy.get(offscreenButton).should("not.have.css", "top", "-9999")
    })
})