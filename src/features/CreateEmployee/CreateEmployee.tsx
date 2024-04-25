import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Modal from 'fb-modal-oc-lib';

import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican.min';
import { ListOfDepartment } from '../../service/ListOfDepartment';
import { format } from '../../utils/Format';
import { useFormData } from '../../context/CreateEmployeeFormContext';

import '../../index.scss';

const closeButtonImg = require('../../assets/icons/closeButton.png');

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

interface StateOptions {
  label: string;
  value: string;
}

interface DepartmentOptions {
  label: string;
  value: string;
}

/**
 * Représente un formulaire pour créer un nouvel employé.
 * @returns {JSX.Element} La représentation JSX du formulaire de création d'employé.
 */
const CreateEmployee: React.FC = () => {
  let navigate = useNavigate();
  const { setFormData } = useFormData();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const startDate: Date | null = null;
  const dateOfBirth: Date | null = null;

  const data = ListOfStatesAmerican.getData();
  const stateOptions: StateOptions[] = data.map(({ name }) => ({
    label: name,
    value: name
  }));

  const dataDepartment = ListOfDepartment.getData();
  const departmentOptions: DepartmentOptions[] = dataDepartment.map(
    ({ name }) => ({
      label: name,
      value: name
    })
  );

  /**
   * Gère la soumission du formulaire.
   * @param {FormInput} data - Les données du formulaire.
   */
  const onSubmit = (data: FormInput) => {
    const formattedData = {
      ...data,
      startDate: format(data.startDate),
      dateOfBirth: format(data.dateOfBirth)
    };
    setFormData(formattedData);
    console.log('formattedData', formattedData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/employees');
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
          data-cy='first-name-input'
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
          data-cy='last-name-input'
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
          <Controller
            name='dateOfBirth'
            control={control}
            rules={{ required: 'Date of Birth is required' }}
            render={({ field }) => (
              <Calendar
                inputId='dateOfBirth'
                value={dateOfBirth}
                onChange={(e) => field.onChange(e.value as Date)}
                dateFormat='dd/mm/yy'
                aria-label='Select date of birth'
                data-cy='date-of-birth-calendar'
              />
            )}
          />
          {errors.dateOfBirth && (
            <span
              role='alert'
              aria-live='assertive'
              className='create-employee__error-message'
            >
              {errors.dateOfBirth.message}
            </span>
          )}
        </div>

        {/* Start Date */}
        <label htmlFor='startDate'>Start Date</label>
        <div className='create-employee__card flex justify-content-center'>
          <Controller
            name='startDate'
            control={control}
            rules={{ required: 'startDate is required' }}
            render={({ field }) => (
              <Calendar
                inputId='startDate'
                value={startDate}
                onChange={(e) => field.onChange(e.value)}
                dateFormat='dd/mm/yy'
                aria-label='Select start Date'
                data-cy='start-date-calendar'
              />
            )}
          />
          {errors.startDate && (
            <span
              role='alert'
              aria-live='assertive'
              className='create-employee__error-message'
            >
              {errors.startDate.message}
            </span>
          )}
        </div>

        <fieldset className='create-employee__address'>
          <legend>Address</legend>
          {/* Street */}
          <div className='create-employee__card flex justify-content-center'>
            <label htmlFor='street'>Street</label>
            <input
              id='street'
              data-cy='street-input'
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
              data-cy='city-input'
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
            <Controller
              control={control}
              name='state'
              rules={{ required: 'State is required' }}
              render={({ field }) => (
                <Dropdown
                  inputId='state'
                  value={field.value}
                  onChange={(e) => field.onChange(e.value)}
                  options={stateOptions}
                  placeholder='Select a State'
                  aria-label='Options'
                  data-cy='state-dropdown'
                  className='create-employee__stateOptions'
                />
              )}
            />
          </div>
          {errors.state && (
            <span
              role='alert'
              aria-live='assertive'
              className='create-employee__error-message'
            >
              {errors.state.message}
            </span>
          )}

          {/* Zip Code */}
          <label htmlFor='zipCode'>Zip Code</label>
          <div className='create-employee__card flex justify-content-center'>
            <input
              id='zipCode'
              data-cy='zip-code-input'
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
        <Controller
          name='department'
          control={control}
          rules={{ required: 'Department is required' }}
          render={({ field }) => (
            <Dropdown
              inputId='department'
              value={field.value}
              onChange={(e) => field.onChange(e.value)}
              options={departmentOptions}
              placeholder='Select a Department'
              data-cy='department-select'
              aria-label='department'
              className='create-employee__departmentOptions'
            />
          )}
        />
        {errors.department && (
          <span
            role='alert'
            aria-live='assertive'
            className='create-employee__error-message'
          >
            {errors.department.message}
          </span>
        )}
        <button
          className='create-employee__button-submit'
          type='submit'
          data-cy='submit-button'
        >
          Save
        </button>
      </form>

      <Modal
        isVisible={modalOpen}
        title='Employee created'
        description='The employee is created with the information you entered.
        It can be consulted on the List of all employees page'
        src={closeButtonImg}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CreateEmployee;
