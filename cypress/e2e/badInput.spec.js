/// <reference types="cypress"/>

describe('Validate behavior with invalid input', () => {
    
    beforeEach('Open calculator', () => {
        cy.openCalculator()
    })

    it('verifies devision by 0', () => {
        cy.devideValues(6, 0)
        cy.get('.ng-binding').eq(0).should('contain', 'Infinity')
        cy.checkResultInHistory(6, '/', 0, 'Infinity')
    })

    it('verifies double negative digit in the input', () => {
        cy.addValues('--56', 5)
        cy.get('.ng-binding').eq(0).should('contain', 'NaN')
        cy.checkResultInHistory('-56', '+', 5, 'NaN')
    })

    it('verifies letters in the input', () => {
        cy.addValues('letters', 45)
        cy.get('.ng-binding').eq(0).should('contain', 'NaN')
        cy.checkResultInHistory('letters', '+', 45, 'NaN')
    })

    it('verifies punctuation in the input', () => {
        cy.addValues(23, '!!!')
        cy.get('.ng-binding').eq(0).should('contain', 'NaN')
        cy.checkResultInHistory(23, '+', '!!!', 'NaN')
    })

    it('verifies modulo by 0', () => {
        cy.modValues(16, 0)
        cy.get('.ng-binding').eq(0).should('contain', 'Infinity')
        cy.checkResultInHistory(16, '%', 0, 'Infinity')
    })
})