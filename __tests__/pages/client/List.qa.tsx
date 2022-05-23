describe('List: Integration', () => {
  it('should show delete modal with proper values ', () => {
    cy.visit('http://localhost:3000/system/clients');
    cy.contains('ClientForSarah');
    cy.contains('Delete').click();
    cy.contains('Are you sure you wish to delete ClientForSarah ?');
  });
});

export {};
