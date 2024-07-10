describe('using a DOM based XSS attack to bypass login credentials', () => {


    it('should login', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type('js69@google.com');
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    })

    it('should login', () => {
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/contactList/#%3Cscript%3Ealert('XSS');%3C/script%3E");
        // cy.get('#email').type("js69@google");
        // cy.get('#password').type('12345678');
        // cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

})