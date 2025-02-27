import { useRef } from "react";
import { useAtom, useAtomValue } from "jotai";
import TdodoItem from "./TodoItem";
import { todoAtom, todoCounterAtom } from "../../atoms/atom";

export default function TodoBody() {
     const descriptionRef = useRef<HTMLTextAreaElement>(null);
     const todoCount = useAtomValue(todoCounterAtom);
     const [todos, setTodoList] = useAtom(todoAtom);
     const addTodo = () => {
       setTodoList((prev) => {
         prev.push({
           id: prev.length + 1,
           description: descriptionRef.current?.value || "",
           completed: false
         });
       });

        descriptionRef.current!.value = "";
     }
     return (
          <div className="todo-body">
          <h1>Todo List ({todoCount})</h1>
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
     );
}