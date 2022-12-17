import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';


class NewEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstName: "", 
          lastName: "",
          department: "", 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the employee has not been created yet
        if(this.state.firstName===""){
          this.setState({error:"First Name field is required"});
          return;
        }
        if(this.state.lastName===""){
          this.setState({error:"Last Name field is required"});
          return;
        }
        if(this.state.department===""){
          this.setState({error:"Department field is required"});
          return;
        }
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            completion: this.state.completion,
        };
        
        let newEmployee = await this.props.addEmployee(employee);

        this.setState({
          redirect: true, 
          redirectId: newEmployee.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single employee view of newly created employee
        if(this.state.redirect) {
          return (<Redirect to={`/employee/${this.state.redirectId}`}/>)
        }
        return (
          <NewEmployeeView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addEmployee: (employee) => dispatch(addEmployeeThunk(employee)),
    })
}

export default connect(null, mapDispatch)(NewEmployeeContainer);