import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import CreateEmployee from '../CreateEmployee/CreateEmployee';
import './Home.css';

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
      <div className='title'>
        <h1 className='title-home'>HRnet</h1>
      </div>
      <div className='container'>
        <CreateEmployee />
      </div>
      <div className='link-container'>
        <Link to='/employees'>View Current Employees</Link>
      </div>
    </>
  );
};

export default Home;
