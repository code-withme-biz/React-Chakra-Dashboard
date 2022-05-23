import { mount } from '@cypress/react';
import { DataTable } from 'components';
import 'ions/locale/internationalization';

describe('DataTable: Integration', () => {
  // TODO: Get rid of this, it's a template to check functionality.
  it('should have tabs', () => {
    mount(
      <DataTable
        columns={[
          { Header: 'id', accessor: 'id' },
          { Header: 'name', accessor: 'name' }
        ]}
        data={[{ id: 52, name: 'ClientForSarah', numberOfCoBrands: 7 }]}
      />
    );

    cy.contains('id');
    cy.contains('name');
  });
});
