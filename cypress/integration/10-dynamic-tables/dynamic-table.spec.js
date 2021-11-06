/// <reference types='cypress' />

describe('Fetch Chrome CPU load from dynamic table.', () => {

    before(() => {
        cy.visit('http://www.uitestingplayground.com/dynamictable')
    })

    it("Query the table to look for Chrome CPU load using full CSS selectors.", () => {

        cy
            .get('body > section > div > div > div:nth-child(2) > div')
            .contains('CPU')
            .then((cpuCell) => {
                cy
                    .get('body > section > div > div > div:nth-child(3) > div > span')
                    .contains('Chrome')
                    .parent()
                    .then((chromeCell) => {
                        cy
                            .get('body > section > div > div > div:nth-child(3) > div:nth-child(' + (chromeCell.index() + 1) + ') > span:nth-child(' + (cpuCell.index() + 1) + ')')
                            .then((cpuLoad) => {
                                cy
                                    .get("p.bg-warning")
                                    .should("contain.text", cpuLoad.text())
                            })
                    })
            })
        })

    }) 
