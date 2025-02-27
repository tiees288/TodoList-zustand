'use client';

import Head from "next/head";
import TdodoItem from "@/components/TodoItem";
import { useRef } from "react";
import { Provider, useAtom } from "jotai";
import { todoAtom } from "../../atoms/atom";

export default function Home() {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [todos, setTodoList] = useAtom(todoAtom);
  const addTodo = () => {
    setTodoList((prev) => {
      prev.push({
        id: prev.length + 1,
        description: descriptionRef.current?.value || "",
        completed: false
      });
    });
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Provider>
        <div className="todo-body">
          <h1>Todo List ({todos.length})</h1>
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
      </Provider>
    </>
  );
}