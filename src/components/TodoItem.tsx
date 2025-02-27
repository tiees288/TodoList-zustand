import { Todo, useTodoStore } from "../stores/todoStore";

interface Props {
     idx: number;
     todo: Todo;
}

export default function TdodoItem(props: Props) {
     const { idx, todo } = props;
     const toogleTodoFromStore = useTodoStore((state) => state.toggleTodo);
     const editTodoFromStore = useTodoStore((state) => state.editTodo);
     const deleteTodoFromStore = useTodoStore((state) => state.removeTodo);

     const openEditTodoDialog = (idx: number) => {
          const prevTodo = useTodoStore.getState().todos[idx];
          const result = prompt("Edit Todo", prevTodo.description);
          if (!result) return;
          editTodoFromStore(idx, result);
     }

     const openConfirmDeleteDialog = (idx: number) => {
          const result = window.confirm("Are you sure you want to delete this todo?");
          if (result) deleteTodoFromStore(idx);
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
                         onClick={() => toogleTodoFromStore(idx)}
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