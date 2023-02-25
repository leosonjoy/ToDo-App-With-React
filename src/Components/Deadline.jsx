import React, { useState } from "react";

const Deadline = (props) => {
  const [day, setDay] = useState(0);
  const [hour, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  //   const { id } = props;
  let { deadline } = props;
  let deadlineDate = new Date(deadline);

  const count = () => {
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
  };
  setInterval(() => {
    count();
  }, 1000);
  let deadlineTime;
  if (day > 0) {
    deadlineTime = <p>{day}day</p>;
  } else if (hour > 0) {
    deadlineTime = <p>{hour}hour</p>;
  } else if (min > 0) {
    deadlineTime = <p>{min}min</p>;
  } else if (sec > 0) {
    deadlineTime = <p>{sec}sec</p>;
  } else {
    deadlineTime = <p>Overdue</p>;
  }

  return (
    <div className="task-item-deadline">
      <p>Deadline</p>
      {deadlineTime}
    </div>
  );
};

export default Deadline;
