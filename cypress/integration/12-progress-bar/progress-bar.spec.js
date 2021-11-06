/// <reference types='cypress' />

describe("Click Start button and then waits for the progress bar to reach 75%, then click Stop.",() => {

    before(() => {
        cy.visit("http://www.uitestingplayground.com/progressbar")
    })

    it("Start the progress bar.", () => {
        cy.get("#startButton").click()
    })

    it("Stop the progress bar when the progress reaches 75%.", () => {
        // Waiting more than 30 seconds means the process is getting stucked 
        // somewhere and has to be tuned.
        cy.get("#progressBar", { timeout: 30000 }).should("have.attr", 'aria-valuenow', 75).then(() => {
            cy.get("#stopButton").click()
        })
    })
})