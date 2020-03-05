
describe('Working with inputs', function() {
    it('Should fill username', () => {
        cy.get('#user_login').clear().type('Some Invalid Name')
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear().type('Some Invalid Password')
    });

    it('Should submit login form', () => {
        // To Do
    });

    it('Should display error message', () => {
        // To Do
    });
});
    