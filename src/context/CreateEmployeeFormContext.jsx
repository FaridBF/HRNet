import React, { createContext, useContext, useState } from 'react';

/**
 * Contexte pour le formulaire de création d'employé.
 * @type {React.Context<object>}
 */
const CreateEmployeeFormContext = createContext();

/**
 * Fournisseur de contexte pour le formulaire de création d'employé.
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les éléments enfants
 */
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
    department: ''
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
