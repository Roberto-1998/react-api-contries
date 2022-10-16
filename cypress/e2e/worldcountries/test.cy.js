/*  global describe, it, cy */

describe('WorldCountries', () => {
  it('Make sure the app is working', () => {
    cy.visit('/');
  });

  it('Check if images are displaying ', () => {
    cy.visit('/');
    cy.get('img');
  });
});
