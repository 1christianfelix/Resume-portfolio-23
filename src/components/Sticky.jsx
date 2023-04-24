import React, { useState } from "react";
import Draggable from "react-draggable";

const Sticky = () => {
  const [position, setPosition] = useState({ x: 750, y: 250 });
  return (
    <Draggable
      bounds=".desktop-boundary"
      position={position}
      onDrag={(_, newPosition) => setPosition(newPosition)}
    >
      <div className="h-60 w-60 bg-[#feff9c] absolute z-[90] p-3">
        <span className="">Reminders:</span>
        <ul className="pt-2">
          <li>Double Click the applications to use them!</li>
        </ul>
      </div>
    </Draggable>
  );
};

export default Sticky;
