
describe('Login with fixtures data', function() {
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        
        cy.fixture('user').then((user) => {
            const username = user.username
            const password = user.password
            cy.get('#user_login').as('username')
            cy.get('#user_password').as('password')
            cy.get('@username').type(username)
            cy.get('@password').type(password)
            cy.get('input[name="submit"]').click()
        })

    });
});
    