import React, { useState } from 'react';
import { mount } from '@cypress/react';
import Modal from './Modal';

import '../../index.scss';

const defaultImageCloseModal = require('../../assets/icons/defaultImageCloseModal.png');
const closeButtonImg = require('../../assets/icons/closeButton.png');

// Composant temporaire intermédiaire pour tester
function TestComponent({
  title = 'Employee created',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}) {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title={title}
      description={description}
      isVisible={modalOpen}
      onClose={handleCloseModal}
      src={closeButtonImg}
    />
  );
}

interface DefaultProps {
  title: string;
  description: string;
}

describe('<Modal />', () => {
  let defaultProps: DefaultProps;

  beforeEach(() => {
    defaultProps = {
      title: 'Employee created',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
  });

  it('renders with default props', () => {
    mount(<TestComponent {...defaultProps} />);
    cy.get('[data-cy="modal"]').should('exist');
    cy.get('[data-cy="modal-title"]').should('contain', defaultProps.title);
    cy.get('[data-cy="modal-description"]').should(
      'contain',
      defaultProps.description
    );
  });

  it('is initially visible', () => {
    mount(<TestComponent {...defaultProps} />);
    cy.get('[data-cy="modal"]').should('be.visible');
  });

  it('closes when the close button is clicked', () => {
    mount(<TestComponent {...defaultProps} />);
    cy.get('[data-cy="close-button"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });

  it('updates when props change', () => {
    const updatedProps = {
      title: 'Employee updated',
      description: 'Updated description.'
    };

    mount(<TestComponent {...defaultProps} />);
    cy.get('[data-cy="modal-title"]').should('contain', defaultProps.title);
    cy.get('[data-cy="modal-description"]').should(
      'contain',
      defaultProps.description
    );

    mount(<TestComponent {...updatedProps} />);
    cy.get('[data-cy="modal-title"]').should('contain', updatedProps.title);
    cy.get('[data-cy="modal-description"]').should(
      'contain',
      updatedProps.description
    );
  });

  it('renders with missing props', () => {
    const missingProps: DefaultProps = {
      title: 'Default Title',
      description: 'Default description.'
    };

    mount(
      <Modal
        isVisible={true}
        onClose={() => {}}
        title={missingProps.title}
        description={missingProps.description}
        src={defaultImageCloseModal}
      />
    );
    cy.get('[data-cy="modal"]').should('exist');
    cy.get('[data-cy="modal-title"]').should('contain', missingProps.title);
    cy.get('[data-cy="modal-description"]').should(
      'contain',
      missingProps.description
    );
  });
});
