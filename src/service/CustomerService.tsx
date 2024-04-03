/**
 * Service fournissant des données de clients.
 */
export const CustomerService = {
  /**
   * Obtenir les données des clients.
   * @returns {Array<object>} - Liste des clients avec leurs informations (firstname, department etc..).
   */
  getData(): Array<object> {
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
          name: 'Algeria'
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
          name: 'Egypt'
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
          name: 'Los Angeles'
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
          name: 'Chicago'
        },
        state: 'Illinois',
        zipcode: '60601'
      }
    ];
  },

  /**
   * Obtenir une petite liste de clients.
   * @returns {Promise<Array<object>>} - Liste de clients.
   */
  getCustomersSmall(): Promise<Array<object>> {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  /**
   * Obtenir une liste moyenne de clients.
   * @returns {Promise<Array<object>>} - Liste de clients.
   */
  getCustomersMedium(): Promise<Array<object>> {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  /**
   * Obtenir une grande liste de clients.
   * @returns {Promise<Array<object>>} - Liste de clients.
   */
  getCustomersLarge(): Promise<Array<object>> {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  /**
   * Obtenir une très grande liste de clients.
   * @returns {Promise<Array<object>>} - Liste de clients.
   */
  getCustomersXLarge(): Promise<Array<object>> {
    return Promise.resolve(this.getData());
  },

  /**
   * Obtenir les clients en fonction des paramètres fournis.
   * @param {object} params - Paramètres de requête pour filtrer les clients.
   * @returns {Promise<Array<object>>} - Liste de clients filtrée.
   */
  getCustomers(params: any): Promise<Array<object>> {
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
