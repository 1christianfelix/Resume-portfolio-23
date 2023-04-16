import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Desktop from "./Desktop";

const AnimatedRectangle = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScreenOn, setIsScreenOn] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-screen h-[75%] self-end justify-self-end relative">
        <motion.div
          className="absolute text-black border-[12px] border-y-[16px] border-black rounded-md left-[50%] -translate-x-[50%] bottom-[32px] drop-shadow-3xl-white"
          initial={{
            visibility: "hidden",
            width: "0%",
            height: isExpanded ? "0px" : "0px",
          }}
          animate={{
            visibility: "visible",
            width: "calc(100% - 150px)",
            height: isExpanded ? "calc(100% - 50px)" : "0px",
          }}
          transition={{
            delay: isExpanded ? 0 : 0.45,
            ease: "easeInOut",
            duration: 0.7,
          }}
          onAnimationComplete={() => {
            setIsExpanded(true);

            setIsScreenOn(true);
          }}
        >
          <Desktop screenOn={isScreenOn}></Desktop>
        </motion.div>
        <motion.div
          className="arrow-down absolute left-[50%] -translate-x-[50%] bottom-[6px] "
          initial={{
            opacity: 0,
            clipPath: "polygon(0 100%, 100% 100%, 50% 100%)",
          }}
          animate={{ opacity: 100, clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="w-screen h-[300px]"></div>
    </div>
  );
};

export default AnimatedRectangle;
