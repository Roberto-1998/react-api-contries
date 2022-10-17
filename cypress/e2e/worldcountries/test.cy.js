/*  global describe, it, cy */

describe('WorldCountries', () => {
  it('Make sure the app is working', () => {
    cy.visit('/');
  });

  it('Check if images are displaying ', () => {
    cy.visit('/');
    cy.get('img');
  });

  it('Check if input search is working', () => {
    cy.get('[data-cy="search"]')
      .type('holamundo')
      .should('have.value', 'holamundo');
  });
});
