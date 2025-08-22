import { LoginPage } from "./selectors/login"
import { ProductsPage } from "./selectors/products"
import { CartPage } from "./selectors/cart"

//Comandos da Tela de 'Login'
Cypress.Commands.add('realizarLogin', (
    email = Cypress.env('email'),
    password = Cypress.env('password'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visitarPaginaDeLogin()
        cy.preencherFormularioDeLogin(email, password)
        cy.clicarBotaoLogin()
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
          .should('not.eq', `${Cypress.env('login_url')}`)
    }

    if (cacheSession) {
        cy.session([email], login, {
            cacheAcrossSpecs: true,
            validate
        })
    } else {
        login()
    }
})

Cypress.Commands.add('visitarPaginaDeLogin', () => {
    cy.visit(`${Cypress.env('login_url')}`)
    cy.get(`${LoginPage.emailField}, ${LoginPage.passwordField}, ${LoginPage.loginButton}`)
      .should('be.visible')
})

Cypress.Commands.add('preencherFormularioDeLogin', (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.get(LoginPage.emailField).type(email)
    cy.get(LoginPage.passwordField).type(password, { log: false })
})

Cypress.Commands.add('clicarBotaoLogin', () => {
    cy.get(LoginPage.loginButton).click()
})

Cypress.Commands.add('validarRedirecionamentoHome', () => {
    cy.url().should('include', '/')
    cy.location('pathname').should('not.eq', `${Cypress.env('login_url')}`)
})

//Comandos da Tela de 'Products'
Cypress.Commands.add('acessarPaginaProdutos', () => {
    cy.visit(`${Cypress.env('products_url')}`)
    cy.get(ProductsPage.searchProductsField).should('be.visible')
})

Cypress.Commands.add('buscarProduto', (produto = 'Blue Top') => {
    cy.visit(`${Cypress.env('products_url')}`)
    cy.get(`${ProductsPage.searchProductsField}, ${ProductsPage.searchButton}`)
      .should('be.visible')
    cy.get(ProductsPage.searchProductsField)
      .clear()
      .type(produto)
      .should('have.value', produto)
    cy.get(ProductsPage.searchButton).click()
})

Cypress.Commands.add('realizarBuscaProduto', (produto = 'Blue Top') => {
    cy.get(ProductsPage.searchProductsField)
      .clear()
      .type(produto)
      .should('have.value', produto)
    cy.get(ProductsPage.searchButton).click()
})

Cypress.Commands.add('validarUrlBusca', (produto = 'Blue Top') => {
    const produtoEncoded = encodeURIComponent(produto)
    cy.url().should('include', `?search=${produtoEncoded}`)
})

Cypress.Commands.add('verificarProdutoNosResultados', (produto = 'Blue Top') => {
    cy.contains('p', produto).should('be.visible')
})

Cypress.Commands.add('adicionarMultiplosProdutosAoCarrinho', (produtos = [1, 2, 3, 4, 5]) => {
    cy.visit(`${Cypress.env('products_url')}`)

    produtos.forEach((id) => {
    cy.get(`[data-product-id='${id}']`).first().click()
    cy.contains('button', 'Continue Shopping').click()
    })
    
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
    cy.get(ProductsPage.addToCartButton)
      .first()
      .click()
})

Cypress.Commands.add('verificarProdutoAdicionado', () => {
    cy.contains('h4', 'Added!').should('be.visible')
})

//Comandos da Tela de 'Cart'
Cypress.Commands.add('limparCarrinho', () => {
    cy.visit(Cypress.env('cart_url'))

    cy.get('body').then(($body) => {
      if ($body.find(CartPage.productTable).length > 0) {
        cy.get(CartPage.deleteProductButton).each(($el) => {
          cy.wrap($el).click()
        })
      }
    })
})

Cypress.Commands.add('verificarCarrinhoVazio', () => {
    cy.contains('Cart is empty! Click here to buy products.').should('be.visible')
})

Cypress.Commands.add('visualizarCarrinho', () => {
    cy.visit(Cypress.env('cart_url'))
})

Cypress.Commands.add('verificarProdutoNoCarrinho', (quantidade = '1') => {
    cy.get(CartPage.productTable).should('be.visible')
    cy.contains('button', quantidade).should('be.visible')
})

//Comandos da Tela 'Checkout'
Cypress.Commands.add('validarProdutosNoCheckout', (produtos = []) => {
    produtos.forEach((id) => {
        cy.get(`#product-${id}`).should('be.visible')
    })
})

Cypress.Commands.add('acessarPaginaCheckout', () => {
    cy.visit(`${Cypress.env('cart_url')}`)
    cy.contains('a', 'Proceed To Checkout').click()
})