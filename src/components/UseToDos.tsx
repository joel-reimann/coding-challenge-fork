import { useState } from 'react';
import { Todo } from './types';

export const useTodo = () => {
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
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodoComplete = (index: number) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'Active': return todos.filter(todo => !todo.isCompleted);
      case 'Completed': return todos.filter(todo => todo.isCompleted);
      default: return todos;
    }
  };

  return { newTodo, setNewTodo, filter, setFilter, addTodo, deleteTodo, toggleTodoComplete, getFilteredTodos };
};
