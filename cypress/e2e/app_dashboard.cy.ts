/// <reference types="cypress" />

describe("Navigation Dashboard", () => {
  it("should navigate to the dashboard page", () => {
    cy.visit("http://localhost:3000/");

    cy.url().should("include", "/");
    cy.get("h2").contains("Painel de Serviço - Listagem");
    cy.get("p").contains("A Defensoria do Estado do Rio Grande do Sul");
  });
});

describe("List Dashboard", () => {
  it("should list status services the dashboard page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="Novo cadastro test"]').should(
      "contain",
      "Novo cadastro test"
    );
    cy.get('[data-testid="SERPRO"]').should("contain", "SERPRO");
    cy.get('[data-testid="Conselho Nacional de Justiça"]').should(
      "contain",
      "Conselho Nacional de Justiça"
    );
    cy.get('[data-testid="Tribunal de Justiça"]').should(
      "contain",
      "Tribunal de Justiça"
    );
  });
});

describe("Navigation service", () => {
  it("should navigate to the service page", () => {
    cy.visit("http://localhost:3000/services");
    cy.get("h2").contains("Cadastro dos Serviços");
    cy.get("p").contains("Listagem e cadastro dos serviços.");
  });
});

describe("Create service", () => {
  it("should create new service", () => {
    cy.visit("http://localhost:3000/services");
    cy.get('[data-testid="create-service"]').click();
    cy.get('[data-testid="name"]').type("New service xcv");
    cy.get("[name='status']").select(1, { force: true });
    cy.get('[data-testid="save"]').click();
  });
});

describe("List new service", () => {
  it("should list new status services", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="New service xcv"]').should(
      "contain",
      "New service xcv"
    );
    cy.get('[data-testid="Novo cadastro test"]').should(
      "contain",
      "Novo cadastro test"
    );
    cy.get('[data-testid="SERPRO"]').should("contain", "SERPRO");
    cy.get('[data-testid="Conselho Nacional de Justiça"]').should(
      "contain",
      "Conselho Nacional de Justiça"
    );
    cy.get('[data-testid="Tribunal de Justiça"]').should(
      "contain",
      "Tribunal de Justiça"
    );
  });
});
