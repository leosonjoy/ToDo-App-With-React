import React from "react";

const IncompleteTask = (props) => {
  const { taskName, taskDesc, date } = props.todo;
  const { id } = props;

  return (
    <li id={id}>
      <div className="task-item">
        <input type="checkbox" />
        <div className="task-item-content">
          <h4 className="task-item-title">{taskName}</h4>
          <p className="task-item-description">{taskDesc}</p>
        </div>
        <div className="task-item-deadline">
          <p>Deadline</p>
          <p>{date}</p>
        </div>
      </div>
    </li>
  );
};

export default IncompleteTask;
