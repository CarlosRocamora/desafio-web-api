Feature: Gerenciamento do Carrinho
  Como usuário do sistema
  Quero gerenciar produtos no carrinho
  Para finalizar minhas compras

  Scenario: Incluir produto no carrinho
    Given que eu estou logado no sistema
    And o carrinho está vazio
    When eu busco pelo produto "Blue Top"
    And eu incluo o produto no carrinho
    Then o produto é adicionado com sucesso
    And eu visualizo o produto no carrinho com quantidade "1"