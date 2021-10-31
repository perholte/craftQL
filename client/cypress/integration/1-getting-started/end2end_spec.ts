describe('Successfully', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('renders header', (): void => {
        cy.get('h2').should('have.text', 'CraftQL');
        cy.get('svg').should('be.visible');
    });

    it('renders beers', () => {
        cy.get('#beerListGrid').children().should('have.length', 20);
    });

    it('opens and closes a modal', () => {
        cy.get('#beerListGrid > :nth-child(1)').click();
        cy.get('.modalHeader').should('have.text', '#001 Golden Amber Lager ');
        cy.get('.chakra-button').should('have.text', 'Submit rating');
        cy.get('.modalCloseButton').click();
        cy.get('.modalHeader').should('not.be', 'visible');
    });

    it('sorts the entries', () => {
        const firstElement = cy.get('#beerListGrid > :nth-child(1)');
        firstElement.click();
        cy.get('select').select('Name: Z - A', { force: true });
        cy.get('#beerListGrid > :nth-child(1)').should('not.equal', firstElement);
    });

    it('renders 20 new beers', () => {
        const body = cy.get('body');
        cy.get('#beerListGrid').children().should('have.length', 20);
        cy.get('#root').scrollTo('bottom');
        cy.get('#beerListGrid').children().should('have.length', 40);
    });
});

// Widespread Wit

// Search for a specific beer
// Rate and check