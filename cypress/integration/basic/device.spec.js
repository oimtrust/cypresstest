
describe('Device Tests', function() {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('1080p', () => {
        cy.viewport(1980, 1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('iPhone x', () => {
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('ipad mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });

    it('macbook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    });
});
    