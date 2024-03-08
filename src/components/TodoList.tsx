import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

const TodoList = ({ todos, deleteTodo, toggleTodoComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
