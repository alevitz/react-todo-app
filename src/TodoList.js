import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    return (
      <div>
      {todos.map(todo => {
        return(
          <Todo 
            key={todo.id}
            id={todo.id}
            task={todo.text}
            remove={removeTodo}
          />
        )
      })}
      </div>
    )
  }

const addTodo = todo => {
  let newTodo = {...todo, id: v4() };
  setTodos(todos => [...todos, newTodo]);
}

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== id));
}

  
return (
  <div >
    <NewTodoForm addTodo={addTodo}/>
    {renderTodos()}
    
  </div>
);
}

export default TodoList;
