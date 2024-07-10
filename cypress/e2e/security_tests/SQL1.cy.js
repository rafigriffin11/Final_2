describe('SQL injection testing', () => {

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type("'");
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type("' OR '1'='1'; --");
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    })
})