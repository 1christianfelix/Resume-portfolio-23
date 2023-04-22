import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { BsSquare } from "react-icons/bs";
import { MdMinimize } from "react-icons/md";
import { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import Draggable from "react-draggable";

const ProjectFolder = () => {
  const [expanded, setExpanded] = useState(false);
  const [maxWidth, setMaxWidth] = useState(300);
  const [maxHeight, setMaxHeight] = useState(300);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // get the desktop-boundary dimensions
  // useEffect(() => {
  //   const parentContainer = document.querySelector(".desktop-boundary");
  //   if (parentContainer) {
  //     const parentRect = parentContainer.getBoundingClientRect();
  //     setMaxWidth(parentRect.width);
  //     setMaxHeight(parentRect.height);
  //   }
  // }, []);

  return (
    // <div className="w-[100%] h-[100%]  bg-opacity-0 parent-container">
    <div className="absolute z-[100]">
      <Draggable
        handle=".drag-handle"
        bounds=".desktop-boundary onDrag={(_, newPosition) => setPosition(newPosition)}"
      >
        <ResizableBox
          width={200}
          height={200}
          minConstraints={[200, 200]}
          maxConstraints={[
            Math.max(100, maxWidth - position.x),
            Math.max(100, maxHeight - position.y),
          ]}
          resizeHandles={["se"]}
        >
          <div className="bg-[#f5f5f4] h-full w-full">
            <section className="drag-handle h-[1.5rem] w-[100%] bg-[#EBE8E2] flex items-center justify-between last:p-2 realtive">
              <span className="text-black justify-self-start">My Projects</span>
              <div className="flex items-center gap-x-[.5rem]">
                <MdMinimize className="windows_btns self-end"></MdMinimize>
                <BsSquare
                  className="h-[2] windows_btns"
                  onClick={() => {
                    setExpanded((prev) => {
                      return !prev;
                    });
                  }}
                ></BsSquare>
                <GrClose className="windows_btns"></GrClose>
              </div>
            </section>
            {/* Add the rest of the content you want to be resizable here */}
          </div>
        </ResizableBox>
      </Draggable>
    </div>
    // </div>
  );
};

export default ProjectFolder;
