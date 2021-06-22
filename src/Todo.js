
function Todo({task, id, remove}) {

const handleRemove = () => {
  remove(id)
}

return (
  <div >
  <div>{task}</div>
  <button onClick={handleRemove}>X</button>  
  </div>
);
}

export default Todo;
