Feature: Login no sistema
  Como usuário do sistema
  Quero realizar login com minhas credenciais
  Para acessar minha conta e funcionalidades

  Scenario: Realizar um login válido
    Given que eu estou na página de login
    When eu preencho os campos -Email Address- e -Password- com dados válidos
    And eu clico no botão -Login-
    Then eu sou redirecionado para o menu -Home- 
    
       
     
   
