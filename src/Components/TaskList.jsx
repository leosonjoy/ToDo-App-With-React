import React, { useState } from "react";

import CompletedTask from "./CompletedTask";
import IncompleteTask from "./IncompleteTask";

const TaskList = (props) => {
  const { todosData, completedTodoData } = props;
  return (
    <section>
      <div className="tasklist">
        <div>
          <h1>Incomplete Tasks</h1>
          <ul id="incomplete">
            {todosData.map((todo) => (
              <IncompleteTask
                key={todo.id}
                todo={todo}
                onRemoveIncomplete={props.onRemoveIncomplete}
              />
            ))}
          </ul>
        </div>
        {/*====== COMPLETED TASK =====*/}
        <div>
          <h1>Complete Tasks</h1>
          <ul id="complete">
            {completedTodoData.map((comTodo) => (
              <CompletedTask
                key={comTodo.id}
                comTodo={comTodo}
                onRemoveComplete={props.onRemoveComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
