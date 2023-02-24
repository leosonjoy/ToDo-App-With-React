import React, { useState } from "react";

const Deadline = (props) => {
  const [totalCountSec, setTotalCountSec] = useState(0);
  const [day, setDay] = useState(0);
  const [hour, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  //   const { id } = props;
  let { deadline } = props;
  let deadlineDate = new Date(deadline);

  let currentDate = new Date();

  let totalSec = Math.round((deadlineDate - currentDate) / 1000);
  let daysCount = Math.floor(totalSec / 3600 / 24);
  let hoursCount = Math.floor(totalSec / 3600) % 24;
  let minsCount = Math.floor(totalSec / 60) % 60;
  let secCount = Math.floor(totalSec % 60);

  setDay(daysCount);
  setHours(hoursCount);
  setMin(minsCount);
  setSec(secCount);

  return (
    <div className="task-item-deadline">
      <p>Deadline</p>
      <p>
        {day}d: {hour}h: {min}m: {sec}s
      </p>
    </div>
  );
};

export default Deadline;
