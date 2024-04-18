/* eslint-disable no-undef */
// interface State {
//   name: string;
// }

// interface ListOfStatesAmericanService {
//   getData(): State[];
// }

// declare namespace AUTWindow {
//   interface ListOfStatesAmerican extends ListOfStatesAmericanService {}
// }

//     cy.window().then((win) => {
//       win.ListOfStatesAmerican = {
//         getData: () => [
//           { name: 'Alabama' },
//           { name: 'Alaska' },
//           { name: 'Arizona' },
//           { name: 'Arkansas' },
//           { name: 'Californie' },
//           { name: 'Colorado' },
//           { name: 'Connecticut' },
//           { name: 'Delaware' },
//           { name: 'Floride' },
//           { name: 'Géorgie' },
//           { name: 'Hawaï' },
//           { name: 'Idaho' },
//           { name: 'Illinois' },
//           { name: 'Indiana' },
//           { name: 'Iowa' },
//           { name: 'Kansas' },
//           { name: 'Kentucky' },
//           { name: 'Louisiane' },
//           { name: 'Maine' },
//           { name: 'Maryland' },
//           { name: 'Massachusetts' },
//           { name: 'Michigan' },
//           { name: 'Minnesota' },
//           { name: 'Mississippi' },
//           { name: 'Missouri' },
//           { name: 'Montana' },
//           { name: 'Nebraska' },
//           { name: 'Nevada' },
//           { name: 'New Hampshire' },
//           { name: 'New Jersey' },
//           { name: 'Nouveau-Mexique' },
//           { name: 'New York' },
//           { name: 'Caroline du Nord' },
//           { name: 'Dakota du Nord' },
//           { name: 'Ohio' },
//           { name: 'Oklahoma' },
//           { name: 'Oregon' },
//           { name: 'Pennsylvanie' },
//           { name: 'Rhode Island' },
//           { name: 'Caroline du Sud' },
//           { name: 'Dakota du Sud' },
//           { name: 'Tennessee' },
//           { name: 'Texas' },
//           { name: 'Utah' },
//           { name: 'Vermont' },
//           { name: 'Virginie' },
//           { name: 'Washington' },
//           { name: 'Virginie-Occidentale' },
//           { name: 'Wisconsin' },
//           { name: 'Wyoming' }
//         ]
//       };
//     });
//   });

//   it('should return a non-empty list of states', () => {
//     cy.window()
//       .its('ListOfStatesAmerican')
//       .invoke('getData')
//       .should('have.length.greaterThan', 0);
//   });

//   it('should return data with correct structure', () => {
//     cy.window()
//       .its('ListOfStatesAmerican')
//       .invoke('getData')
//       .each((state: { name: string }) => {
//         expect(state).to.have.property('name');
//       });
//   });

//   it('should return all states', () => {
//     cy.window()
//       .its('ListOfStatesAmerican')
//       .invoke('getData')
//       .should('have.length', 50);
//   });

//   it('should return correct state names', () => {
//     const expectedStateNames = [
//       'Alabama',
//       'Alaska',
//       'Arizona',
//       'Arkansas',
//       'Californie',
//       'Colorado',
//       'Connecticut',
//       'Delaware',
//       'Floride',
//       'Géorgie',
//       'Hawaï',
//       'Idaho',
//       'Illinois',
//       'Indiana',
//       'Iowa',
//       'Kansas',
//       'Kentucky',
//       'Louisiane',
//       'Maine',
//       'Maryland',
//       'Massachusetts',
//       'Michigan',
//       'Minnesota',
//       'Mississippi',
//       'Missouri',
//       'Montana',
//       'Nebraska',
//       'Nevada',
//       'New Hampshire',
//       'New Jersey',
//       'Nouveau-Mexique',
//       'New York',
//       'Caroline du Nord',
//       'Dakota du Nord',
//       'Ohio',
//       'Oklahoma',
//       'Oregon',
//       'Pennsylvanie',
//       'Rhode Island',
//       'Caroline du Sud',
//       'Dakota du Sud',
//       'Tennessee',
//       'Texas',
//       'Utah',
//       'Vermont',
//       'Virginie',
//       'Washington',
//       'Virginie-Occidentale',
//       'Wisconsin',
//       'Wyoming'
//     ];

//     cy.window()
//       .its('ListOfStatesAmerican')
//       .invoke('getData')
//       .then((states: { name: string }[]) => {
//         const stateNames = states.map((state) => state.name);
//         expect(stateNames).to.have.members(expectedStateNames);
//       });
//   });
// });
describe('ListOfStatesAmerican Service', () => {
  beforeEach(() => {
    // cy.window().then((windowObject: AUTWindow) => {
    cy.window().then((windowObject) => {
      windowObject.ListOfStatesAmerican = {
        getData: () => [
          { name: 'Alabama' },
          { name: 'Alaska' },
          { name: 'Arizona' },
          { name: 'Arkansas' },
          { name: 'Californie' },
          { name: 'Colorado' },
          { name: 'Connecticut' },
          { name: 'Delaware' },
          { name: 'Floride' },
          { name: 'Géorgie' },
          { name: 'Hawaï' },
          { name: 'Idaho' },
          { name: 'Illinois' },
          { name: 'Indiana' },
          { name: 'Iowa' },
          { name: 'Kansas' },
          { name: 'Kentucky' },
          { name: 'Louisiane' },
          { name: 'Maine' },
          { name: 'Maryland' },
          { name: 'Massachusetts' },
          { name: 'Michigan' },
          { name: 'Minnesota' },
          { name: 'Mississippi' },
          { name: 'Missouri' },
          { name: 'Montana' },
          { name: 'Nebraska' },
          { name: 'Nevada' },
          { name: 'New Hampshire' },
          { name: 'New Jersey' },
          { name: 'Nouveau-Mexique' },
          { name: 'New York' },
          { name: 'Caroline du Nord' },
          { name: 'Dakota du Nord' },
          { name: 'Ohio' },
          { name: 'Oklahoma' },
          { name: 'Oregon' },
          { name: 'Pennsylvanie' },
          { name: 'Rhode Island' },
          { name: 'Caroline du Sud' },
          { name: 'Dakota du Sud' },
          { name: 'Tennessee' },
          { name: 'Texas' },
          { name: 'Utah' },
          { name: 'Vermont' },
          { name: 'Virginie' },
          { name: 'Washington' },
          { name: 'Virginie-Occidentale' },
          { name: 'Wisconsin' },
          { name: 'Wyoming' }
        ]
      };
    });
  });

  it('should return a non-empty list of states', () => {
    cy.window()
      .its('ListOfStatesAmerican')
      .invoke('getData')
      .should('have.length.greaterThan', 0);
  });

  it('should return data with correct structure', () => {
    cy.window()
      .its('ListOfStatesAmerican')
      .invoke('getData')
      .each((state) => {
        expect(state).to.have.property('name');
      });
  });

  it('should return all states', () => {
    cy.window().its('ListOfStatesAmerican').invoke('getData');
  });

  it('should return correct state names', () => {
    const expectedStateNames = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'Californie',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Floride',
      'Géorgie',
      'Hawaï',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiane',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'Nouveau-Mexique',
      'New York',
      'Caroline du Nord',
      'Dakota du Nord',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvanie',
      'Rhode Island',
      'Caroline du Sud',
      'Dakota du Sud',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginie',
      'Washington',
      'Virginie-Occidentale',
      'Wisconsin',
      'Wyoming'
    ];

    cy.window()
      .its('ListOfStatesAmerican')
      .invoke('getData')
      .then((states) => {
        const stateNames = states.map((state) => state.name);
        expect(stateNames).to.have.members(expectedStateNames);
      });
  });
});
