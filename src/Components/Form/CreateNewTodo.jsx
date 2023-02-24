import React, { useState } from "react";

const CreateNewTodo = (props) => {
  const [task, setTask] = useState({
    taskName: "",
    taskDesc: "",
    date: "",
  });

  const { taskName, taskDesc, date } = task;
  const handleChange = (event) => {
    setTask(() => {
      return { ...task, [event.target.name]: event.target.value };
    });
  };
  const addTask = (event) => {
    event.preventDefault();
    props.onAddTask(task);
    setTask({ taskName: "", taskDesc: "", date: "" });
  };

  return (
    <form onSubmit={addTask}>
      <div>
        <input
          type="text"
          name="taskName"
          id="taskName"
          placeholder="Enter Your Task"
          value={taskName}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="taskDesc"
          id="taskDesc"
          placeholder="Please write your TODO description if any"
          cols="40"
          rows="3"
          value={taskDesc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        {/* <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleChange}
        /> */}
        <input
          type="datetime-local"
          name="date"
          id="date"
          value={date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default CreateNewTodo;
