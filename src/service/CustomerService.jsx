export const CustomerService = {
  getData() {
    return [
      {
        id: 1000,
        firstname: 'James',
        department: 'Sales',
        startdate: '2015-09-13',
        date: '2015-09-13',
        street: '123 Main Street',
        name: 'Butt',
        city: {
          name: 'Algeria',
          code: 'dz'
        },

        state: 'Algiers',
        zipcode: '12345'
      },
      {
        id: 1001,
        firstname: 'Josephine',
        department: 'Marketing',
        startdate: '2019-02-09',
        date: '2016-09-13',
        street: '456 Elm Street',
        name: 'Darakjy',
        city: {
          name: 'Egypt',
          code: 'eg'
        },
        state: 'Cairo',
        zipcode: '67890'
      },
      {
        id: 1003,
        firstname: 'Sarah',
        department: 'IT',
        startdate: '2020-10-15',
        date: '2018-09-13',
        street: '101 Pine Road',
        name: 'Johnson',
        city: {
          name: 'Los Angeles',
          code: 'la'
        },
        state: 'California',
        zipcode: '90001'
      },
      {
        id: 1004,
        firstname: 'Emily',
        department: 'Sales',
        startdate: '2017-12-03',
        date: '2019-09-13',
        street: '202 Maple Lane',
        name: 'Williams',
        city: {
          name: 'Chicago',
          code: 'chi'
        },
        state: 'Illinois',
        zipcode: '60601'
      }
    ];
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
          )
          .join('&')
      : '';

    return fetch(
      'https://www.primefaces.org/data/customers?' + queryParams
    ).then((res) => res.json());
  }
};
