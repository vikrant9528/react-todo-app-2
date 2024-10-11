import { useState,useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
function Addtodo({onNewItem}) {
  const [todoName , setTodoName] = useState('');
  const [dueDate , setDueDate] = useState('');
  const noOfUpdates = useRef(0);

  const handleNameChange = (e) =>{
    setTodoName(e.target.value);
    noOfUpdates.current +=1;
  }
  const handleDateChange = (e) =>{
    setDueDate(e.target.value);
    console.log(`no of updates are ${noOfUpdates.current}`);
  }
  const handleAddButtonclicked = (event) =>{
    event.preventDefault();
    onNewItem(todoName , dueDate);
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="container text-center">
      <form onSubmit={ handleAddButtonclicked}>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
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
