import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import { AddButton, AddLink, BackButton, DeleteButton, FormButton, NormButton, SmallButton } from "../buttons";

const AllEmployeesView = (props) => {
  let {employees, deleteEmployee} = props;

  if (!props.allEmployees.length) {
    return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        Employees
      </div>
      <p>There are no Employees.</p>
      <SmallButton to={`/newemployee`}>
        Add New Employee
      </SmallButton>
    </div>);

  }

  return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        Employees
      </div>
          
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <div className="name">{name}</div>
          </Link>
          <div className="department">{employee.department}</div>
          <DeleteButton onClick={() => deleteEmployee(employee.id)}>Delete Employee</DeleteButton>
        </div>
        );

      })}
      <br/>
      <AddLink to={`/newemployee`}>
        Add New Employee
      </AddLink>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
