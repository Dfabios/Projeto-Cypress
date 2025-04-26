/// <reference types="cypress"/>

const { should } = require("chai");

describe('Testes funcional de login', () => {
    it('Deve viabilizar o login de sucesso', () => {
        cy.visit("http://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain','Products')
    });

    it('Validando login incorreto', () => {
        cy.visit("http://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user1")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')


        
      
    });
    it('Validar senha incorreta', () => {
        cy.visit("http://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce2")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });
});