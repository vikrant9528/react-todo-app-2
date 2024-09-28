import Addtodo from "./component/AddTodo";
import Appname from "./component/AppName";
import "./App.css";
// import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems.jsx";
function App() {
  const todoItems = [
    {
    name:'Buy Milk',
    dueDate:'4/10/22'
  },
  {
    name:'Go to College',
    dueDate:'4/10/22'
  },
  {
    name:'learn react',
    dueDate:'08/12/24'
  },
];
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <TodoItems todoItems={todoItems}></TodoItems>
     
    </center>
  );
}

export default App;
