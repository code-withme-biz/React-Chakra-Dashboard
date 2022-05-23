describe('App: QA', () => {
  it('should render', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New Accounts App');
  });
});

export {};
