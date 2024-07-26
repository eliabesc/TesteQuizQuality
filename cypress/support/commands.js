Cypress.Commands.add('myClearLocalStorage', () => {
    cy.window().then((window) => {
        window.localStorage.clear();
    });
});