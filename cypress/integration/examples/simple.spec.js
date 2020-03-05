/// <reference types="cypress" />


describe('Browser Actions', function() {
    it('Should load url books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before reload')
        cy.reload()
        cy.log('After Reload')
    });

    it('Should click on Travel Category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    });

    it('Should click on Poetry Category', () => {
        cy.get('a').contains('Poetry').click()
    });

    it('Should click on detail in Olio Book & verify of amount', () => {
        cy.get('a').contains('Olio').click()
        cy.get('p').should('contain.text', '£23.88')
    });
});
    