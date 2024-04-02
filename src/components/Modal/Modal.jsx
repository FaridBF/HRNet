import '../Modal/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Affiche une fenêtre modale avec un message.
 * @param {object} props - Les propriétés du composant.
 * @param {function} props.setModalOpen - Fonction pour définir l'état d'ouverture de la modal.
 */
export function Modal({ setModalOpen }) {
  document.body.classList.add('modal-open');

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='rightPart'>
          <div className='titleRightPart'>
            <h1 className='title-employee-created'>Employee Created!</h1>
            <button
              className='button'
              onClick={() => {
                handleCloseModal();
              }}
            >
              <FontAwesomeIcon icon='fa-solid fa-xmark' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
