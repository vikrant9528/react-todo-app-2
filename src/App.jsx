import Addtodo from "./component/AddTodo";
import Appname from "./component/AppName";
import "./App.css";
// import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems.jsx";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";
function App() {
const [todoItems,setTodoItems] = useState([]);
const addNewItem = (itemName , itemDueDate)=>{
  //when update is depend on past value use return function instead of spread operator called functional updates
  setTodoItems((currValue)=>{
    const newTodoItems = [...currValue,{name:itemName,
      dueDate:itemDueDate},
    ];
    return newTodoItems
  });
};
const deleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter(item => item.name!==todoItemName)
  setTodoItems(newTodoItems);
}
  return (
    //context api ko tbb use karenge tbb bhut sari cheej common ho aur dependent ho
    //using context api here at the container level which provide this data commonluy to all components
    <TodoItemsContext.Provider value={{
      //agr key aur value dono same ho toh aese bhi likh skte hai
      todoItems,
      addNewItem,
      deleteItem
      }}>
    <center className="todo-container">
      <Appname />
      <Addtodo  />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems>
       </TodoItems>
     
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
