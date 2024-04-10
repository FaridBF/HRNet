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
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='rightPart'>
          <div className='titleRightPart'>
            <h1 className='title-employee-created'>{title}</h1>
            <button className='button' onClick={onClose}>
              <img className='img-closeModal' src={src} alt='Close Modal' />
            </button>
          </div>
          <div className='descriptionModal'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
