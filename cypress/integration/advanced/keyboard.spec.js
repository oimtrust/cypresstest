
describe('Keyboard press simulation', function() {
    it('Should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('just some text {enter}')
    });
});
    