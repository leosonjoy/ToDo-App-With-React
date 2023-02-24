import React from "react";

const CompletedTask = (props) => {
  //   console.log(props.comTodo);
  const { taskName, taskDesc, date, id, onRemoveComplete } = props.comTodo;
  const removeTask = () => {
    props.onRemoveComplete(id);
  };
  return (
    <li>
      <div className="task-item">
        <div className="task-item-content">
          <h4 className="task-item-title">{taskName}</h4>
          <p className="task-item-description">{taskDesc}</p>
        </div>
        <button className="task-item-button" onClick={removeTask}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default CompletedTask;
