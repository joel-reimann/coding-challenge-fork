import React from 'react';

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form className="flex-full items-center mb-6" onSubmit={addTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo"
        className="input"
      />
    </form>
  );
}

export default TodoForm;
