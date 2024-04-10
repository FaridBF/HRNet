import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

/**
 * Propriétés du composant Error404.
 */
interface Error404Props {}

/**
 * La page 404 est renvoyée pour chaque route inexistante, ou si une
 * valeur présente dans l’URL ne fait pas partie des données renseignées
 * @param {Error404Props} props - Les propriétés du composant.
 * @returns {JSX.Element} - Élément JSX représentant la page d'erreur 404.
 */
const Error404: FunctionComponent<Error404Props> = (props) => {
  return (
    <>
      <div className='error404__container'>
        <h1 className='error404__title'>Error 404</h1>
        <h2 className='error404__description'>
          Sorry! This page does not exist.
        </h2>

        <Link className='error404__link' to={'/'}>
          Back to home
        </Link>
      </div>
    </>
  );
};

export default Error404;
