import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';
import { BackButton, FormButton } from '../buttons';


class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting employee ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState({
            firstname: this.props.employee.firstname, 
            lastname: this.props.employee.lastname,
            department: this.props.employee.department, 
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
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
            <div className='container'>
              <div>
                <BackButton to={`/employee/${this.state.redirectId}`}>
                    Back
                </BackButton>
                <div className='header'>
                  Edit Employee
                </div>
                <br/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <label> First Name: </label>
                  <input type="text" name="firstname" value={this.state.firstname} onChange ={(e) => this.handleChange(e)}/>
                  <br/>
                  <label> Last Name: </label>
                  <input type="text" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)}/>
                  <br/>
                  <label> Department: </label>
                  <input type="text" name="department" value={this.state.department} onChange={(e) => this.handleChange(e)} />
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
