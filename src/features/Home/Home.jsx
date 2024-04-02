import { Link } from 'react-router-dom';

import CreateEmployee from '../CreateEmployee/CreateEmployee';
import './Home.css';

/**
 * Composant pour la page d'accueil.
 * @returns {JSX.Element} - Élément JSX représentant la page d'accueil.
 */
function Home() {
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
}

export default Home;
