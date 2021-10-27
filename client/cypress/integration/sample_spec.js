describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('Renders header', () => {
        cy.get('h2').should('have.text', 'CraftQL');
        cy.get('svg').should('be.visible');
    });
});
