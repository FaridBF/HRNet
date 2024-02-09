import React, { useState } from 'react';

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

import { Modal } from '../../components/Modal/Modal';
import { ListOfStatesAmerican } from '../../service/ListOfStatesAmerican';

function CreateEmployee() {
  const [date, setDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const data = ListOfStatesAmerican.getData();

  // TODO: doc
  // TODO: add JSON data for 'states'
  // TODO: display JSON data into states
  // TODO: use React Hook Form

  return (
    <>
      <h2>Create Employee</h2>
      <form action='#' id='create-employee'>
        <label htmlFor='first-name'>First Name</label>
        <input type='text' id='first-name' />

        <label htmlFor='last-name'>Last Name</label>
        <input type='text' id='last-name' />

        <label htmlFor='date-of-birth'>Date of Birth</label>
        <div className='card flex justify-content-center'>
          <Calendar
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.value)}
            dateFormat='dd/mm/yy'
          />
        </div>
        <label htmlFor='start-date'> Start Date</label>
        <div className='card flex justify-content-center'>
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            dateFormat='dd/mm/yy'
          />
        </div>
        <fieldset className='address'>
          <legend>Address</legend>

          <label htmlFor='street'>Street</label>
          <input id='street' type='text' />

          <label htmlFor='city'>City</label>
          <input id='city' type='text' />

          <label htmlFor='state'>State</label>

          <div className='card flex justify-content-center'>
            <Dropdown
              value={selectedState}
              onChange={(e) => setSelectedState(e.value)}
              options={data}
              optionLabel='name'
              placeholder='Select a State'
              className='w-full md:w-14rem'
            />
          </div>
          <label htmlFor='zip-code'>Zip Code</label>
          <input id='zip-code' type='number' />
        </fieldset>

        <label htmlFor='department'>Department</label>
        <select name='department' id='department'>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick={setModalOpen}>Save</button>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} />
      )}
      {/* <button onclick="saveEmployee()">Save</button> */}
    </>
  );
}

export default CreateEmployee;
