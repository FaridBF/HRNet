import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
interface Error404Props {}
const Error404: FunctionComponent<Error404Props> = (props) => {
  return (
    <>
      <div className='error404__container' data-cy='error404-container'>
        <h1 className='error404__title' data-cy='error404-title'>
          Error 404
        </h1>
        <h2 className='error404__description' data-cy='error404-description'>
          Sorry! This page does not exist.
        </h2>
        <Link className='error404__link' to={'/'} data-cy='error404-link'>
          Back to home
        </Link>
      </div>
    </>
  );
};
export default Error404;
