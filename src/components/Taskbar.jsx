import React, { useState, useEffect, useContext } from "react";
import { DiWindows } from "react-icons/di";
import TaskbarClock from "./TaskbarClock";
import WallpaperContext from "../contexts/WallpaperContext";

const Taskbar = () => {
  const { wallpaper, setWallpaper } = useContext(WallpaperContext);
  const [taskbarColor, setTaskbarColor] = useState("wallpaper_sky_taskbar");
  const [taskbarStart, setTaskbarStart] = useState(
    "wallpaper_sky_taskbar_start"
  );

  useEffect(() => {
    switch (wallpaper) {
      case "wallpaper_city":
        setTaskbarColor("wallpaper_city_taskbar");
        setTaskbarStart("wallpaper_city_taskbar_start");

        break;
      case "wallpaper_sky":
        setTaskbarColor("wallpaper_sky_taskbar");
        setTaskbarStart("wallpaper_sky_taskbar_start");
        break;
    }
  }, [wallpaper]);

  return (
    <div
      className={`absolute -bottom-[.10rem] text-4xl w-[calc(100%)] h-[2rem] ${taskbarColor} backdrop-blur-lg flex justify-between overflow-hidden items-center z-[200]`}
    >
      <DiWindows className={`text-white p-1 bg-transparent ${taskbarStart}`} />
      <div className="flex items-center">
        <div className="hover:bg-[#fff] hover:bg-opacity-[0.1] h-[100%] overflow-hidden">
          <TaskbarClock></TaskbarClock>
        </div>
        <div className="w-5"></div>
      </div>
    </div>
  );
};

export default Taskbar;
