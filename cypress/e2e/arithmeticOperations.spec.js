/// <reference types="cypress"/>

describe('Validate arithmetic operations', () => {
    
    beforeEach('Open calculator', () => {
        cy.openCalculator()
    })

    it('verifies addition operations', () => {
        cy.fixture('additionTestData').its('data').then((additionTestData) => {
            additionTestData.forEach(dataSet => {
                const firstValue = dataSet.firstValue
                const secondValue = dataSet.secondValue
                const expectedResult = dataSet.expectedResult

                cy.addValues(firstValue, secondValue)
                cy.get('.ng-binding').eq(0).should('contain', expectedResult)

                cy.checkResultInHistory(firstValue, '+', secondValue, expectedResult)
            })
        })
    })

    it('verifies substraction operations', () => {
        cy.fixture('substractionTestData').its('data').then((substractionTestData) => {
            substractionTestData.forEach(dataSet => {
                const firstValue = dataSet.firstValue
                const secondValue = dataSet.secondValue
                const expectedResult = dataSet.expectedResult

                cy.substractValues(firstValue, secondValue)
                cy.get('.ng-binding').eq(0).should('contain', expectedResult)

                cy.checkResultInHistory(firstValue, '-', secondValue, expectedResult)
            })
        })
    })
    it('verifies multiplication operations', () => {
        cy.fixture('multiplicationTestData').its('data').then((multiplicationTestData) => {
            multiplicationTestData.forEach(dataSet => {
                const firstValue = dataSet.firstValue
                const secondValue = dataSet.secondValue
                const expectedResult = dataSet.expectedResult

                cy.multiplyValues(firstValue, secondValue)
                cy.get('.ng-binding').eq(0).should('contain', expectedResult)

                cy.checkResultInHistory(firstValue, '*', secondValue, expectedResult)
            })
        })
    })
    it('verifies devision operations', () => {
        cy.fixture('devisionTestData').its('data').then((devisionTestData) => {
            devisionTestData.forEach(dataSet => {
                const firstValue = dataSet.firstValue
                const secondValue = dataSet.secondValue
                const expectedResult = dataSet.expectedResult

                cy.devideValues(firstValue, secondValue)
                cy.get('.ng-binding').eq(0).should('contain', expectedResult)

                cy.checkResultInHistory(firstValue, '/', secondValue, expectedResult)
            })
        })
    })
    it('verifies modulo operations', () => {
        cy.fixture('moduloTestData').its('data').then((moduloTestData) => {
            moduloTestData.forEach(dataSet => {
                const firstValue = dataSet.firstValue
                const secondValue = dataSet.secondValue
                const expectedResult = dataSet.expectedResult

                cy.modValues(firstValue, secondValue)
                cy.get('.ng-binding').eq(0).should('contain', expectedResult)

                cy.checkResultInHistory(firstValue, '%', secondValue, expectedResult)
            })
        })
    })
})