describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('Renders header', () => {
        cy.get('h2').should('have.text', 'CraftQL');
        cy.get('svg').should('be.visible');
    });

    it('Render beers', () => {
        cy.get('.css-shwykg').children().should('have.length', 20);
    });

    it('Opens and closes a modal', () => {
        cy.get('.css-shwykg > :nth-child(1)').click();
        cy.get('#chakra-modal--header-8').should('have.text', "Devil's Cup ");
        cy.get('.chakra-button').click();
        cy.get('#chakra-modal--header-8').should('not.be', 'visible');
    });
});


// Search for a specific beer
// Sort and check
// Rate and check