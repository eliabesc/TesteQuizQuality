# Projeto de Testes com Cypress

Este projeto utiliza o **Cypress** para testes automatizados. Abaixo estão as instruções para instalar e executar o Cypress.

## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em seu sistema. Você pode verificar se já tem o Node.js e o npm instalados usando os seguintes comandos:

``
node -v
npm -v
``

Instalação:
Clone o Repositório
Primeiro, clone o repositório do projeto para o seu ambiente local:

```git clone https://github.com/seu-usuario/seu-repositorio.git```

```cd seu-repositorio```

## Instale as Dependências
Navegue até o diretório do projeto e instale as dependências do projeto, incluindo o Cypress:

```npm install```

Este comando instalará todas as dependências listadas no arquivo package.json, incluindo o Cypress.

## Executar o Cypress
Abrir o Cypress
Para abrir a interface gráfica do Cypress e começar a escrever e executar testes, use o comando:

```npx cypress open```

Isso abrirá o Cypress Test Runner, onde você pode visualizar e executar os testes.

## Executar Testes no Cypress
Para executar os testes em modo headless (sem interface gráfica), use o comando:

```npx cypress run```

Esse comando executará todos os testes definidos na pasta cypress/integration e exibirá os resultados no terminal.

## Links Úteis
Documentação do Cypress
Node.js
npm


