import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('que eu estou logado no sistema', () => {
    cy.realizarLogin()
})

And('eu estou na página de produtos', () => {
    cy.acessarPaginaProdutos()
})

When('eu busco pelo produto {string}', (produto) => {
    cy.realizarBuscaProduto(produto)
})

Then('os resultados da busca são exibidos corretamente', () => {
    cy.validarUrlBusca()
})

And('o produto {string} está visível nos resultados', (produto) => {
    cy.verificarProdutoNosResultados(produto)
})

