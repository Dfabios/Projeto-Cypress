Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.saucedemo.com/'); // seu site
  
    cy.get('[data-test="username"]').type(usuario);
    cy.get('[data-test="password"]').type(senha);
    cy.get('[data-test="login-button"]').click();
  });
   Cypress.Commands.add('finalizarCompra', (nome, sobrenome, cep) => {
    // Acessa o carrinho
    cy.get('.shopping_cart_link').click();
  
    // Clica no botão Checkout
    cy.get('[data-test="checkout"]').click();
  
    // Preenche as informações
    cy.get('[data-test="firstName"]').type(nome);
    cy.get('[data-test="lastName"]').type(sobrenome);
    cy.get('[data-test="postalCode"]').type(cep);
  
    // Continua
    cy.get('[data-test="continue"]').click();
  
    // Finaliza compra
    cy.get('[data-test="finish"]').click();
  });
  