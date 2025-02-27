'use client';

import Head from "next/head";
import { Todo, useTodoStore } from "../stores/todoStore";
import React from "react";
import TdodoItem from "@/components/TodoItem";

export default function Home() {
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const todos = useTodoStore((state) => state.todos);
  const count = useTodoStore((state) => state.count);
  const addTodoToStore = useTodoStore((state) => state.addTodo);

  const addTodo = () => {
    addTodoToStore({
      id: todos.length + 1,
      description: descriptionRef.current?.value || ""
    } as Todo);
    const description = descriptionRef.current?.value;
    if (description) {
      todos
      if (descriptionRef.current) {
        descriptionRef.current.value = "";
      }
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="todo-body">
        <h1>Todo List ({count()})</h1>
        <div className="container">
          {
            todos.length === 0 ? <h3>No Data</h3> :
              todos.map((todo, idx) => (
                <TdodoItem idx={idx} todo={todo} />
              ))
          }
        </div>
        <div className="todo-action">
          <textarea ref={descriptionRef} rows={10} placeholder="Add Todo" />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    </>
  );
}