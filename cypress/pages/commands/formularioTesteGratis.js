// cypress/pages/visitarSite.js
import formulario from "../objects/forumarioTesteGratis.js";

class formularioGratis {
    preencherFormulario() {
        cy.get(formulario.campoNome()).should('be.visible').type('ELIABE GUEDES')
        cy.get(formulario.campoEmail()).should('be.visible').type('eliabe@teste.com')
        cy.get(formulario.campoCelular()).should('be.visible').type('85996547064')
        cy.get(formulario.CampoEmpresa()).should('be.visible').type('Teste')
        cy.get(formulario.seletor1()).should('be.visible').select('Outros')
        cy.get(formulario.seletor2()).should('be.visible').select('Outros')
        cy.get(formulario.seletor3()).should('be.visible').select('1')
        cy.get(formulario.botaoObterAcesso()).should('be.visible').click()

    }
}

export default new formularioGratis();