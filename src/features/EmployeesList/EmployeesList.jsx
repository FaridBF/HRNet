import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/saga-blue/theme.css';

import { CustomerService } from '../../service/CustomerService';

import '../EmployeesList/EmployeesList.css';

import { useFormData } from '../../context/CreateEmployeeFormContext.jsx';
import { format } from '../../utils/Format.jsx';

function EmployeesList() {
  const { formData } = useFormData();
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [filters, setFilters] = useState({
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
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  useEffect(() => {
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
      CustomerService.getCustomersLarge().then((data) => {
        const customerWithFormData = {
          id: data.length + 1,
          firstname: formData.firstName,
          name: formData.lastName,
          startdate: formData.startDate ? format(formData.startDate) : null,
          department: formData.department,
          date: formData.dateOfBirth ? format(formData.dateOfBirth) : null,
          street: formData.street,
          city: {
            name: formData.city
          },
          state: formData.state,
          zipcode: formData.zipCode
        };
        const updatedCustomers = [...data, customerWithFormData];
        setCustomers(updatedCustomers);
      });
    } else {
      CustomerService.getCustomersLarge().then((data) => {
        setCustomers(data);
      });
    }
  }, [formData]);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
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

  const cityBodyTemplate = (rowData) => {
    return (
      <div className='flex align-items-center gap-2'>
        <span>{rowData.city.name}</span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <>
      <h1 className='title-current-employee'>Current Employees</h1>
      <div className='card'>
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
            'zipCode'
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
      <div className='homePageLink'>
        <Link to='/'>Home</Link>
      </div>
      {/* 
      {formData && (
        <ul>
          <li>First Name: {formData.firstName}</li>
          <li>Last Name: {formData.lastName}</li>
          <li>
            Date of Birth:{' '}
            {formData.dateOfBirth ? format(formData.dateOfBirth) : ''}
          </li>
          <li>
            startDate: {formData.startDate ? format(formData.startDate) : ''}
          </li>
          <li>street: {formData.street}</li>
          <li>city: {formData.city}</li>
          <li>state: {formData.state}</li>
          <li>zipCode: {formData.zipCode}</li>

          <li>department: {formData.department}</li>
        </ul>
      )} */}
    </>
  );
}

export default EmployeesList;
