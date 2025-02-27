import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  editTodo: (idx: number, description: string) => void;
  removeTodo: (idx: number) => void;
  toggleTodo: (idx: number) => void;
  clearAllTodos: () => void;
  count: () => number;  
};

// Without Immer middleware
// export const useTodoStore = create<TodoStore>((set) => ({
//   todos: [],
//   addTodo: (todo) =>
//     set((state) => ({
//       todos: [...state.todos, todo],
//       count: state.todos.length + 1,
//     })),
//   removeTodo: (idx) =>
//     set((state) => ({
//       todos: state.todos.filter((_, i) => i !== idx),
//       count: state.todos.length - 1,
//     })),
//   toggleTodo: (idx) =>
//     set((state) => ({
//       todos: state.todos.map((todo, i) =>
//         i === idx ? { ...todo, completed: !todo.completed } : todo
//       ),
//       count: state.todos.length,
//     })),
//   clearAllTodos: () => set({ todos: [] }),
// }));

export const useTodoStore = create<TodoStore>()(
  immer((set, get) => ({
    todos: [],
    addTodo: (todo) =>
      set((state) => {
        state.todos.push(todo);
      }),
    editTodo: (idx, description) =>
      set((state) => {
        state.todos[idx].description = description;
      }),
    removeTodo: (idx) =>
      set((state) => {
        state.todos.splice(idx, 1);
      }),
    toggleTodo: (idx) =>
      set((state) => {
        state.todos[idx].completed = !state.todos[idx].completed;
      }),
    clearAllTodos: () => set({ todos: [] }),
    count: () => get().todos.length,
  }))
);
