import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Modal } from '../../components/Modal/Modal';
import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican';

import { useFormData } from '../../components/FormDataContext';

function CreateEmployee() {
  const { formData, setFormData } = useFormData();

  console.log('formData CreateEmployee', formData);
  const [modalOpen, setModalOpen] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const data = ListOfStatesAmerican.getData();

  const options = data.map(({ name, code }) => ({ label: name, value: code }));

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    const {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode
    } = formData;
    setFormValid(
      firstName &&
        lastName &&
        dateOfBirth &&
        startDate &&
        street &&
        city &&
        state &&
        zipCode
    );
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDateChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) {
      alert(
        'Merci de saisir les champs nécesssaires à la validation de ce formulaire.'
      );
      return;
    }
    console.log(formData);
    setModalOpen(true);
  };

  return (
    <>
      <h2>Create Employee</h2>
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
            value={formData.dateOfBirth}
            onChange={(e) => handleDateChange('dateOfBirth', e.value)}
            dateFormat='dd/mm/yy'
          />
        </div>

        <label htmlFor='start-date'> Start Date</label>
        <div className='card flex justify-content-center'>
          <Calendar
            value={formData.startDate}
            onChange={(e) => handleDateChange('startDate', e.value)}
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
              onChange={(e) => handleDateChange('state', e.value)}
              // options={data}
              options={options}
              optionLabel='label'
              // optionLabel='name'
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
        {/* <button type='submit'>Save</button> */}
        <Link to='/employees'>
          <button type='submit' disabled={!formValid}>
            Save
          </button>
        </Link>
      </form>

      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
}

export default CreateEmployee;
