import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NormButton = styled(Link)`
  font-family: Catamaran;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-right: 10px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #1c2e4a;
    color: white;
    border: 2px solid #1c2e4a;;
  }
`;

export const SmallButton = styled(Link)`
  font-family: Catamaran;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-right: 10px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #1c2e4a;
    color: white;
    border: 2px solid #1c2e4a;;
  }
`;

export const FormButton = styled.button`
  font-family: Catamaran;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-right: 10px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #1c2e4a;
    color: white;
    border: 2px solid #1c2e4a;;
  }
`;

export const BackButton = styled(Link)`
  font-family: Catamaran;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  float: left;
  &:hover {
    text-decoration: underline;
  }
`;