import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('que eu estou logado no sistema', () => {
    cy.realizarLogin()
})

And('o carrinho está vazio', () => {
    cy.limparCarrinho()
    cy.verificarCarrinhoVazio()
})

When('eu adiciono 5 produtos diferentes ao carrinho', () => {
    cy.adicionarMultiplosProdutosAoCarrinho([1, 2, 3, 4, 5])
})

And('eu acesso a página de checkout', () => {
    cy.acessarPaginaCheckout()
})

Then('todos os produtos adicionados estão visíveis no checkout', () => {
    cy.validarProdutosNoCheckout([1, 2, 3, 4, 5])
})