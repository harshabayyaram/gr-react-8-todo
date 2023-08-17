import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import "../style.css";

const App = () => {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Update Resume", status: false },
    { id: 2, title: "Complete React Exercise", status: false },
  ]);

  const [newTask,setNewTask] = useState('');//temp state

  const addTask = () => {
    if(newTask){
      let num = toDo.length+1;//id
      let newEntry = {id:num , title: newTask , status:false}
      setToDo([...toDo, newEntry])//inserting data
      setNewTask('');//clear temp state
    }
  };

  const markDone = (id) => {
    const newTask = toDo.map(task =>{
      if(task.id===id){
        return({...task,status: !task.status})
      }
      return task;
    }) 
    setToDo(newTask);
  };

  return (
    <div className="p-5 border border-primary">
      <h1>MY Todo List</h1>

      {toDo && toDo.length ? "" : " no tasks...."}

      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg p-2">
                <div className={ task.status ? "done" : ""}>
                  <input  type="checkbox" onChange={(e)=> markDone(task.id)}/>
                  <span className="p-2">{task.title}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}

      <input type="text" className="p-2 form-control form-control-lg" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new ToDo"/>

      <button onClick={addTask} className="m-2 p-2 btn btn-lg btn-success">ADD</button>
    </div>
  );
};

export default App;