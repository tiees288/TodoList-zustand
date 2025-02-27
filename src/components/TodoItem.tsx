import { Todo } from "@/interfaces/Todo.interface";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { TodoStoreContext } from "@/stores/todoStore";
interface Props {
     idx: number;
}

const TdodoItem = observer((props: Props) => {
     const { idx } = props;
     const store = useContext(TodoStoreContext);
     const { todoList, updateTodo, removeTodo, toggleTodo: toggleTodoStore } = store;


     const todo = todoList[idx];
     const openEditTodoDialog = (idx: number) => {
          const prevTodo = todoList[idx];
          const result = prompt("Edit Todo", prevTodo.description);
          if (!result) return;
          updateTodo(idx, {
               ...prevTodo,
               description: result
          });
     }

     const toggleTodo = (idx: number) => {
          toggleTodoStore(idx);
     }

     const openConfirmDeleteDialog = (idx: number) => {
          const result = window.confirm("Are you sure you want to delete this todo?");
          if (!result) return;
          removeTodo(idx);
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
});

export default TdodoItem;