import '../Modal/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <h1>Employee Created!</h1>
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
