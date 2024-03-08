import React from 'react';
import { Todo } from './types';

interface TodoItemProps {
  todo: Todo;
  index: number;
  deleteTodo: (index: number) => void;
  toggleTodoComplete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, deleteTodo, toggleTodoComplete }) => {
  return (
    <li className="flex justify-between">
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
  );
}

export default TodoItem;
