import { Link } from 'react-router-dom';


const HomePageView = () => {
  return (
    <div className='container'>
      <ul>
      <div className='header'>
        Assignment 3
      </div>
      <br/><br/><br/><br/>
      <div className='links_container'>
        <div className='links'>
          <Link to={'/employees'} > All Employees </Link>
        </div>
        <div className='links'>
          <Link to={'/tasks'} > All Tasks </Link>
        </div>
      </div>
      </ul>
    </div>
  );    
}




export default HomePageView;
