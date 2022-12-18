import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div className='container'>
      <Link to={`/tasks`}>
         <button>Back</button>
      </Link>
      <h1>{task.description}</h1>
      {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3>: <h3> unassigned </h3>}
    
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;
