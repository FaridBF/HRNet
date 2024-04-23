import React from 'react';
import { mount } from 'cypress/react18';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import { CreateEmployeeProvider } from '../../context/CreateEmployeeFormContext'; // Importez le fournisseur de contexte

import '../../index.scss';

describe('<Home />', () => {
  beforeEach(() => {
    mount(
      <Router>
        <CreateEmployeeProvider>
          <Home />
        </CreateEmployeeProvider>
      </Router>
    );
  });

  it('renders logo', () => {
    cy.get('[data-cy="home-logo"]').should('exist');
  });

  it('renders CreateEmployee component', () => {
    cy.get('[data-cy="create-employee"]').should('exist');
  });

  it.only('renders View Employees link', () => {
    cy.get('[data-cy="view-employees-link"]').should('exist');
  });

  it.only('redirects to employees page when View Employees link is clicked', () => {
    cy.get('[data-cy="view-employees-link"]').click();
    cy.url().should('include', '/employees');
  });
});
