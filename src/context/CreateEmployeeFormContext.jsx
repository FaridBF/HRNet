import React, { createContext, useContext, useState } from 'react';

const CreateEmployeeFormContext = createContext();

export const CreateEmployeeProvider = ({ children }) => {
  const [createEmployeeForm, setCreateEmployeeForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales'
  });

  return (
    <CreateEmployeeFormContext.Provider
      value={{
        formData: createEmployeeForm,
        setFormData: setCreateEmployeeForm
      }}
    >
      {children}
    </CreateEmployeeFormContext.Provider>
  );
};

export const useFormData = () => useContext(CreateEmployeeFormContext);
