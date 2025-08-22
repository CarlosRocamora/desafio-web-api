import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('que eu estou na página de login', () => {
    cy.visitarPaginaDeLogin()
})

When('eu preencho os campos -Email Address- e -Password- com dados válidos', () => {
    cy.preencherFormularioDeLogin(Cypress.env('email'), Cypress.env('password'))
})

And('eu clico no botão -Login-', () => {
    cy.clicarBotaoLogin()
})

Then('eu sou redirecionado para o menu -Home-', () => {
    cy.validarRedirecionamentoHome()
})