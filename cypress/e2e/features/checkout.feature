Feature: Validação de Checkout
  Como usuário do sistema
  Quero validar os produtos no checkout
  Para garantir que minha compra está correta

  Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Given que eu estou logado no sistema
    And o carrinho está vazio
    When eu adiciono 5 produtos diferentes ao carrinho
    And eu acesso a página de checkout
    Then todos os produtos adicionados estão visíveis no checkout