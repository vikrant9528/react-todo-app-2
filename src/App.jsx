import Addtodo from "./component/AddTodo";
import Appname from "./component/AppName";
import "./App.css";
// import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems.jsx";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
function App() {
const [todoItems,setTodoItems] = useState([]);
const handleNewItem = (itemName , itemDueDate)=>{
  const newTodoItems = [...todoItems,{name:itemName,
    dueDate:itemDueDate},
  ];
  setTodoItems(newTodoItems);
};
const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter(item => item.name!==todoItemName)
  setTodoItems(newTodoItems);
}
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo onNewItem = {handleNewItem} />
      {todoItems.length===0 && <WelcomeMessage />}
      <TodoItems
       todoItems={todoItems}
       onDeleteClick={handleDeleteItem}  >

       </TodoItems>
     
    </center>
  );
}

export default App;
