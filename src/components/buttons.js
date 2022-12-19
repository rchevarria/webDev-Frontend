import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainButton = styled(Link)`
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
    border: 2px solid #1c2e4a;
    text-decoration: none;
  }
`;

export const NormButton = styled(Link)`
  font-family: Catamaran;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background-color: #1c2e4a;
    color: white;
    border: 2px solid #1c2e4a;;
  }
`;

export const TaskLink = styled(Link)`
  margin-right: 7px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export const SmallButton = styled(Link)`
  font-family: Catamaran;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background-color: #1c2e4a;
    color: white;
    border: 2px solid #1c2e4a;;
  }
`;

export const FormButton = styled.button`
  font-family: Catamaran;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 15px;
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

export const DeleteButton = styled.button`
  font-family: Catamaran;
  background-color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #FF2E2E;
    color: white;
    border: 2px solid #FF2E2E;
  }
`;

export const XButton = styled.button`
  font-family: Roboto;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  padding: 0px 7px 2px 7px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #FF2E2E;
    color: white;
    border: 2px solid #FF2E2E;
  }
`;

export const AddLink = styled(Link)`
  font-family: Catamaran;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 2px 10px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #03C04A;
    text-decoration: none;
    color: white;
    border: 2px solid #03C04A;
  }
`;

export const PlusButton = styled.button`
  font-family: Roboto;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0px 6px;
  width: auto;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #03C04A;
    color: white;
    border: 2px solid #03C04A;
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