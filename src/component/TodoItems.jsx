import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  //use contextapi by importing useContext and TodoItemsContext here
  const { todoItems } = useContext(TodoItemsContext);
  return (
   
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
