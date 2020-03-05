
describe('Working with inputs', function() {
    it('Should override the current time', () => {
        const date = new Date(2020, 2, 5).getTime()
        cy.clock(date)
        cy.log(date)
    });

    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your item', { log: true })
    });

    it('Should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear().type('Some Invalid Name', {delay: 50})
    });

    it('Should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear().type('Some Invalid Password', {delay: 50})
    });

    it('Should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(1000)
    });

    it('Should submit login form', () => {
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });
});
    