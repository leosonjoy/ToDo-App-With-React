import React from "react";
import Deadline from "./Deadline";

const IncompleteTask = (props) => {
  const { taskName, taskDesc, date, id } = props.todo;

  const handleCheckbox = () => {
    return props.onRemoveIncomplete(id);
  };
  return (
    <li>
      <div className="task-item">
        <input type="checkbox" onClick={handleCheckbox} />
        <div className="task-item-content">
          <h4 className="task-item-title">{taskName}</h4>
          <p className="task-item-description">{taskDesc}</p>
        </div>
        <Deadline deadline={date} id={id} />
      </div>
    </li>
  );
};

export default IncompleteTask;
