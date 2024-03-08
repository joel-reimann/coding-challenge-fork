import React from "react";
import { useTodo } from "./hooks/useTodo";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const {
    newTodo,
    setNewTodo,
    filter,
    setFilter,
    addTodo,
    deleteTodo,
    toggleTodoComplete,
    getFilteredTodos,
  } = useTodo();

  return (
    <div className="container max-w-md mx-auto p-8 bg-white rounded-lg shadow">
      <Title
        title="To-do list"
        description="With add, delete, and filter functionaly"
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={getFilteredTodos()}
        deleteTodo={deleteTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;
