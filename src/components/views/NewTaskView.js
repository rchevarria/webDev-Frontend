import { BackButton, FormButton } from "../buttons";

const NewTaskView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div>
      <BackButton to={`/`}>
        Back
      </BackButton>
      <div className="header">
        New Task
      </div>
      <br/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label> Description: </label>
        <input type="text" name="description" onChange ={(e) => handleChange(e)} />
        <br/>
        <label> Priority: </label>
        <input type="text" name="priority" onChange={(e) => handleChange(e)} />
        <br/>
        <label> Completion Status: </label>
        <input type="text" name="completion" onChange={(e) => handleChange(e)} />
        <br/>
        <label> employeeId: </label>
        <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
        <br/>
        <FormButton type="submit">
          Submit
        </FormButton>
      </form>
      {error!=="" && <p>{error}</p>}
      </div>
    
  )
}

export default NewTaskView;