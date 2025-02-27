import { Todo } from '@/interfaces/Todo.interface';
import React, { createContext, useState, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

// Create a Context for Todos
export const TodoContext = createContext({
  todos: [] as Todo[],
  addTodo: (todo: Todo) => { },
  toggleTodo: (id: number) => { },
  removeTodo: (id: number) => { },
  updateTodo: (id: number, updatedTodo: Todo) => { },
});

// Create a Provider component
export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add Todo
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  // Toggle Todo
  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, idx) =>
        idx === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove Todo
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) =>
      i !== index
    ));
  };

  // Update Todo
  const updateTodo = (index: number, updatedTodo: Todo) => {
    setTodos(
      todos.map((todo, idx) =>
        idx === index ? updatedTodo : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
