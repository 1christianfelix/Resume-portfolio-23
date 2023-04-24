import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsSquare } from "react-icons/bs";
import { MdMinimize } from "react-icons/md";
import Draggable from "react-draggable";
import AppContext from "../contexts/AppContext";

const ProjectFolder = (props) => {
  const [size, setSize] = useState(
    "h-[calc(100%-1.5rem)] w-[calc(100%-1.5px)]"
  );
  const [expanded, setExpanded] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <Draggable
      handle=".drag-handle"
      bounds=".desktop-boundary"
      position={position}
      onDrag={(_, newPosition) => setPosition(newPosition)}
    >
      <div className={`absolute ${size} bg-[#f5f5f4] z-[100]`}>
        <section className="h-[1.5rem] w-[100%] bg-[#EBE8E2] flex items-center justify-between last:p-2 realtive drag-handle">
          <span className="text-black justify-self-start">My Projects</span>
          <div className="flex items-center gap-x-[.5rem]">
            <MdMinimize className="windows_btns self-end"></MdMinimize>
            <BsSquare
              className="h-[2] windows_btns"
              onClick={() => {
                if (!expanded) {
                  setPosition({ x: 0, y: 0 });
                }
                setSize(
                  !expanded
                    ? "h-[calc(100%-1.5rem)] w-[calc(100%-1.5px)]"
                    : "h-[70%] w-[70%]"
                );
                setExpanded((prev) => {
                  return !prev;
                });
              }}
            ></BsSquare>
            <GrClose
              className="windows_btns"
              onClick={props.closeFolder}
            ></GrClose>
          </div>
        </section>
      </div>
    </Draggable>
  );
};

export default ProjectFolder;
