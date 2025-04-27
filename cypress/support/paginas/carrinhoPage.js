class CarrinhoPage {
    clicarCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  }
  
  export default new CarrinhoPage();
  