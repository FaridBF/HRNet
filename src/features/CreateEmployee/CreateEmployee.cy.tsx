import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';

import CreateEmployee from './CreateEmployee';
import { CreateEmployeeProvider } from '../../context/CreateEmployeeFormContext';

import '../../index.scss';

describe('<CreateEmployee />', () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <CreateEmployeeProvider>
          <CreateEmployee />
        </CreateEmployeeProvider>
      </MemoryRouter>
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

  it('submits form', () => {
    cy.get('[data-cy=first-name-input]').type('John');
    cy.get('[data-cy=last-name-input]').type('Doe');
    cy.get('[data-cy=date-of-birth-calendar]').click();
    cy.wait(500); // Attendre que le datepicker soit visible
    cy.get('.p-datepicker').find('.p-datepicker-today').click();

    // Sélection de la date de début
    // cy.get('[data-cy=start-date-calendar]').type('13/05/2024');
    // cy.get('.p-datepicker').find('.p-datepicker-today').click();

    cy.get('[data-cy=start-date-calendar]').click();
    cy.get('.p-datepicker').should('be.visible');
    cy.wait(500); // Attendre que le datepicker soit visible
    cy.get('.p-datepicker')
      .find('.p-datepicker-today')
      .should('be.visible')
      .click();

    cy.get('[data-cy=street-input]').type('123 Main St');
    cy.get('[data-cy=city-input]').type('Anytown');
    cy.get('[data-cy=state-dropdown]').click();
    cy.get('.p-dropdown-items').contains('Texas').click();

    cy.get('[data-cy=department-select]').click();
    cy.get('.p-dropdown-items').contains('Engineering').click();

    cy.get('[data-cy=zip-code-input]').type('12345');

    // Soumission du formulaire
    cy.get('[data-cy=submit-button]').click();

    // Vérification de l'affichage de la modale après la soumission du formulaire
    cy.contains('h1', 'Employee created').should('exist');
  });
});
