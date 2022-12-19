import { Link } from "react-router-dom";
import { AddButton, BackButton, FormButton, NormButton, PlusButton, SmallButton, XButton } from "../buttons";

const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>
      <BackButton to={`/employees`}>
        Back
      </BackButton>
      <br/><br/>
      <div className="inactive_name">{employee.firstname}</div>
      <div className="department">{employee.department}</div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div className="tasks">Assigned tasks:
        { assignedTasks.map( task => {
          return (
            <div key={task.id}>
              <Link to={`/task/${task.id}`}>
                <div className="tasks">{task.description}</div>
              </Link>
              <XButton onClick={() => editTask({id:task.id, employeeId: null})}>x</XButton>
            </div>
          );
        })}
        </div>
        <div className="tasks">Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <div className="tasks">{task.description}</div>
            </Link>
            <PlusButton onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</PlusButton>
            </div>
          );
        })}
        </div>

      </div>
          
      <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
      <br/>
      <Link to={`/employees`}>View all employees</Link>

  
    </div>
  );

};

export default EmployeeView;
