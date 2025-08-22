import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('que eu estou logado no sistema', () => {
    cy.realizarLogin()
})

And('o carrinho está vazio', () => {
    cy.limparCarrinho()
    cy.verificarCarrinhoVazio()
})

When('eu busco pelo produto {string}', (produto) => {
    cy.buscarProduto(produto)
})

And('eu incluo o produto no carrinho', () => {
    cy.adicionarProdutoAoCarrinho()
})

Then('o produto é adicionado com sucesso', () => {
    cy.verificarProdutoAdicionado()
})

And('eu visualizo o produto no carrinho com quantidade {string}', (quantidade) => {
    cy.visualizarCarrinho()
    cy.verificarProdutoNoCarrinho(quantidade)
})