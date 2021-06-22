import './Todo.css';
import {useState} from "react";

function Todo({task, id, remove, update}) {

  const INITIAL_STATE = {
    text: ""
  }
  
  const [formData, setFormData] = useState({
    text: ""
  });

  const [displayForm, setDisplayForm] = useState(false);
  const [markComplete, setMarkComplete] = useState(false);

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

const markCompleted = () => {
  markComplete ? setMarkComplete(false) : setMarkComplete(true);
}

return (
  <div >
  <div className={markComplete ? "complete" : null}>{task}</div>
  <button onClick={handleRemove}>X</button>
  <button onClick={editToUpdate}>Edit</button>
  <button onClick={markCompleted}>Mark as Completed</button>
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
