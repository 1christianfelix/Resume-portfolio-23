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
        <ul className="pt-2 text-sm">
          <li>1.Fix the media queires for everything under 1080p!</li>
          <li>2.Double click or Single click? hmmm</li>
          <li className="mb-5"></li>
          <li>Want to ask me stuff???</li>
          <li>Contact me here! 1christianfelix@gmail.com</li>
        </ul>
      </div>
    </Draggable>
  );
};

export default Sticky;
