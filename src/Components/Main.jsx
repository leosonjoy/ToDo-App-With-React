import React, { useState } from "react";
import CreateNewTodo from "./Form/CreateNewTodo";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

// const completeData = {
//   taskName: "Task1",
//   taskDesc: "this is task1",
//   date: "22-12-2022",
//   id: 1,
// };
// {
//   taskName: "Task1",
//   taskDesc: "this is task1",
//   date: "22-12-2022",
//   id: 2,
// },
// {
//   taskName: "Task1",
//   taskDesc: "this is task1",
//   date: "22-12-2022",
//   id: 3,
// },
const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [completeTaskData, setCompleteTaskData] = useState({
    taskName: "",
    taskDesc: "",
    date: "",
    id: "",
  });

  const [completeTask, setCompleteTasks] = useState([]);

  // setCompleteTasks([...completeData]);
  console.log(completeTask);

  const onAddTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };

  const onRemoveIncomplete = (id) => {
    // console.log(id);
    // console.log(tasks);
    const filterTasks = tasks.filter((obj) => obj.id !== id);
    setTasks(filterTasks);
    const completeTaskTodo = tasks.filter((obj) => obj.id === id);
    // setCompleteTaskData({ ...completeTaskData, completeTaskTodo });
    setCompleteTaskData({
      taskName: completeTaskTodo.taskName,
      taskDesc: completeTaskTodo.taskDesc,
      date: completeTaskTodo.date,
      id: completeTaskTodo.id,
    });
    setCompleteTasks([...completeTask, completeTaskData]);
    // setCompleteTasks([...completeTask]);
  };
  return (
    <div className="container">
      <h1>ToDo App</h1>
      <CreateNewTodo onAddTask={onAddTask} />
      <TaskList
        todosData={tasks}
        onRemoveIncomplete={onRemoveIncomplete}
        completedTodoData={completeTask}
      />
    </div>
  );
};

export default Main;
