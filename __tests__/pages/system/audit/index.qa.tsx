describe('List: Integration', () => {
  it('should show delete modal with proper values ', () => {
    cy.visit('http://localhost:3000/system/auditLog/list');
    cy.contains('System Audit Log');
    cy.contains('uuidOne').click();
    cy.contains('View Debug Audit Logs');
  });
});

export {};
