
describe('Working with inputs', function() {
    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear().type('Some Invalid Name', {delay: 50})
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear().type('Some Invalid Password', {delay: 50})
    });

    it('Should submit login form', () => {
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    });
});
    