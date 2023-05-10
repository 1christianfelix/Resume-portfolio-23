import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsSquare } from "react-icons/bs";
import { MdMinimize } from "react-icons/md";
import Draggable from "react-draggable";
import AppContext from "../contexts/AppContext";

const ProjectFolder = (props) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };
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
      <div className={`absolute ${size} bg-[#f5f5f4] z-[100] flex flex-col`}>
        <section className="h-[1.5rem] w-[100%] bg-[#EBE8E2] flex items-center justify-between realtive drag-handle">
          <span className="text-black justify-self-start ml-2 hover:cursor-default">
            My Projects
          </span>
          <div className="flex items-center gap-x-[.5rem] mr-2">
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
        <div className=" flex">
          <section className="h-[1.5rem] w-[35%] border-slate-300 border-b-[1px] border-r-[1px] flex px-2 items-center text-xs">
            <span className=" hover:cursor-default">
              {"Christian Felix > Desktop > My Projects"}
            </span>
          </section>
          <section className="pl-2 h-[1.5rem] w-[65%] border-slate-300 border-b-[1px] text-xs  flex items-center">
            <span>Preview</span>
          </section>
        </div>
        <div className="flex-grow flex">
          <section className="w-[35%] border-slate-300 border-r-[1px]">
            <section>
              <table className="w-full border-collapse border border-b-0 border-gray-300 table-fixed">
                <thead className="">
                  <tr className="">
                    <th
                      width="100"
                      className="pl-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      width="100"
                      className="pl-2  py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th className="pl-2 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Stack/Libraries
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[.8rem] hover:cursor-pointer">
                  <tr
                    className={`even:bg-gray-100 odd:bg-[#e5e7eb] ${
                      selectedRow === 0
                        ? "border-solid border-slate-500 border-[.5px] text-blue-500"
                        : ""
                    }`}
                    onClick={() => handleRowClick(0)}
                  >
                    <td className="pl-2">SCRUMptious</td>
                    <td className="pl-2">April 2023</td>
                    <td className="pl-2">
                      React, FastAPI, MongoDB, Tailwind, Python, JavaScript
                    </td>
                  </tr>
                  <tr
                    className={`even:bg-gray-100 odd:bg-[#e5e7eb] ${
                      selectedRow === 1
                        ? "border-solid border-slate-500 border-[.5px] text-blue-500"
                        : ""
                    }`}
                    onClick={() => handleRowClick(1)}
                  >
                    <td className="pl-2">Myoot</td>
                    <td className="pl-2">Mar 2023</td>
                    <td className="pl-2">
                      React, Tailwind, Framer Motion, JavaScript
                    </td>
                  </tr>
                  <tr
                    className={`even:bg-gray-100 odd:bg-[#e5e7eb] ${
                      selectedRow === 2
                        ? "border-solid border-slate-500 border-[.5px] text-blue-500"
                        : ""
                    }`}
                    onClick={() => handleRowClick(2)}
                  >
                    <td className="pl-2">CarCar</td>
                    <td className="pl-2">Mar 2023</td>
                    <td className="pl-2">
                      React, Django, Postgres, Bootstrap, Python, JavaScript
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
          <section className="flex-grow flex flex-col">
            <div className="Preview-Vid h-[70%]">
              {" "}
              This section should be a carousel of vids/pics
            </div>
            <div className="border-slate-300 border-t-[1px]">Description</div>
          </section>
        </div>
      </div>
    </Draggable>
  );
};

export default ProjectFolder;
