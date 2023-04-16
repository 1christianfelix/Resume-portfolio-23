import React, { useState, useEffect, forwardRef } from "react";
import { renderToString } from "react-dom/server";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const App = forwardRef((props, ref) => {
  const [elements, setElements] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const elementsData = [
      <div className="chat chat-start w-[10rem]">
        <motion.div
          className="chat-bubble chat-bubble-accent text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -20 }}
          transition={{ delay: 5, duration: 1, ease: "easeInOut" }}
        >
          <TypeAnimation
            sequence={[
              "Hi!", // Types 'One'
            ]}
            wrapper="p"
            cursor={false}
            repeat={false}
            style={{ display: "inline-block" }}
            speed={{ type: "keyStrokeDelayInMs", value: 45 }}
          />
        </motion.div>
      </div>,
      <div className="chat chat-end w-[10rem]">
        <motion.div
          className="chat-bubble chat-bubble-info text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -20 }}
          transition={{ delay: 5.5, duration: 0.5, ease: "easeInOut" }}
        >
          <TypeAnimation
            sequence={[
              "Hey There!", // Types 'One'
            ]}
            wrapper="p"
            cursor={false}
            repeat={false}
            style={{ display: "inline-block" }}
            speed={{ type: "keyStrokeDelayInMs", value: 45 }}
          />
        </motion.div>
      </div>,
      <div className="chat chat-end w-[10rem]">
        <motion.div className="chat-bubble chat-bubble-info text-white">
          <TypeAnimation
            sequence={[
              "Welcome to my Portfolio!", // Types 'One'
            ]}
            wrapper="p"
            cursor={false}
            repeat={false}
            style={{ display: "inline-block" }}
            speed={{ type: "keyStrokeDelayInMs", value: 45 }}
          />
        </motion.div>
      </div>,
    ];

    setElements(elementsData);
  }, []);

  useEffect(() => {
    if (visibleIndex < elements.length - 1) {
      const timer = setTimeout(() => {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex, elements]);

  return (
    <div className="" ref={ref}>
      {elements.map((element, index) => {
        const translateY =
          index <= visibleIndex ? -(visibleIndex - index) * 80 : 0;
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              bottom: 0,
              transform: `translateY(${translateY}px)`,
              opacity: index <= visibleIndex ? 1 : 0,
              transition: "transform 1s, opacity 1s",
            }}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
});

export default App;

{
  /* <div className="h-screen w-screen bg-black relative z-200 ">
          {initialChatPosition.start && (
            <motion.div
              className="absolute"
              initial={{
                left: "40%",
                bottom: initialChatPosition.bottom,
                x: "0px",
              }}
              animate={{ left: "50%", bottom: "96px", x: "-512px" }}
              transition={{
                duration: 2,
                delay: 6,
                ease: "anticipate",
              }}
              onAnimationComplete={() => {
                setLoadCanvas(true);
              }}
            >
              <div className="chat chat-start w-[10rem]">
                <motion.div
                  className="chat-bubble chat-bubble-primary text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TypeAnimation
                    sequence={[
                      800,
                      "Hi!", // Types 'One'
                      1000, // Waits 1s
                      "Welcome to my portfolio!",
                    ]}
                    wrapper="p"
                    cursor={false}
                    repeat={false}
                    style={{ display: "inline-block" }}
                    speed={{ type: "keyStrokeDelayInMs", value: 45 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div> */
}
