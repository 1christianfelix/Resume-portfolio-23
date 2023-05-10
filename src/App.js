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
import { AppProvider } from "./contexts/AppContext";
import ProjectFolder from "./apps/ProjectFolder";

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
      <AppProvider>
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
                      duration: 1.75,
                      delay: 1.5,
                      ease: "anticipate",
                    }}
                    exit={{
                      opacity: 0,
                      transition: { delay: 0.5 },
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
                  duration={{ ease: "easeIn" }}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-in ${
                      wallpaper === "wallpaper_city"
                        ? background
                        : " opacity-20"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-in ${
                      wallpaper === "wallpaper_sky" ? background : " opacity-20"
                    }`}
                  ></div>

                  <div className={`h-screen relative`}>
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
                        {/* <Terminal></Terminal> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </DesktopContext.Provider>
        </WallpaperContext.Provider>
      </AppProvider>
    </TerminalProvider>
  );
}

export default App;
