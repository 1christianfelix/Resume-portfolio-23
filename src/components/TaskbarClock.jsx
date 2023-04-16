import React from "react";
import Clock from "react-live-clock";

const TaskbarClock = () => {
  return (
    <div className="text-[Segoe UI] text-white text-[.75rem] px-2 hover:cursor-default">
      <Clock format={"h:mm A"} ticking={true} />
    </div>
  );
};

export default TaskbarClock;
