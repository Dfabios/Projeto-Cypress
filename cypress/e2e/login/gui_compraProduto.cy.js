import loginPage from '../support/paginas/loginPage';
import produtosPage from '../support/paginas/produtosPage';

describe.only('Fluxo de compra de produto', () => {
  it('Deve realizar uma compra com sucesso', () => {
    // Login usando comando customizado
    cy.login('standard_user', 'secret_sauce');

    // Seleciona produto mais barato e acessa carrinho
    produtosPage.selecionarProdutoPeloPrecoMaisBaixo();
    produtosPage.acessarCarrinho();

    // Finaliza a compra usando comando customizado
    cy.finalizarCompra('Fábio', 'Tester', '12345');

    // Verifica a mensagem de sucesso
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
