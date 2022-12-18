import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: #192841;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
  //border-bottom: 1.75px solid gray;
`;

export const NavLogo = styled(Link)`
  color: #000;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-left: 1%;
`;

export const NavTitle = styled(Link)`
  color: #fff;
  font-size: 28px;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-family: 'Catamaran', sans-serif;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 1px;
`;