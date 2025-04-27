class CheckoutPage {
    preencherInformacoes(nome, sobrenome, cep) {
      cy.get('[data-test="firstName"]').type(nome);
      cy.get('[data-test="lastName"]').type(sobrenome);
      cy.get('[data-test="postalCode"]').type(cep);
      cy.get('[data-test="continue"]').click();
    }
  
    finalizarCompra() {
      cy.get('[data-test="finish"]').click();
    }
  }
  
  export default new CheckoutPage();
  