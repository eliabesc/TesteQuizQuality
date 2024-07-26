/// <reference types="cypress" />

class formulario {
    campoNome() {
        return '#rd-text_field-lz1o1qqb'
    }
    campoEmail(){
        return '#rd-email_field-lz1o1qqc'
    }
    campoCelular(){
        return '#rd-email_field-lz1o1qqc'
    }
    CampoEmpresa(){
        return '#rd-text_field-lz1o1qqe'
    }
    seletor1(){
        return '#rd-select_field-lz1o1qqf'
    }
    seletor2(){
        return "#rd-select_field-lz1o1qqg"
    }
    seletor3(){
        return '#rd-select_field-lz1o1qqh'
    }
    botaoObterAcesso(){
        return '#rd-button-lanvjyf1'
    }
}

export default new formulario;