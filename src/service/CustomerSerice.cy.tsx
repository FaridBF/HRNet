// import { CustomerService } from './CustomerService';

// describe('CustomerService', () => {
//   it('getData() should return an array of customers', () => {
//     const customers = CustomerService.getData();
//     expect(customers[0]).to.have.property('id');
//     expect(customers[0]).to.have.property('firstname');
//     expect(customers[0]).to.have.property('department');
//   });

//   it('getCustomersSmall() should return a small list of customers', () => {
//     CustomerService.getCustomersSmall().then((customers) => {
//       expect(customers).to.have.lengthOf.at.most(10);
//     });
//   });

//   it('getCustomersMedium() should return a medium list of customers', () => {
//     CustomerService.getCustomersMedium().then((customers) => {
//       expect(customers).to.have.lengthOf.at.most(50);
//     });
//   });

//   it('getCustomersLarge() should return a large list of customers', () => {
//     CustomerService.getCustomersLarge().then((customers) => {
//       expect(customers).to.have.lengthOf.at.most(200);
//     });
//   });

//   it('getCustomersXLarge() should return an extra large list of customers', () => {
//     CustomerService.getCustomersXLarge().then((customers) => {
//       expect(customers).to.have.lengthOf.at.least(200);
//     });
//   });

//   it('getCustomers() should return filtered customers based on provided parameters', () => {
//     const params = { department: 'Sales' };
//     CustomerService.getCustomers(params).then((customers) => {
//       customers.forEach((customer: any) => {
//         expect(customer.department).to.equal(params.department);
//       });
//     });
//   });
// });
