/// <reference types="cypress"/>


describe('Testes funcional de login com sucesso', () => {
    it('Deve viabilizar o login de sucesso', () => {
        cy.visit("http://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
    });

    
describe('Testes funcionais de login com vários usuários incorretos', () => {

    beforeEach(() => {
        cy.visit("http://www.saucedemo.com/")
    });

    const usuariosInvalidos = [
        { username: 'standard_user1', password: 'secret_sauce' },
        { username: 'standard_user', password: 'secret_sauce2' },
        { username: 'usuario_inexistente', password: 'senha_errada' }
    ];

    usuariosInvalidos.forEach((usuario) => {
        it(`Deve exibir erro para login inválido: ${usuario.username}`, () => {
            cy.get('[data-test="username"]').type(usuario.username);
            cy.get('[data-test="password"]').type(usuario.password);
            cy.get('[data-test="login-button"]').click();
            cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        });
    });

});

  
});

//By Fábio Salvador - dev back End 