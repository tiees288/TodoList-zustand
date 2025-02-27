import { useContext, useRef } from "react";
import { observer } from "mobx-react";
import { TodoStoreContext } from "@/stores/todoStore";
import TdodoItem from "./TodoItem";

const TodoBody = observer(() => {
  const store = useContext(TodoStoreContext);
  const { todoList: todos, addTodo } = store;
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

     const addTodoData = () => {
      addTodo({
        id: todos.length + 1,
        description: descriptionRef.current!.value,
        completed: false
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
                  <TdodoItem key={idx} idx={idx} />
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
)

export default TodoBody;
//  function TodoBody() {
//      const descriptionRef = useRef<HTMLTextAreaElement>(null);
     
//      const addTodoData = () => {
//         descriptionRef.current!.value = "";
//      }
//      return (
      
//           <div className="todo-body">
//           <h1>Todo List ({todos.length})</h1>
//           <div className="container">
//             {
//               todos.length === 0 ? <h3>No Data</h3> :
//                 todos.map((todo, idx) => (
//                   <TdodoItem key={idx} idx={idx} todo={todo} />
//                 ))
//             }
//           </div>
//           <div className="todo-action">
//             <textarea ref={descriptionRef} rows={10} placeholder="Add Todo" />
//             <button onClick={addTodoData}>Add</button>
//           </div>
//         </div>
//      );
// }