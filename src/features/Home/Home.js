import CreateEmployee from '../CreateEmployee/CreateEmployee';
import './Home.css';

function Home() {
  return (
    <>
      <div class='title'>
        <h1>HRnet</h1>
      </div>

      <CreateEmployee />
      {/* TODO add modal */}
    </>
  );
}

export default Home;
