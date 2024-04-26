/// <reference types="cypress" />

describe("Testes para a home", () => {
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/");
    })

    it("Deve adicionar um contato novo",() => {
        cy.get('input[type="text"]').type("yan resende");
        cy.get('input[type="email"]').type("teste@teste.com");
        cy.get('input[type="tel"]').type("31 912345678");
        cy.get(".adicionar").click();
        cy.get(".sc-beqWaB").should("have.length", 4);
    })

    it("Deve editar um contato",() => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
        cy.get('input[type="text"]').clear().type("sidney adriano");
        cy.get(".alterar").click();
        cy.get(":nth-child(2) > div > ul > li").should('have.value', 'sidney adriano')
    })

    it("Deve remover um contato", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .delete").click()
        cy.get(".sc-beqWaB").should("have.length", 3);
    })
})