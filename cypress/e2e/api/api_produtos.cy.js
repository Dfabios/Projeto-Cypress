/// <reference types="cypress"/>

describe('Login, Cadastro, Edição e Exclusão de Produto', () => {
    let token;
    let idProduto;

    before(() => {
        // Realiza o login e salva o token
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                email: 'fulano@qa.com',
                password: 'teste'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.authorization;
        });
    });

    it('Deve cadastrar um produto com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers: {
                Authorization: token
            },
            body: {
                nome: "Fiat Uno Turbo",
                preco: 60000,
                descricao: "Carro popular mais rápido",
                quantidade: 10
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.equal('Cadastro realizado com sucesso');
            idProduto = response.body._id; // salva o ID do produto
        });
    });

    it('Deve editar o produto com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: `http://localhost:3000/produtos/${idProduto}`,
            headers: {
                Authorization: token
            },
            body: {
                nome: "Fiat Uno Turbo Modificado",
                preco: 65000,
                descricao: "Carro popular agora mais caro",
                quantidade: 12
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.equal('Registro alterado com sucesso'); // ajuste conforme resposta da API
        });
    });

    it('Deve excluir o produto com sucesso', () => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/produtos/${idProduto}`,
            headers: {
                Authorization: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.equal('Registro excluído com sucesso'); // ajuste conforme resposta da API
        });
    });
});
