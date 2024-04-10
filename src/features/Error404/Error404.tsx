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
      <div className='container-error404'>
        <h1 className='title-error404'>Error 404</h1>
        <h2 className='description-error404'>
          Sorry! This page does not exist.
        </h2>

        <Link className='link-home' to={'/'}>
          Back to home
        </Link>
      </div>
    </>
  );
};

export default Error404;
