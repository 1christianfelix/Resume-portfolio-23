import React, { useState, useEffect, useContext } from "react";
import TerminalContext from "../contexts/TerminalContext";

const Terminal = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const { terminalLines, addTerminalLines } = useContext(TerminalContext);

  useEffect(() => {
    if (visibleIndex < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex, terminalLines]);

  return (
    <div className="container mx-auto p-8">
      <div className="mt-4">
        <h2 className="mb-2 font-bold h-[2rem]">Rendered content:</h2>
        <div
          className=" w-[30rem] bg-black overflow-hidden"
          style={{ position: "relative", height: "10rem" }}
        >
          {terminalLines.map((element, index) => {
            const translateY =
              index <= visibleIndex ? -(visibleIndex - index) * 20 : 0;
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  bottom: 0,
                  transform: `translateY(${translateY}px)`,
                  opacity: index <= visibleIndex ? 1 : 0,
                  transition: "transform .25s, opacity .25s",
                }}
              >
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
