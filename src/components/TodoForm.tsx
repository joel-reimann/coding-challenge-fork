import React from "react";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add to do"
        className="text-white rounded-full border p-2 mr-4 w-full"
      />
    </form>
  );
};

export default TodoForm;
