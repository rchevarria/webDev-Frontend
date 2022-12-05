

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h4>Assigment3</h4>
      <Link to={'/employees'} > All Employees </Link>
      <Link to={'/tasks'} > All Tasks </Link>
      
    </div>
  );    
}




export default HomePageView;
