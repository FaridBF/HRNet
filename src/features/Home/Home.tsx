import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import CreateEmployee from '../CreateEmployee/CreateEmployee';

const logo = require('../../assets/logo.jpg');

/**
 * Propriétés du composant Home.
 */
interface HomeProps {}

/**
 * Composant pour la page d'accueil.
 * @param {HomeProps} props - Les propriétés du composant.
 * @returns {JSX.Element} - Élément JSX représentant la page d'accueil.
 */
const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <div className='home__logo' data-cy='home-logo'>
        <img src={logo} alt='Close Modal' />
      </div>
      <div className='home__container' data-cy='create-employee'>
        <CreateEmployee />
      </div>
      <div className='home__link-container'>
        <Link to='/employees' data-cy='view-employees-link'>
          View Current Employees
        </Link>
      </div>
    </>
  );
};

export default Home;
