import { Link } from "react-router-dom";
import { BackButton, NormButton } from "../buttons";
import "../App.css";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, description: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        Tasks
      </div>
      <p>There are no tasks.</p>
      <NormButton to={`/newtask`}>
        Add New Task
      </NormButton>
    </div>
    );
  }
  
  return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        Tasks
      </div>
          
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </div>
        );
      }
      )}
      <NormButton to={`/newtask`}>
        Add New Task
      </NormButton>
    </div>
  );
};


export default AllTasksView;
