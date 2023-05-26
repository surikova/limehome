/// <reference types="cypress" />

Cypress.Commands.add('openCalculator', () => {
    cy.visit('/')
    cy.contains('Super Calculator')
})

Cypress.Commands.add('enterFirstValue', (firstValue) => {
    cy.get('[ng-model="first"]').type(firstValue)
})

Cypress.Commands.add('selectOperator', (operator) => {
    cy.get('select').select(operator)
})

Cypress.Commands.add('enterSecondValue', (secondValue) => {
    cy.get('[ng-model="second"]').type(secondValue)
})

Cypress.Commands.add('submitExpression', () => {
    cy.contains('Go!').click()
})

Cypress.Commands.add('addValues', (firstValue, secondValue) => {
    const operator = '+'
    
    cy.enterFirstValue(firstValue)
    cy.selectOperator(operator)
    cy.enterSecondValue(secondValue)
    cy.submitExpression()
})

Cypress.Commands.add('substractValues', (firstValue, secondValue) => {
    const operator = '-'
    
    cy.enterFirstValue(firstValue)
    cy.selectOperator(operator)
    cy.enterSecondValue(secondValue)
    cy.submitExpression()
})

Cypress.Commands.add('multiplyValues', (firstValue, secondValue) => {
    const operator = '*'
    
    cy.enterFirstValue(firstValue)
    cy.selectOperator(operator)
    cy.enterSecondValue(secondValue)
    cy.submitExpression()
})
Cypress.Commands.add('devideValues', (firstValue, secondValue) => {
    const operator = '/'
    
    cy.enterFirstValue(firstValue)
    cy.selectOperator(operator)
    cy.enterSecondValue(secondValue)
    cy.submitExpression()
})

Cypress.Commands.add('modValues', (firstValue, secondValue) => {
    const operator = '%'
    
    cy.enterFirstValue(firstValue)
    cy.selectOperator(operator)
    cy.enterSecondValue(secondValue)
    cy.submitExpression()
})

Cypress.Commands.add('checkResultInHistory', (firstValue, operator, secondValue, expectedResult) => {
    cy.get('tbody').then( resultInHistory => {
        cy.wrap(resultInHistory).find('td').eq(0).should('not.be.empty')
        cy.wrap(resultInHistory).find('td').eq(1)
            .then( expression => {
                const firstValue = expression.find('.ng-binding').eq(0).text()
                const operator = expression.find('.ng-binding').eq(1).text()
                const secondValue = expression.find('.ng-binding').eq(2).text()
                expect(firstValue).to.equal(firstValue)
                expect(operator).to.equal(operator)
                expect(secondValue).to.equal(secondValue)
            })
        cy.wrap(resultInHistory).find('td').eq(2).should('contain', expectedResult)
    })
})