import { Link } from 'react-router-dom';

import CreateEmployee from '../CreateEmployee/CreateEmployee';
import './Home.css';

function Home() {
  return (
    <>
      <div class='title'>
        <h1>HRnet</h1>
      </div>

      <div class='container'>
        <Link to='/employees'>View Current Employees</Link>
        <CreateEmployee />
      </div>
      {/* TODO add modal */}
    </>
  );
}

export default Home;
