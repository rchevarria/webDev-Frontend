import { Link } from "react-router-dom";
import { AddButton, BackButton, FormButton, NormButton, PlusButton, SmallButton, TaskLink, XButton } from "../buttons";

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
      <div className="inactive_name">{employee.firstname} {employee.lastname} (id: {employee.id})</div>
      <div className="department">{employee.department}</div>
      <div>
        <div className="tasks">Assigned tasks:
        { assignedTasks.map( task => {
          return (
            <div key={task.id}>
              <TaskLink to={`/task/${task.id}`}>
                {task.description}
              </TaskLink>
              <XButton onClick={() => editTask({id:task.id, employeeId: null})}>x</XButton>
            </div>
          );
        })}
        </div>
        <div className="tasks">Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
              <TaskLink to={`/task/${task.id}`}>
                {task.description}
              </TaskLink>
              <PlusButton onClick={() => editTask({id:task.id, employeeId: employee.id})}>+</PlusButton>
            </div>
          );
        })}
        </div>

      </div>
          
      <SmallButton to={`/editemployee/${employee.id}`}>Edit employee information</SmallButton>
      <DeleteButton onClick={() => deleteEmployee(employee.id)}>Delete Employee</DeleteButton>
    </div>
  );

};

export default EmployeeView;
