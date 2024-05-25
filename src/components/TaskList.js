import React from "react";
import Task from "./Task";
import { TASKS } from "../data";


function TaskList({tasks , setTasks}) {
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };


  return (
    <div className="tasks">
      {TASKS.map((task) =>(
        <Task key={task.text} 
              id={task.id} 
              text={task.text} 
              category={task.category}
               onDelete={handleDelete} 
          />
      ))}
    </div>
  );
}

export default TaskList;
