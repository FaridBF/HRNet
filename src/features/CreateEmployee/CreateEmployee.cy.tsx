import React from 'react';
import { mount } from 'cypress/react18';

import CreateEmployee from './CreateEmployee';
import { CreateEmployeeProvider } from '../../context/CreateEmployeeFormContext';
import '../../index.scss';

describe('<CreateEmployee />', () => {
  beforeEach(() => {
    mount(
      <CreateEmployeeProvider>
        <CreateEmployee />
      </CreateEmployeeProvider>
    );
  });

  it('renders', () => {
    cy.contains('h1', 'Create Employee').should('exist');
    cy.get('[data-cy=first-name-input]').should('exist');
    cy.get('[data-cy=last-name-input]').should('exist');
    cy.get('[data-cy=date-of-birth-calendar]').should('exist');
    cy.get('[data-cy=start-date-calendar]').should('exist');
    cy.get('[data-cy=street-input]').should('exist');
    cy.get('[data-cy=city-input]').should('exist');
    cy.get('[data-cy=department-select]').should('exist');
    cy.get('[data-cy=zip-code-input]').should('exist');
    cy.get('[data-cy=submit-button]').should('exist');
  });

  it.only('submits form', () => {
    cy.get('[data-cy=first-name-input]').type('John');
    cy.get('[data-cy=last-name-input]').type('Doe');
    cy.get('[data-cy=date-of-birth-calendar]').click();
    cy.get('.p-datepicker').find('.p-datepicker-today').click();

    // Sélection de la date de début
    cy.get('[data-cy=start-date-calendar]').click({ force: true });
    cy.get('.p-datepicker').find('.p-datepicker-today').click();
    cy.get('[data-cy=street-input]').type('123 Main St');
    cy.get('[data-cy=city-input]').type('Anytown');
    cy.get('[data-cy=state-dropdown]').click();
    cy.get('.p-dropdown-items').contains('Texas').click();

    cy.get('[data-cy=department-select]').select('Engineering');
    cy.get('[data-cy=zip-code-input]').type('12345');

    // Soumission du formulaire
    cy.get('[data-cy=submit-button]').click();

    // Vérification de l'affichage de la modale après la soumission du formulaire
    cy.contains('h1', 'Employee created').should('exist');
    cy.contains(
      'p',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ).should('exist');
  });
});

//cy.get('input#dateOfBirth').click();
//     console.log(
//       'here',
//       document.querySelectorAll(
//         '.p-datepicker tr:nth-of-type(2) td:nth-of-type(1) span'
//       )
//     );
//     cy.get('.p-datepicker tr:nth-of-type(2) td:nth-of-type(1) span').click();
//     // cy.contains('.p-inputtext p-component p-filled', '1').click();
//     // cy.get('.p-inputtext p-component p-filled').type('01/01/1990');
