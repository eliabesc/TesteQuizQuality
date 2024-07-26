// cypress/integration/navegacao.spec.js
import visitarSite from "../pages/commands/menuSuperior";
import formularioGratis from "../pages/commands/formularioTesteGratis"

describe('Preencher o formulario de acesso gratis', () => {
    // Ignora exceções não capturadas
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    context('Quando clicar no botão: Testar agora', () => {
        it('O link redireciona para pagina de preechimento do formulario.', () => {
            // Limpa o localStorage
            cy.myClearLocalStorage();
            
            // Visita o site e realiza a navegação
            visitarSite.visitarSiteQuiz();
            formularioGratis.preencherFormulario()
            
        });
    });
});