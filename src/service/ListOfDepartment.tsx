/**
 * Service fournissant une liste des différents seceurs(départements).
 */
export const ListOfDepartment = {
  /**
   * Obtenir la liste des différents seceurs(départements).
   * @returns {Array<object>} - Liste des différents seceurs(départements).
   */
  getData() {
    return [
      { name: 'Sales' },
      { name: 'Marketing' },
      { name: 'Engineering' },
      { name: 'Human Resources' },
      { name: 'Legal' }
    ];
  }
};
