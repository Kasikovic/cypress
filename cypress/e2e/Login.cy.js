/// <reference types="Cypress" />

describe("login tests", () => {
    it("login with unregistered user", () => {
        cy.visit("/")
        cy.get("a[href='/login']").click();
        cy.get("#email").type("random@mail.com");
        cy.get("#password").type("test123");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    })

    it("register without email address provided", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get("#password").type("test123");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    })

    it("register without password", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get('#email').type("random@mail.com");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    })


    it("login with valid credentials", () => {
        cy.visit("/");
       // cy.get("a[href='/login']").click();
       cy.get(".nav-link").eq(1).click();
       cy.get("#email").type("test123456@gmail.com");
       cy.get("#password").type("test12345");
       cy.get("button").click();
       cy.url().should("not.contain", "/login");
    })

    it("logut", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("test123456@gmail.com");
        cy.get("#password").type("test12345");
        cy.get("button").click();
        cy.url().should("not.contain", "/login");
        // cy.wait(1500);
        cy.get(".nav-link").eq(3).click();
    })
});

