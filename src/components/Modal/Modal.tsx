import React from 'react';

interface ModalProps {
  isVisible: boolean;
  title: string;
  description?: string;
  src: string;
  onClose: () => void;
}

/**
 * Affiche une fenêtre modale avec un message.
 * @param {object} props - Les propriétés du composant.
 * @param {function} props.setModalOpen - Fonction pour définir l'état d'ouverture de la modal.
 */
export const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  description,
  src,
  onClose
}) => {
  if (!isVisible) {
    return null; // Ne rien rendre si isVisible est à false
  }

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__right-part'>
          <div className='modal__title-right-part'>
            <h1 className='modal__title'>{title}</h1>
            <button className='modal__close-button' onClick={onClose}>
              <img className='modal__close-img' src={src} alt='Close Modal' />
            </button>
          </div>
          <div className='modal__description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
