
import {useState} from "react";

function Todo({task, id, remove, update}) {

  const INITIAL_STATE = {
    text: ""
  }
  
  const [formData, setFormData] = useState({
    text: ""
  });

  const [displayForm, setDisplayForm] = useState(false);

  const handleRemove = () => {
  remove(id)
}

const handleUpdate = evt => {
  evt.preventDefault();
  update(id, formData.text);
  setFormData(INITIAL_STATE);
  setDisplayForm(false);
}

const handleChange = evt => {
  const {name, value} = evt.target;
  setFormData(fData => ({
    ...fData,
    [name]: value
  }));
}

const editToUpdate = () => {
  displayForm ? setDisplayForm(false) : setDisplayForm(true);
}

return (
  <div >
  <div>{task}</div>
  <button onClick={handleRemove}>X</button>
  <button onClick={editToUpdate}>Edit</button>
  {displayForm ? 
    <form onSubmit={handleUpdate}>
    <label htmlFor="text">Updated Task:</label>  
    <input
      name="text"
      value={formData.text}
      onChange={handleChange}
    />
    <button>Update Todo</button>
    </form> : null
  }  
  </div>
);
}

export default Todo;
