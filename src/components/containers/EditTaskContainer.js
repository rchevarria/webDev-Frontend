import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';
import { Link } from "react-router-dom";
import { BackButton, FormButton } from '../buttons';



class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "", 
          priority: "",
          completion: "", 
          employeeId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            description: this.props.task.description, 
            priority: this.props.task.priority,
            completion: this.props.task.completion, 
            employeeId: this.props.task.employeeId,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for task from form input
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            priority: this.state.priority,
            completion: this.state.completion,
            employeeId: this.state.employeeId
        };
        
        this.props.editTask(task);

        this.setState({
          redirect: true, 
          redirectId: this.props.task.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view of the edited task
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <div className='container'>
              <div>  
              <BackButton to={`/task/${this.state.redirectId}`}>
                Back
              </BackButton>
              <div className='header'>
                Edit Task
              </div>
              <br/>  
              <form onSubmit={(e) => this.handleSubmit(e)}>
                  <label>Description: </label>
                  <input type="text" name="description" value={this.state.description} onChange ={(e) => this.handleChange(e)}/>
                  <br/>
                  
		              <label>Priority Level: </label>
                  <input type="text" name="priority" value={this.state.priority} onChange={(e) => this.handleChange(e)}/>
                  <br/>
                  
		              <label>Completion Status: </label>
                  <input type="text" name="completion" value={this.state.completion} onChange={(e) => this.handleChange(e)} />
                  <br/>
			
		              <label>employeeId: </label>
		              <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
                  <br/>

              <FormButton type="submit">
                Submit
              </FormButton>

              </form>
              </div>
            </div>
            
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      task: state.task,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);
