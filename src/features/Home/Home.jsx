import { Link } from 'react-router-dom';

import CreateEmployee from '../CreateEmployee/CreateEmployee';
import './Home.css';

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
      {/* TODO add modal */}
    </>
  );
}

export default Home;
