# Teste de Automação - Desafio Web e API

## Pré-requisitos

Certifique-se de ter instalado:
- Git: `2.50.1`
- Node.js: `18.20.8`
- npm: `10.8.2`

>Estas são as versões utilizadas durante o desenvolvimento do projeto.

---

## Instalação

Instale todas as dependências:
```bash
npm install
```
>Isso instalará Cypress, Cucumber e todas as dependências listadas no `package.json`

### Observação sobre instalação de dependências específicas

Caso queira instalar manualmente as dependências do Cypress e Cucumber:

```bash
npm install cypress@^14.5.4 cypress-cucumber-preprocessor@^4.3.1 @cypress/browserify-preprocessor@^3.0.2 --save-dev
```

---

## Estrutura do Projeto

### Desafio Web
- `features/` → arquivos `.feature` com testes em Gherkin
- `steps/` → implementações de cada passo definido nos features
- `selectors/` → manutenção de seletores da aplicação
- `commands.js` → comandos customizados para evitar repetição
- `cypress.env.json` → variáveis de ambiente (credenciais, URLs)
- `cy.session()` → otimização de testes que requerem login

Cenários testados:
- Realizar um login válido
- Realizar busca
- Incluir produto no carrinho
- Validar os produtos incluídos no carrinho na tela de pagamento

### Desafio API
- `desafio-api/` → contém o arquivo `trelloApi.cy.js` com teste de GET na API

Cenário testado:
- Enviar GET para API

---

## Executando os Testes

### Desktop
```bash
npm run cy:open
```
>Abre o Cypress Test Runner para rodar os testes interativamente.

