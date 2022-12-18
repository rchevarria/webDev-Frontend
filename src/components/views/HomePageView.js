import { Link } from 'react-router-dom';
import "../App.css";
import { NormButton } from '../buttons';


const HomePageView = () => {
  return (
    <div>
      <div className='header'>
        Final Project - Ryan, Aleksandre, Pramit, Mingmar
      </div>
      <br/><br/><br/>
      <div className='links_container'>
        <NormButton to={'/employees'} > All Employees </NormButton>
        <NormButton to={'/tasks'} > All Tasks </NormButton>
      </div>
    </div>
  );    
}




export default HomePageView;
