import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import { BackButton, NormButton, SmallButton } from "../buttons";

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
            <h1>{name}</h1>
          </Link>
          <p>{employee.department}</p>
          <button onClick={() => deleteEmployee(employee.id)}>Delete Employee</button>
        </div>
        );

      })}
      <NormButton to={`/newemployee`}>
        Add New Employee
      </NormButton>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
