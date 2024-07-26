// cypress/pages/visitarSite.js
import menuSuperior from "../objects/menuSuperior.js";

class VisitarSite {
    visitarSiteQuiz() {
        cy.visit("https://agilean.com.br/antigo-quizquality/");
       cy.contains(menuSuperior.botaoTestarAgora()).should('be.visible').click();
    }
}

export default new VisitarSite();