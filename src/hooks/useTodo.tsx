import { useState } from 'react';

interface Todo {
  text: string;
  isCompleted: boolean;
}

interface UseTodoHook {
  newTodo: string;
  setNewTodo: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  addTodo: (event: React.FormEvent) => void;
  deleteTodo: (index: number) => void;
  toggleTodoComplete: (index: number) => void;
  getFilteredTodos: () => Todo[];
}

export const useTodo = (): UseTodoHook => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, isCompleted: false }]);
    setNewTodo('');
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const toggleTodoComplete = (index: number) => {
    const updatedTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.isCompleted);
      case 'Completed':
        return todos.filter(todo => todo.isCompleted);
      default:
        return todos;
    }
  };

  return { newTodo, setNewTodo, filter, setFilter, addTodo, deleteTodo, toggleTodoComplete, getFilteredTodos };
};
