import { useContext, useRef } from "react";
import TdodoItem from "./TodoItem";
import { TodoContext } from "@/context/TodoContext";

export default function TodoBody() {
     const descriptionRef = useRef<HTMLTextAreaElement>(null);
    // useContext
    const { todos, addTodo, updateTodo, toggleTodo, removeTodo } = useContext(TodoContext);
     
     const addTodoData = () => {
      addTodo({
        id: todos.length + 1,
        description: descriptionRef.current!.value,
        completed: false,
      });
        descriptionRef.current!.value = "";
     }
     return (
          <div className="todo-body">
          <h1>Todo List ({todos.length})</h1>
          <div className="container">
            {
              todos.length === 0 ? <h3>No Data</h3> :
                todos.map((todo, idx) => (
                  <TdodoItem key={idx} idx={idx} todo={todo} />
                ))
            }
          </div>
          <div className="todo-action">
            <textarea ref={descriptionRef} rows={10} placeholder="Add Todo" />
            <button onClick={addTodoData}>Add</button>
          </div>
        </div>
     );
}