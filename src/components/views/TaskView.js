import { Link } from "react-router-dom";
import { BackButton, NormButton, SmallButton } from "../buttons";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div >
      <Link to={`/tasks`}>
         <button>Back</button>
      </Link>
      <h1>Task: {task.description}</h1>
      <div>
        Assigned to: {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3> unassigned </h3>}

      </div>
      {/* Assigned to: {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3> unassigned </h3>} */}
    
      <NormButton to={`/edittask/${task.id}`}>
        Edit Task Information
      </NormButton>
      <br/>
      {/* <br/> */}

      {/* <Link to={`/edittask/${task.id}`}>Edit task information</Link> */}
      <br/>
      {/* <Link to={`/tasks`}>View all tasks</Link> */}
      <NormButton to={`/tasks`}>
        View All Tasks
      </NormButton>
    </div>
  );

};

export default TaskView;
