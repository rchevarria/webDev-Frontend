
import background from "/dataserver.png";
import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h6>Final Project</h6>
      <Link to={'/employees'} > All Employees </Link>
      <Link to={'/tasks'} > All Tasks </Link>
      <div style={{ backgroundImage: `url(${background})` }}>
      </div>
    </div>
  );    
}




export default HomePageView;
