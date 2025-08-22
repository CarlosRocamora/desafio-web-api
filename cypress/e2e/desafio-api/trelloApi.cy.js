describe('Desafio API', () => {
  it('Enviar um GET para API', () => {
    cy.request('GET', `${Cypress.env('api_baseUrl')}/1/actions/592f11060f95a3d3d46a987a`)
      .then((response) => {
        expect(response.status).to.eq(200)
        cy.log('Nome da lista:', response.body.data.list.name)
        expect(response.body.data.list).to.have.property('name')
      })
  })
})