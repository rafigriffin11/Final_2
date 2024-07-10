describe('XSS security tests', () => {

    it('should login using script in email field', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type("<script>alert('XSS')</script>");
        cy.get('#password').type('12345678');
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should login using script in password field', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type("test");
        cy.get('#password').type("<script>alert('XSS')</script>");
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });

    it('should login using script in login and password fields', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
        cy.get('#email').type("<script>alert('XSS')</script>");
        cy.get('#password').type("<script>alert('XSS')</script>");
        cy.contains('Submit').click();
        cy.url().should('include', '/contactList');
    });
})