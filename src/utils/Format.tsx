/**
 * Formate un objet Date en chaîne de caractères au format 'YYYY-MM-DD'
 * @param {Date} date - Objet Date à formater
 * @returns {string} - Chaîne de caractères formatée
 */
function format(date: Date | null | undefined | any): string {
  if (!date || !(date instanceof Date)) return ''; // Si la date est null, undefined ou n'est pas un objet Date, retourne une chaîne vide

  // Obtenir les composants de la date (année, mois, jour)
  const year: number = date.getFullYear();
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0'); // Ajoute un zéro initial si le mois est inférieur à 10
  const day: string = date.getDate().toString().padStart(2, '0'); // Ajoute un zéro initial si le jour est inférieur à 10

  // Retourne une chaîne de caractères formatée (YYYY-MM-DD par exemple)
  return `${year}-${month}-${day}`;
}

export { format };
