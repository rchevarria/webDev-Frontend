import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';


class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "", 
          priorityLevel: "",
          completionStatus: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting Task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            description: this.props.task.description, 
            priorityLevel: this.props.task.priorityLevel,
            completionStatus: this.props.task.completionStatus, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for Task from form input
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            priorityLevel: this.state.priorityLevel,
            completionStatus: this.state.completionStatus
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
      //go to single Task view of the edited Task
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}> Description: </label>
            <input type="text" name="description" value={this.state.description} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}> Priority level: </label>
            <input type="text" name="priorityLevel" value={this.state.priorityLevel} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}> Completion Status: </label>
            <input type="text" name="completionStatus" value={this.state.completionStatus} onChange={(e) => this.handleChange(e)} />
            <br/>
  
            <button type="submit">
              Submit
            </button>

          </form>
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