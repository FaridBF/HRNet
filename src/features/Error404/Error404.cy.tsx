import React from 'react';
import { mount } from 'cypress/react18';
import { BrowserRouter as Router } from 'react-router-dom';

import Error404 from './Error404';

import '../../index.scss';

describe('<Error404 />', () => {
  it('renders', () => {
    mount(
      <Router>
        <Error404 />
      </Router>
    );

    cy.get('[data-cy="error404-container"]').should('exist');
    cy.get('[data-cy="error404-title"]').should('contain', 'Error 404');
    cy.get('[data-cy="error404-description"]').should(
      'contain',
      'Sorry! This page does not exist.'
    );
    cy.get('[data-cy="error404-link"]').should('have.attr', 'href', '/');
  });

  it('navigates back to home page when link is clicked', () => {
    mount(
      <Router>
        <Error404 />
      </Router>
    );

    cy.get('[data-cy="error404-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
