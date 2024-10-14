import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
function Addtodo({onNewItem}) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  //useRef ka use karke humne repainting bachali jo use state se hoti thi baar baar
  // const handleNameChange = (e) =>{
  //   setTodoName(e.target.value);
  // }
  // const handleDateChange = (e) =>{
  //   setDueDate(e.target.value);
  //   console.log(`no of updates are ${noOfUpdates.current}`);
  // }
  const handleAddButtonclicked = (event) =>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName,dueDate);
  }
  return (
    <div className="container text-center">
      <form onSubmit={ handleAddButtonclicked}>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text"
          ref={todoNameElement}
           placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date"
          ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button
          className="btn btn-success kg-button"
          type="submit">
            <MdLibraryAdd />
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}
export default Addtodo;
