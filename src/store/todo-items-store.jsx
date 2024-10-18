import { createContext } from "react"
//creating context api here
export const TodoItemsContext = createContext({
  todoItems : [],
  addNewItem : () => {},
  deleteItem : () => {}
});