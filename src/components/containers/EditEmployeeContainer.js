import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';


class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstName: "", 
          priority: "",
          completion: "", 
          employeeId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting employee ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState({
            firstName: this.props.employee.firstName, 
            priority: this.props.employee.priority,
            completion: this.props.employee.completion, 
            employeeId: this.props.employee.employeeId,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for employee from form input
        let employee = {
            id: this.props.employee.id,
            firstName: this.state.firstName,
            priority: this.state.priority,
            completion: this.state.completion,
            employeeId: this.state.employeeId
        };
        
        this.props.editEmployee(employee);

        this.setState({
          redirect: true, 
          redirectId: this.props.employee.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single employee view of the edited employee
        if(this.state.redirect) {
          return (<Redirect to={`/employee/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstName" value={this.state.firstName} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="text" name="priority" value={this.state.priority} onChange={(e) => this.handleChange(e)}/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Completion Status: </label>
            <input type="text" name="completion" value={this.state.completion} onChange={(e) => this.handleChange(e)} />
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>employeeId: </label>
            <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
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
      employee: state.employee,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);