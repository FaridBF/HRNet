// import React from 'react';
// import { mount } from 'cypress/react18';
// import { BrowserRouter as Router } from 'react-router-dom';

// import EmployeesList from './EmployeesList';
// import { CreateEmployeeProvider } from '../../context/CreateEmployeeFormContext';

// import '../../index.scss';

// describe('<EmployeesList />', () => {
//   beforeEach(() => {
//     mount(
//       <Router>
//         <CreateEmployeeProvider>
//           <EmployeesList />
//         </CreateEmployeeProvider>
//       </Router>
//     );
//   });

//   it('renders', () => {
//     cy.get('[data-cy=employee-data-table]').should('exist');
//     cy.get('[data-cy=home-link]').should('exist');
//     cy.get('[data-cy=global-filter-input]').should('exist');
//   });

//   it('displays all data columns', () => {
//     cy.get('.p-datatable-thead > tr > :nth-child(1)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(2)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(3)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(4)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(5)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(6)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(7)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(8)').should('exist');
//     cy.get('.p-datatable-thead > tr > :nth-child(9)').should('exist');
//   });

//   it('checks text of fields in the first row of each column', () => {
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(1)')
//       .should('exist')
//       .contains('James');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(2)')
//       .should('exist')
//       .contains('Butt');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(3)')
//       .should('exist')
//       .contains('2015-09-13');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(4)')
//       .should('exist')
//       .contains('Sales');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(5)')
//       .should('exist')
//       .contains('2015-09-13');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(6)')
//       .should('exist')
//       .contains('123 Main Street');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(7)')
//       .should('exist')
//       .contains('Algeria');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(8)')
//       .should('exist')
//       .contains('Algiers');
//     cy.get('.p-datatable-tbody > [tabindex="0"] > :nth-child(9)')
//       .should('exist')
//       .contains('12345');
//   });

//   it('filters data correctly', () => {
//     cy.get('[data-cy=global-filter-input]').type('John');
//     cy.contains('td', 'John').should('exist');
//     cy.contains('td', 'Doe').should('not.exist');
//   });

//   it('paginates data correctly', () => {
//     cy.get('.p-paginator-page').should('exist').contains('1');
//   });
// });
