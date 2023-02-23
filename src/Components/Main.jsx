import React, { useState } from "react";
import CreateNewTodo from "./Form/CreateNewTodo";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const onAddTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };
  return (
    <div className="container">
      <h1>ToDo App</h1>
      <CreateNewTodo onAddTask={onAddTask} />
      <TaskList todosData={tasks} />
    </div>
  );
};

export default Main;
