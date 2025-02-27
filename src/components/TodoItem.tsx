import { Todo } from "@/interfaces/Todo.interface";
import { useAtom } from "jotai";
import { todoAtom } from "../../atoms/atom";

interface Props {
     idx: number;
     todo: Todo;
}

export default function TdodoItem(props: Props) {
     const { idx, todo } = props;
     const [todoList, setTodoList] = useAtom(todoAtom);

     const openEditTodoDialog = (idx: number) => {
          const prevTodo = todoList[idx];
          const result = prompt("Edit Todo", prevTodo.description);
          if (!result) return;
          setTodoList((prev) => {
            prev[idx].description = result;
            return [...prev];
          });
     }

     const toggleTodo = (idx: number) => {
          setTodoList((prev) => {
               prev[idx].completed = !prev[idx].completed;  
          });
     }

     const openConfirmDeleteDialog = (idx: number) => {
          const result = window.confirm("Are you sure you want to delete this todo?");
     }

     return (
          <div className="todo-item" key={todo.id}>
               <div className="todo-item-content">
                    <h2>{todo.id}</h2>
                    <div style={{ paddingLeft: 10 }}>
                         {todo.description}
                    </div>
                    <div style={
                         {
                              paddingLeft: '20px',
                              color: todo.completed ? "green" : "red"
                         }
                    }>{todo.completed ? "Completed" : "Not Completed"}</div>
               </div>
               <div className="todo-item-action">
                    <button
                         onClick={() => toggleTodo(idx)}
                    >Toggle</button>
                    <button
                         onClick={() => openEditTodoDialog(idx)}
                    >Edit</button>
                    <button
                         onClick={() => openConfirmDeleteDialog(idx)}
                    >Delete</button>
               </div>
          </div>
     );
}