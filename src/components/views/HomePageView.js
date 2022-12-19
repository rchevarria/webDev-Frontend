import { Link } from 'react-router-dom';
import "../App.css";
import { MainButton, NormButton } from '../buttons';


const HomePageView = () => {
  return (
    <div>
      <div className='header'>
        Final Project - Ryan, Aleksandre, Pramit, Mingmar
      </div>
      <br/><br/><br/>
      <div className='links_container'>
        <MainButton to={'/employees'} > All Employees </MainButton>
        <MainButton to={'/tasks'} > All Tasks </MainButton>
      </div>
    </div>
  );    
}




export default HomePageView;
