import "./components/App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  NewEmployeeContainer,
  EditEmployeeContainer,
  AllTasksContainer,
  TaskContainer,
  NewTaskContainer,
  EditTaskContainer
} from './components/containers';
import Navbar from './components/navbar.js';

// if you create separate components for adding/editing 
// a student or employee, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/employee/:id" component={EmployeeContainer} />
        <Route exact path="/newemployee" component={NewEmployeeContainer} />
        <Route exact path="/editemployee/:id" component={EditEmployeeContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/task/:id" component={TaskContainer} />
        <Route exact path="/newtask" component={NewTaskContainer} />
        <Route exact path="/edittask/:id" component={EditTaskContainer} />
      </Switch>        
    </div>
  );
}

export default App;

