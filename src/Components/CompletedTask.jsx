import React from "react";

const CompletedTask = (props) => {
  //   console.log(props.comTodo);
  const { taskName, taskDesc, date, id } = props.comTodo;
  return (
    <li>
      <div className="task-item">
        <div className="task-item-content">
          <h4 className="task-item-title">{taskName}</h4>
          <p className="task-item-description">{taskDesc}</p>
        </div>
        <button className="task-item-button">Delete</button>
      </div>
    </li>
  );
};

export default CompletedTask;
