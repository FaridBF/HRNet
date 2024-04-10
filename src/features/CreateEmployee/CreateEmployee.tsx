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
      <h2 className='create-employee__title'>Create Employee</h2>

      <form id='create-employee' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='firstName'>First Name</label>
        <input
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
          <span className='create-employee__error-message'>
            {errors.firstName.message}
          </span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
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
          <span className='create-employee__error-message'>
            {errors.lastName.message}
          </span>
        )}

        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <div className='create-employee__card flex justify-content-center'>
          <Calendar
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.value as Date)}
            dateFormat='dd/mm/yy'
          />
          {errors.dateOfBirth && <span>{`Date of Birth is required`}</span>}
        </div>

        <label htmlFor='startDate'>Start Date</label>
        <div className='create-employee__card flex justify-content-center'>
          <Calendar
            value={startDate}
            onChange={(e) => setStartDate(e.value as Date)}
            dateFormat='dd/mm/yy'
          />
          {errors.startDate && <span>{`Start Date is required`}</span>}
        </div>

        <fieldset className='create-employee__address'>
          <legend>Address</legend>

          <div className='create-employee__card flex justify-content-center'>
            <label htmlFor='street'>Street</label>
            <input
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
              <span className='create-employee__error-message'>
                {errors.street.message}
              </span>
            )}
          </div>

          <div className='create-employee__card flex justify-content-center'>
            <label htmlFor='city'>City</label>
            <input
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
              <span className='create-employee__error-message'>
                {errors.city.message}
              </span>
            )}
          </div>

          <label htmlFor='state'>State</label>
          <div className='create-employee__card flex justify-content-center'>
            <Dropdown
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              options={options}
              placeholder='Select a State'
              className='create-employee__dropdown'
            />
          </div>
          <label htmlFor='zipCode'>Zip Code</label>
          <div className='create-employee__card flex justify-content-center'>
            <input
              {...register('zipCode', {
                required: 'Zip Code is required',
                pattern: {
                  value: /^\d{5}(?:[-\s]\d{4})?$/,
                  message: 'Invalid Zip Code format'
                }
              })}
            />
            {errors.zipCode && (
              <span className='create-employee__error-message'>
                {errors.zipCode.message}
              </span>
            )}
          </div>
        </fieldset>

        <label htmlFor='department'>Department</label>
        <select {...register('department', { required: true })}>
          <option value=''>Select a department</option>
          <option value='Sales'>Sales</option>
          <option value='Marketing'>Marketing</option>
          <option value='Engineering'>Engineering</option>
          <option value='Human Resources'>Human Resources</option>
          <option value='Legal'>Legal</option>
        </select>
        {errors.department && (
          <span className='create-employee__error-message'>{`Department is required`}</span>
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
