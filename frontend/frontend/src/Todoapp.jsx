import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./todo.css";

function Todoapp() {
  const [task, setTask] = useState("");
  const [myTask, setMyTask] = useState(["TASK-1"]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setMyTask([...myTask, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updated = [...myTask];
    updated.splice(index, 1);
    setMyTask(updated);
  };

  const completeTask = (index) => {
    const completedTask = myTask[index];
    setCompleted([...completed, completedTask]);
    removeTask(index);
  };

  return (
    <div className="main-bg d-flex justify-content-center align-items-center vh-100">
      <div className="container p-4 rounded shadow bg-white text-center" style={{ maxWidth: "450px" }}>

        <h2 className="text-pink mb-3">TO DO APP</h2>

        <input
          type="text"
          placeholder="Enter Task---"
          className="form-control mb-3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="btn btn-success w-100 mb-4" onClick={addTask}>
          ADD TASK
        </button>

        <h4 className="text-pink">MY TASK</h4>
        {myTask.map((t, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center p-2">
            <span>{t}</span>
            <div>
              <button className="btn btn-danger btn-sm me-2" onClick={() => removeTask(index)}>
                REMOVE
              </button>
              <button className="btn btn-success btn-sm" onClick={() => completeTask(index)}>
                COMPLETE
              </button>
            </div>
          </div>
        ))}

        <h4 className="text-pink mt-4">COMPLETE TASK</h4>
        {completed.map((t, index) => (
          <p key={index} className="m-0">{t}</p>
        ))}

      </div>
    </div>
  );
}

export default Todoapp;
