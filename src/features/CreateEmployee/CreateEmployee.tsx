import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { Link } from 'react-router-dom';
import '../CreateEmployee/CreateEmployee.css';

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Modal } from '../../components/Modal/Modal';
import { useFormData } from '../../context/CreateEmployeeFormContext';
import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican';

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

      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default CreateEmployee;
