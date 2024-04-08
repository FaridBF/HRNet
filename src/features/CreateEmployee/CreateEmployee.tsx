import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { Link } from 'react-router-dom';
import '../CreateEmployee/CreateEmployee.css';

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
// import { Modal } from '../../components/Modal/Modal';
import { useFormData } from '../../context/CreateEmployeeFormContext';
import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican';

// import { Modal } from 'fb-modal-component-library/dist/Modal';
const Modal = require('fb-modal-component-library/dist/Modal');
const closeButtonImg = require('../../assets/closeButton.png');

// ==============================
// LIBRAIRIE MODALE
// ==============================

// import '../../components/Modal/modal.css';

// interface ModalProps {
//   isVisible: boolean;
//   title: string;
//   description?: string;
//   src: string;
//   onClose: () => void;
// }

// /**
//  * Affiche une fenêtre modale avec un message.
//  * @param {object} props - Les propriétés du composant.
//  * @param {function} props.setModalOpen - Fonction pour définir l'état d'ouverture de la modal.
//  */
// const Modal: React.FC<ModalProps> = ({
//   isVisible,
//   title,
//   description,
//   src,
//   onClose
// }) => {
//   if (!isVisible) {
//     return null; // Ne rien rendre si isVisible est à false
//   }

//   return (
//     <div className='modalBackground'>
//       <div className='modalContainer'>
//         <div className='rightPart'>
//           <div className='titleRightPart'>
//             <h1 className='title-employee-created'>{title}</h1>
//             <button className='button' onClick={onClose}>
//               <img src={src} alt='Close Modal' />
//             </button>
//           </div>
//           <div className='descriptionModal'>
//             <p>{description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// ==============================

interface StateOption {
  label: string;
  value: string;
}

const CreateEmployee: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  const data = ListOfStatesAmerican.getData();
  const options: StateOption[] = data.map(({ name }) => ({
    label: name,
    value: name
  }));

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    const {
      firstName,
      lastName,
      department,
      startDate,
      dateOfBirth,
      street,
      city,
      state,
      zipCode
    } = formData;
    setFormValid(
      !!firstName &&
        !!lastName &&
        !!department &&
        !!startDate &&
        !!dateOfBirth &&
        !!street &&
        !!city &&
        !!state &&
        !!zipCode
    );
  }, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleChangeSelect = (value: any) => {
    setFormData({ ...formData, state: value });
  };

  const handleDateChange = (field: string, value: Date) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) {
      alert(
        'Merci de saisir les champs nécesssaires à la validation de ce formulaire.'
      );
      return;
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // document.body.classList.remove('modal-open');
  };

  return (
    <>
      <h2 className='title-create-employee'>Create Employee</h2>
      <form id='create-employee' onSubmit={handleSubmit}>
        <label htmlFor='first-name'>First Name</label>
        <input
          type='text'
          id='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor='last-name'>Last Name</label>
        <input
          type='text'
          id='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor='date-of-birth'>Date of Birth</label>
        <div className='card flex justify-content-center'>
          <Calendar
            value={new Date(formData.dateOfBirth)}
            onChange={(e) => handleDateChange('dateOfBirth', e.value as Date)}
            dateFormat='dd/mm/yy'
          />
        </div>

        <label htmlFor='start-date'> Start Date</label>
        <div className='card flex justify-content-center'>
          <Calendar
            value={formData.startDate ? new Date(formData.startDate) : null}
            onChange={(e) => handleDateChange('startDate', e.value as Date)}
            dateFormat='dd/mm/yy'
          />
        </div>

        <fieldset className='address'>
          <legend>Address</legend>

          <label htmlFor='street'>Street</label>
          <input
            id='street'
            type='text'
            value={formData.street}
            onChange={handleChange}
          />

          <label htmlFor='city'>City</label>
          <input
            id='city'
            type='text'
            value={formData.city}
            onChange={handleChange}
          />
          <label htmlFor='state'>State</label>
          <div className='card flex justify-content-center'>
            <Dropdown
              value={formData.state}
              onChange={(e) => handleChangeSelect(e.value)}
              options={options}
              optionLabel='label'
              placeholder='Select a State'
              className='w-full md:w-14rem'
            />
          </div>

          <label htmlFor='zip-code'>Zip Code</label>
          <input
            id='zipCode'
            type='number'
            value={formData.zipCode}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor='department'>Department</label>
        <select
          name='department'
          id='department'
          value={formData.department}
          onChange={handleChange}
        >
          <option value='Sales'>Sales</option>
          <option value='Marketing'>Marketing</option>
          <option value='Engineering'>Engineering</option>
          <option value='Human Resources'>Human Resources</option>
          <option value='Legal'>Legal</option>
        </select>

        <button
          className='button-submit-create-employee'
          type='submit'
          disabled={!formValid}
        >
          Save
        </button>
      </form>

      <Modal
        title='Employee created'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus elit libero, at finibus dolor auctor id. Aliquam ut lectus vitae odio tincidunt blandit. Vivamus cursus, lorem ut congue rutrum, lectus eros tristique lectus, vitae imperdiet massa purus a orci. Donec nibh'
        src={closeButtonImg}
        isVisible={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CreateEmployee;
