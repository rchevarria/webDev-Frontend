import React from 'react';
import {
  Nav,
  NavTitle,
  NavLogo
} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          <img src={require('../images/logo.png')} alt='logo' height="38" />
        </NavLogo>
        <NavTitle to='/'>
          <img src={require('../images/name.png')} alt='logo' height="28" />
        </NavTitle>
      </Nav>
    </>
  );
};

export default Navbar;