import { useState } from "react";

function NewTodoForm({addTodo}) {

  const INITIAL_STATE = {
    text: ""
  }

  const [formData, setFormData] = useState({
    text: ""
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const {name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="text">Task:</label>  
    <input
      name="text"
      value={formData.text}
      onChange={handleChange}
    />
    <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
