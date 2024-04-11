import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Modal from '../../components/Modal/Modal';
import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican';
import { format } from '../../utils/Format';
import { useFormData } from '../../context/CreateEmployeeFormContext';

const closeButtonImg = require('../../assets/closeButton.png');

interface FormInput {
  firstName: string;
  lastName: string;
  department: string;
  startDate: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface StateOption {
  label: string;
  value: string;
}

/**
 * Représente un formulaire pour créer un nouvel employé.
 * @returns {JSX.Element} La représentation JSX du formulaire de création d'employé.
 */
const CreateEmployee: React.FC = () => {
  const { setFormData } = useFormData();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');

  const data = ListOfStatesAmerican.getData();
  const options: StateOption[] = data.map(({ name }) => ({
    label: name,
    value: name
  }));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();

  /**
   * Gère la soumission du formulaire.
   * @param {FormInput} data - Les données du formulaire.
   */
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const formDataWithState = {
      ...data,
      state: selectedState,
      startDate: format(startDate),
      dateOfBirth: format(dateOfBirth)
    };
    setFormData(formDataWithState);
    console.log('formDataWithState', formDataWithState);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1 className='create-employee__title' aria-label='Create Employee'>
        Create Employee
      </h1>
      <form id='create-employee' onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          {...register('firstName', {
            required: 'First Name is required',
            minLength: {
              value: 2,
              message: 'First Name should have at least 2 characters'
            },
            maxLength: {
              value: 20,
              message: 'First Name should not exceed 20 characters'
            }
          })}
        />
        {errors.firstName && (
          <span
            role='alert'
            aria-live='assertive'
            className='create-employee__error-message'
          >
            {errors.firstName.message}
          </span>
        )}

        {/* Last Name */}
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          {...register('lastName', {
            required: 'Last Name is required',
            minLength: {
              value: 2,
              message: 'Last Name should have at least 2 characters'
            },
            maxLength: {
              value: 20,
              message: 'Last Name should not exceed 20 characters'
            }
          })}
        />
        {errors.lastName && (
          <span
            role='alert'
            aria-live='assertive'
            className='create-employee__error-message'
          >
            {errors.lastName.message}
          </span>
        )}

        {/* Date of Birth */}
        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <div className='create-employee__card flex justify-content-center'>
          <Calendar
            inputId='dateOfBirth'
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.value as Date)}
            dateFormat='dd/mm/yy'
            aria-label='Select date of birth'
          />
          {errors.dateOfBirth && (
            <span role='alert' aria-live='assertive'>
              {`Date of Birth is required`}
            </span>
          )}
        </div>

        {/* Start Date */}
        <label htmlFor='startDate'>Start Date</label>
        <div className='create-employee__card flex justify-content-center'>
          <Calendar
            inputId='startDate'
            value={startDate}
            onChange={(e) => setStartDate(e.value as Date)}
            dateFormat='dd/mm/yy'
            aria-label='Select start Date'
          />
          {errors.startDate && (
            <span
              role='alert'
              aria-live='assertive'
            >{`Start Date is required`}</span>
          )}
        </div>

        <fieldset className='create-employee__address'>
          <legend>Address</legend>
          {/* Street */}
          <div className='create-employee__card flex justify-content-center'>
            <label htmlFor='street'>Street</label>
            <input
              id='street'
              {...register('street', {
                required: 'Street is required',
                minLength: {
                  value: 3,
                  message: 'Street must be at least 3 characters long'
                },
                maxLength: {
                  value: 100,
                  message: 'Street must not exceed 100 characters'
                }
              })}
            />
            {errors.street && (
              <span
                role='alert'
                aria-live='assertive'
                className='create-employee__error-message'
              >
                {errors.street.message}
              </span>
            )}
          </div>

          {/* City */}
          <div className='create-employee__card flex justify-content-center'>
            <label htmlFor='city'>City</label>
            <input
              id='city'
              {...register('city', {
                required: 'City is required',
                minLength: {
                  value: 2,
                  message: 'City should have at least 2 characters'
                },
                maxLength: {
                  value: 50,
                  message: 'City should not exceed 50 characters'
                }
              })}
            />
            {errors.city && (
              <span
                role='alert'
                aria-live='assertive'
                className='create-employee__error-message'
              >
                {errors.city.message}
              </span>
            )}
          </div>

          {/* State */}
          <label htmlFor='state'>State</label>
          <div className='create-employee__card flex justify-content-center'>
            <Dropdown
              inputId='state'
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              options={options}
              placeholder='Select a State'
              className='create-employee__dropdown'
              aria-label='Options'
              aria-controls='dropdown-list'
            />
          </div>

          {/* Zip Code */}
          <label htmlFor='zipCode'>Zip Code</label>
          <div className='create-employee__card flex justify-content-center'>
            <input
              id='zipCode'
              {...register('zipCode', {
                required: 'Zip Code is required',
                pattern: {
                  value: /^\d{5}(?:[-\s]\d{4})?$/,
                  message: 'Invalid Zip Code format'
                }
              })}
            />
            {errors.zipCode && (
              <span
                role='alert'
                aria-live='assertive'
                className='create-employee__error-message'
              >
                {errors.zipCode.message}
              </span>
            )}
          </div>
        </fieldset>

        {/* Department */}
        <label htmlFor='department'>Department</label>
        <select id='department' {...register('department', { required: true })}>
          <option value=''>Select a department</option>
          <option value='Sales'>Sales</option>
          <option value='Marketing'>Marketing</option>
          <option value='Engineering'>Engineering</option>
          <option value='Human Resources'>Human Resources</option>
          <option value='Legal'>Legal</option>
        </select>
        {errors.department && (
          <span
            role='alert'
            aria-live='assertive'
            className='create-employee__error-message'
          >{`Department is required`}</span>
        )}

        <button className='create-employee__button-submit' type='submit'>
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
