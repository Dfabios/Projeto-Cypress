class ProdutosPage {
    selecionarProdutoPeloPrecoMaisBaixo() {
      cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
      cy.get('.inventory_item').first().find('button').click();
    }
  
    acessarCarrinho() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default new ProdutosPage();
  