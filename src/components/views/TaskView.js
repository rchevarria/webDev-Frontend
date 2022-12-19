import { Link } from "react-router-dom";
import { BackButton, NormButton, SmallButton } from "../buttons";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div >
      <BackButton to={`/tasks`}>
         Back
      </BackButton>
      <br/><br/>
      <div className="header">Task: {task.description}</div>
      <div className="assigned">
        Assigned to:
      </div>
      <div className="tasks">
      {task.employee ? <p>{task.employee.firstname + " " + task.employee.lastname}</p>: <p> unassigned </p>}
      </div>
      <SmallButton to={`/edittask/${task.id}`}>
        Edit Task Information
      </SmallButton>
      <br/><br/>
      <SmallButton to={`/tasks`}>
        View All Tasks
      </SmallButton>
    </div>
  );

};

export default TaskView;
