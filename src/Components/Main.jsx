import React, { useState } from "react";
import CreateNewTodo from "./Form/CreateNewTodo";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const onAddTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };

  const onRemoveIncomplete = (id) => {
    const filterTasks = tasks.filter((obj) => obj.id !== id);
    const completeData = tasks.filter((obj) => obj.id === id);
    setTasks(filterTasks);
    setCompleteTasks(completeTasks.concat(completeData[0]));
  };
  const onRemoveComplete = (id) => {
    const removeTasks = completeTasks.filter((obj) => obj.id !== id);
    setCompleteTasks(removeTasks);
  };
  return (
    <div className="container">
      <h1>ToDo App</h1>
      <CreateNewTodo onAddTask={onAddTask} />
      <TaskList
        todosData={tasks}
        onRemoveIncomplete={onRemoveIncomplete}
        completedTodoData={completeTasks}
        onRemoveComplete={onRemoveComplete}
      />
    </div>
  );
};

export default Main;
