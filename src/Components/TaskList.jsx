import React from "react";
import IncompleteTask from "./IncompleteTask";

const TaskList = (props) => {
  console.log(props);
  const { todosData } = props;
  return (
    <section>
      <div className="tasklist">
        <div>
          <h1>Incomplete Tasks</h1>
          <ul id="incomplete">
            {todosData.map(
              (todo) => (
                <IncompleteTask
                  key={todo.id}
                  todo={todo}
                  // onRemove={onRemove(id)}
                />
              )
              //   console.log(todo.id)
            )}
          </ul>
        </div>
        {/* COMPLETED TASK */}
        {/* <div>
            <h1>Complete Tasks</h1>
            <ul id="complete">
              <li>
                <div className="task-item">
                  <div className="task-item-content">
                    <h4 className="task-item-title">Item Title</h4>
                    <p className="task-item-description">
                      Item description goes here.
                    </p>
                  </div>
                  <button className="task-item-button">Delete</button>
                </div>
              </li>
            </ul>
          </div> */}
      </div>
    </section>
  );
};

export default TaskList;
