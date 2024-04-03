import React, { createContext, useContext, useState, ReactNode } from 'react';
/**
 * Interface pour le formulaire de création d'employé.
 */
interface EmployeeFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

/**
 * Contexte pour le formulaire de création d'employé.
 */
const CreateEmployeeFormContext = createContext<{
  formData: EmployeeFormData;
  setFormData: React.Dispatch<React.SetStateAction<EmployeeFormData>>;
}>({
  formData: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  },
  setFormData: () => {}
});

/**
 * Fournisseur de contexte pour le formulaire de création d'employé.
 * @param props Les propriétés du composant.
 */
export const CreateEmployeeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [createEmployeeForm, setCreateEmployeeForm] =
    useState<EmployeeFormData>({
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

/**
 * Hook permettant l'accès au contexte du formulaire de création d'employé.
 */
export const useFormData = () => useContext(CreateEmployeeFormContext);
