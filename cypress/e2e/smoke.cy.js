describe('smoke test', () => {
  it('shows the page', () => {
    cy.visit('/');
    cy.contains('Home');
  });
});
