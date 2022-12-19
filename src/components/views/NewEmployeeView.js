import { BackButton, FormButton } from "../buttons";

const NewEmployeeView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        New Employee
      </div>
      <br/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label> First Name: </label>
        <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
        <br/>
        <label> Last Name: </label>
        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
        <br/>
        <label> Department: </label>
        <input type="text" name="department" onChange={(e) => handleChange(e)} />
        <br/>
        <FormButton type="submit">
          Submit
        </FormButton>
      </form>
      {error!=="" && <p>{error}</p>}
    </div>
    
  )
}

export default NewEmployeeView;
