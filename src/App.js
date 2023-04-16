import React, { useState, useEffect, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas layers/Canvas";
import AnimatedRectangle from "./components/AnimatedRectangle";
import { easeInOut, motion, AnimatePresence, easeIn } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import WallpaperContext from "./contexts/WallpaperContext";
import DesktopContext from "./contexts/DesktopContext";
import TextAnimation from "./components/TextAnimation";
import { TerminalProvider } from "./contexts/TerminalContext.jsx";
import Terminal from "./components/Terminal";

import CanvasTwo from "./canvas layers/CanvasTwo";
import ChickenCanvas from "./canvas layers/ChickenCanvas";
import computerOnImageSrc from "./assets/computer_on.png";
import computerOnImageSrc2 from "./assets/computer_on2.png";

function App() {
  const [wallpaper, setWallpaper] = useState("default");
  const [background, setBackground] = useState("");
  const [loadDesktop, setLoadDesktop] = useState(false);
  const [loadCanvas, setLoadCanvas] = useState(false);
  const [initialChatPosition, setInitialChatPosition] = useState({
    bottom: 0,
    start: false,
  });

  useEffect(() => {
    const parentElement = document.querySelector(".h-screen.w-screen");
    if (parentElement) {
      const parentHeight = parentElement.clientHeight;

      setInitialChatPosition({
        bottom: `${parentHeight * 0.5}px`,
        start: true,
      });
    }
  }, []);
  console.log(initialChatPosition);

  useEffect(() => {
    switch (wallpaper) {
      case "wallpaper_city":
        setBackground("wallpaper_city_bg opacity-100");
        break;
      case "wallpaper_sky":
        setBackground("wallpaper_sky_bg opacity-0");
        setTimeout(() => {
          setBackground("wallpaper_sky_bg opacity-100");
        }, 100);
        break;
      default:
        setBackground("bg-slate-300");
    }
  }, [wallpaper]);

  const MotionTextAnimation = motion(TextAnimation);

  return (
    <TerminalProvider>
      <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
        <DesktopContext.Provider value={{ loadDesktop, setLoadDesktop }}>
          <div className="h-screen w-screen relative z-200 ">
            <AnimatePresence>
              {initialChatPosition.start && (
                <motion.div
                  className="absolute"
                  initial={{
                    scale: 2,
                    left: "45%",
                    bottom: initialChatPosition.bottom,
                    x: "0px",
                  }}
                  animate={{
                    scale: 1,
                    left: "50%",
                    bottom: "96px",
                    x: "-432px",
                  }}
                  transition={{
                    duration: 2,
                    delay: 3,
                    ease: "anticipate",
                  }}
                  exit={{
                    opacity: 0,
                    transition: { delay: 1.5 },
                  }}
                  onAnimationComplete={() => {
                    setLoadCanvas(true);
                    setInitialChatPosition({ start: false });
                  }}
                >
                  <TextAnimation></TextAnimation>
                </motion.div>
              )}
            </AnimatePresence>
            {loadCanvas && (
              <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                duration={{ duration: 1, ease: "easeIn" }}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in ${
                    wallpaper === "wallpaper_city" ? background : " opacity-20"
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-in ${
                    wallpaper === "wallpaper_sky" ? background : " opacity-20"
                  }`}
                ></div>

                <div className={`h-screen relative`}>
                  <motion.div
                    className="absolute bottom-[96px] left-[50%] -translate-x-[calc(392px+40px)]
          "
                  >
                    <motion.div
                      className="chat chat-end w-[10rem]"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ opacity: { delay: 1.6, duration: 1 } }}
                    >
                      <motion.div
                        className="chat-bubble chat-bubble-info text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.45 }}
                      >
                        <TypeAnimation
                          sequence={[
                            "Welcome to my Portfolio!",
                            100,
                            "To the computer!",
                          ]}
                          wrapper="p"
                          cursor={false}
                          repeat={false}
                          style={{ display: "inline-block" }}
                          speed={{ type: "keyStrokeDelayInMs", value: 45 }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <div>
                    <div
                      className={
                        wallpaper == "default" || wallpaper == "wallpaper_sky"
                          ? "absolute bottom-2 left-[50%] -translate-x-[calc(392px+120px)]"
                          : "hidden"
                      }
                    >
                      <Canvas></Canvas>
                    </div>

                    <div
                      className={
                        wallpaper == "wallpaper_city"
                          ? "absolute bottom-2 left-[50%] -translate-x-[calc(392px+120px)]"
                          : "hidden"
                      }
                    >
                      <CanvasTwo></CanvasTwo>
                    </div>
                  </div>

                  <div className="flex flex-col h-[100%] items-center justify-center">
                    {loadDesktop && <AnimatedRectangle></AnimatedRectangle>}
                    <div className="absolute">
                      <Terminal></Terminal>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* <div className="h-screen w-screen bg-black relative z-200 ">
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
        </div> */}
        </DesktopContext.Provider>
      </WallpaperContext.Provider>
    </TerminalProvider>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { renderToString } from "react-dom/server";
// import "tailwindcss/tailwind.css";

// const App = () => {
//   const [elements, setElements] = useState([]);
//   const [visibleIndex, setVisibleIndex] = useState(-1);

//   useEffect(() => {
//     const elementsData = [
//       renderToString(<div className="text-xl">Hello</div>),
//       <pre data-prefix="$">
//         <code>npm i daisyui</code>
//       </pre>,
//       <pre data-prefix=">" className="text-warning">
//         <code>installing...</code>
//       </pre>,
//       <pre data-prefix=">" className="text-success">
//         <code>Done!</code>
//       </pre>,
//       <pre data-prefix=">" className="text-success">
//         <code>Done!</code>
//       </pre>,
//       <pre data-prefix=">" className="text-success">
//         <code>Done!</code>
//       </pre>,
//       <pre data-prefix="$">
//         <code>npm i daisyui</code>
//       </pre>,
//       <pre data-prefix=">" className="text-warning">
//         <code>installing...</code>
//       </pre>,
//       <pre data-prefix="$">
//         <code>npm i daisyui</code>
//       </pre>,
//       <pre data-prefix=">" className="text-warning">
//         <code>installing...</code>
//       </pre>,
//     ];

//     setElements(elementsData);
//   }, []);

//   useEffect(() => {
//     if (visibleIndex < elements.length - 1) {
//       const timer = setTimeout(() => {
//         setVisibleIndex((prevIndex) => prevIndex + 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [visibleIndex, elements]);

//   return (
//     <div className="container mx-auto p-8">
//       <div className="mt-4">
//         <h2 className="mb-2 font-bold h-[2rem]">Rendered content:</h2>
//         <div
//           className="mockup-code bg-black"
//           style={{ position: "relative", height: "10rem" }}
//         >
//           {elements.map((element, index) => {
//             const translateY =
//               index <= visibleIndex ? -(visibleIndex - index) * 20 : 0;
//             return (
//               <div
//                 key={index}
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   transform: `translateY(${translateY}px)`,
//                   opacity: index <= visibleIndex ? 1 : 0,
//                   transition: "transform 1s, opacity 1s",
//                 }}
//               >
//                 {element}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
