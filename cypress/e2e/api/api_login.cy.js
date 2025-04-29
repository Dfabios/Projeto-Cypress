/// <reference types="cypress"/>

describe('API-Teste Funcional de Login', () => {
    it('Deve Realizar o Login com Sucesso', () => {
        cy.api_login('fulano@qa.com','teste').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
           
    });
    it('Deve validar senha incorreta', () => {
        cy.api_login('fulano@qa.com','senhaIncorreta').then((response)=>{
            expect(response.status).to.eq(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
           
           

        })

        
    });

    
});