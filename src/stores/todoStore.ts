import { Todo } from "@/interfaces/Todo.interface";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todoList: Todo[] = [];

  addTodo = (todo: Todo) => {
    this.todoList.push(todo);
  };

  removeTodo = (idx: number) => {
    this.todoList = this.todoList.filter((_, index) => index !== idx);
  };

  updateTodo = (idx: number, todo: Todo) => {
    this.todoList = this.todoList.map((t, index) => {
      if (index === idx) {
        t = todo;
      }
      return t;
    });
  };

  toggleTodo = (idx: number) => {
    this.todoList = this.todoList.map((todo, index) => {
      if (index === idx) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  get count() {
    return this.todoList.length;
  }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);
