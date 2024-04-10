import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';

import { CustomerService } from '../../service/CustomerService';

import { useFormData } from '../../context/CreateEmployeeFormContext';
import { format } from '../../utils/Format';

interface Customer {
  id?: number;
  firstname?: string;
  name?: string;
  startdate?: string;
  department?: string;
  date?: string;
  street?: string;
  city?: {
    name: string;
  };
  state?: string;
  zipcode?: string;
}

/**
 * Composant pour afficher la liste des employés.
 * @returns {JSX.Element} - Élément JSX représentant la liste des employés.
 */
function EmployeesList(): JSX.Element {
  const { formData } = useFormData();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);
  const [filters, setFilters] = useState<any>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    'city.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
    }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: Customer[];
        if (
          formData.firstName ||
          formData.lastName ||
          formData.startDate ||
          formData.department ||
          formData.dateOfBirth ||
          formData.street ||
          formData.city ||
          formData.state ||
          formData.zipCode
        ) {
          const response = await CustomerService.getCustomersLarge();
          data = [
            ...response,
            {
              id: response.length + 1,
              firstname: formData.firstName,
              name: formData.lastName,
              startdate: formData.startDate
                ? format(new Date(formData.startDate))
                : null,
              date: formData.dateOfBirth
                ? format(new Date(formData.dateOfBirth))
                : null,
              department: formData.department,
              street: formData.street,
              city: {
                name: formData.city
              },
              state: formData.state,
              zipcode: formData.zipCode
            }
          ];
        } else {
          data = await CustomerService.getCustomersLarge();
        }
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchData();
  }, [formData]);

  /**
   * Gère le changement de valeur du filtre global.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Événement de changement.
   */
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      global: { value, matchMode: FilterMatchMode.CONTAINS }
    }));
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className='flex flex-wrap gap-2 justify-content-between align-items-center'>
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder='Keyword Search'
          />
        </span>
      </div>
    );
  };

  const cityBodyTemplate = (rowData: Customer) => {
    return (
      <div className='flex align-items-center gap-2'>
        <span>{rowData.city?.name}</span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <>
      <div className='homePageLink'>
        <h1 className='title-current-employee'>Current Employees</h1>
        <Link to='/'>Home</Link>
      </div>
      <div className='card-current-employee'>
        <DataTable
          value={customers}
          paginator
          header={header}
          rows={10}
          paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
          rowsPerPageOptions={[10, 25, 50]}
          dataKey='id'
          selectionMode='checkbox'
          selection={selectedCustomers}
          onSelectionChange={(e) => setSelectedCustomers(e.value)}
          filters={filters}
          filterDisplay='menu'
          globalFilterFields={[
            'name',
            'city.name',
            'firstname',
            'startdate',
            'department',
            'date',
            'street',
            'city',
            'state',
            'zipcode'
          ]}
          emptyMessage='No customers found.'
          currentPageReportTemplate='Showing {first} to {last} of {totalRecords} entries'
        >
          <Column headerStyle={{ width: '3rem' }}></Column>
          <Column
            field='firstname'
            header='Firstname'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='name'
            header='Name'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='startdate'
            header='Start Date'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='department'
            header='Department'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='date'
            header='Date'
            sortable
            style={{ minWidth: '10rem' }}
          />
          <Column
            field='street'
            header='Street'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='city.name'
            header='City'
            sortable
            filterField='city.name'
            style={{ minWidth: '10rem' }}
            body={cityBodyTemplate}
          />
          <Column
            field='state'
            header='State'
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column
            field='zipcode'
            header='ZipCode'
            sortable
            style={{ minWidth: '8rem' }}
          />
        </DataTable>
      </div>
    </>
  );
}

export default EmployeesList;
