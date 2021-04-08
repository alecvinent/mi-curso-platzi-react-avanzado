describe('Petgram', function () {
  it('para ver si funciona', function () {
    cy.visit("/");
  });

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  });

  it('si podemos navegar con el menu al home', function () {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('los usuarios no registrados ven 2 formularios al ir a la pagina de favoritos', function () {
    cy.visit('/login');
    cy.get('form').should('have.length', 2);
  });
});
