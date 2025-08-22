Feature: Busca de Produtos
  Como usuário do sistema
  Quero buscar produtos no catálogo
  Para encontrar itens específicos para compra

  Scenario: Realizar busca
    Given que eu estou logado no sistema
    And eu estou na página de produtos
    When eu busco pelo produto "Blue Top"
    Then os resultados da busca são exibidos corretamente
    And o produto "Blue Top" está visível nos resultados