/// <reference types="cypress" />

class menuSuperior {
    linkHome() {
        return 'li.menu-item.menu-item-home'
    }
    LinkAAVAL(){
        return '#menu-1-9933641 > .menu-item-7237 > .elementor-item'
    }
    LinkQuizQuality(){
        return '#menu-1-9933641 > .current-menu-item > .elementor-item'
    }
    linkCases(){
        return '#menu-1-9933641 > .menu-item-7239 > .elementor-item'
    }
    linkResultados(){
        return '#sm-17220200571544421-1 > .sub-arrow'
    }
    botaoTestarAgora(){
        return "Testar agora"
    }
    botaoFazerLogin(){
        return '#sm-17220200571583645-1'
    }
}

export default new menuSuperior;