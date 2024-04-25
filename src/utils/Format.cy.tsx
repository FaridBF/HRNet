// //test unitaire
// import { format } from './Format';

// describe('format function', () => {
//   it('formats a date correctly', () => {
//     // Test cas n°1: Format avec une date valide
//     const validDate = new Date('2024-04-17');
//     const formattedDate = format(validDate);
//     expect(formattedDate).to.equal('2024-04-17');

//     // Test case 2: Format d'une date à null
//     const nullDate = null;
//     const formattedNullDate = format(nullDate);
//     expect(formattedNullDate).to.equal('');

//     // Test- Cas n°3: Format d'une date à undefined
//     const undefinedDate = undefined;
//     const formattedUndefinedDate = format(undefinedDate);
//     expect(formattedUndefinedDate).to.equal('');

//     // Test Case n°4: Format vaec une date invalide
//     const invalidDate = '2024-04-17';
//     const formattedInvalidDate = format(invalidDate);
//     expect(formattedInvalidDate).to.equal('');
//   });
//   it('adds leading zeros to month and day when necessary', () => {
//     // Permet de tester si la fonction avec une date valide où le mois ou le jour est inférieur à 10 pour vérifier que le formatage ajoute correctement le zéro initial.
//     const date1 = new Date('2024-04-01');
//     const formattedDate1 = format(date1);
//     expect(formattedDate1).to.equal('2024-04-01');

//     // Permet de tester si la fonction avec une date valide où le mois est supérieur à 10 pour vérifier que le formatage fonctionne correctement.
//     const date2 = new Date('2024-10-10');
//     const formattedDate2 = format(date2);
//     expect(formattedDate2).to.equal('2024-10-10');

//     // Permet de tester si la fonction avec une date valide où le jour est supérieur à 10 pour vérifier que le formatage fonctionne correctement.
//     const date3 = new Date('2024-01-25');
//     const formattedDate3 = format(date3);
//     expect(formattedDate3).to.equal('2024-01-25');
//   });

//   //Permet de tester si la fonction avec une autre instance d'objet (par exemple, une chaîne de caractères) pour vérifier qu'elle retourne bien une chaîne vide
//   it('returns an empty string for non-Date inputs', () => {
//     const notDate = 'not a date';
//     const formattedNotDate = format(notDate);
//     expect(formattedNotDate).to.equal('');
//   });
// });
