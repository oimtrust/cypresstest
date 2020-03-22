
describe('Cypress.$ Function ', function() {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    });
});
    