import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('All');

  const handleTodoInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return; // Prevent adding empty todos
    setTodos([...todos, { text: newTodo, isCompleted: false }]);
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const toggleTodoComplete = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) => 
      todoIndex === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.isCompleted);
      case 'Completed':
        return todos.filter(todo => todo.isCompleted);
      default:
        return todos;
    }
  };

  const buttonClass = (buttonName) => 
    `button ${filter === buttonName ? 'active' : ''}`;

  return (
    <div className="container max-w-md mx-auto p-8 bg-white rounded-lg shadow">

      <h1 className="text-3xl font-bold  mb-6">To-Do List</h1>

      <div>

        <button className={buttonClass('All')} onClick={() => setFilter('All')}>
          Show all
        </button>

        <button className={buttonClass('Active')} onClick={() => setFilter('Active')}>
          Active
        </button>

        <button className={buttonClass('Completed')} onClick={() => setFilter('Completed')}>
          Completed
        </button>

      </div>

      <ul>
        {getFilteredTodos().map((todo, index) => (
          <li key={index} className="flex justify-between">
            <div className="flex items-center  ouline-none">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodoComplete(index)}
                className="form-checkbox h-5 w-5"
              />
              <span className={`ml-2 break-all ${todo.isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{todo.text}</span>
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="button bg-red-500 hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form className="flex items-center mb-6" onSubmit={addTodo}>

        <input
          type="text"
          value={newTodo}
          onChange={handleTodoInputChange}
          className="text-white flex-grow rounded-full border p-2 mr-4"
          placeholder="Add to do"
        />

      </form>

    </div>
  );
  
}

export default App;