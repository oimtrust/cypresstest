/// <reference types="cypress" />


describe('Browser actions', function() {
    it('Should load correct url', () => {
        cy.visit('http://example.com/', {timeout: 10000})
    });

    it('Should check the correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('Should wait for 3 seconds', () => {
        cy.wait(3000)
    });

    it('Should pause the execution', () => {
        cy.pause()
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    });
});
    