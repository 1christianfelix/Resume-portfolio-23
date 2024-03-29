import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import wallpaper_1 from "../assets/wallpaper_1.png";
import wallpaper_2 from "../assets/wallpaper_2.png";
import wallpaper_3 from "../assets/wallpaper_3.png";
import wallpaper_city from "../assets/wallpaper_4.jpg";
import wallpaper_sky from "../assets/wallpaper_5.jpg";
import Taskbar from "./Taskbar";
import ProjectFolder from "../apps/ProjectFolder";
import AboutMe from "../apps/AboutMe";
import Sticky from "./Sticky";

import chrome from "../assets/chrome_icon.svg";
import linkedin from "../assets/linkedin_icon.svg";
import gitlab from "../assets/gitlab_icon.svg";
import github from "../assets/github_icon.svg";
import bin from "../assets/bin_icon.svg";
import doc from "../assets/doc_icon.svg";
import resume from "../assets/ChristianFelixResume.pdf";
import projects from "../assets/projects_icon.png";
import bluelight from "../assets/Bluelight_mode.png";
import light from "../assets/light_mode.png";

import WallpaperContext from "../contexts/WallpaperContext";
import TerminalContext from "../contexts/TerminalContext";
import AppContext from "../contexts/AppContext";

const Desktop = (props) => {
  const { wallpaper, setWallpaper } = useContext(WallpaperContext);
  const [wallpaperCurrent, setWallpaperCurrent] = useState(wallpaper_sky);
  const { projectsFolder, showProjectsFolder, aboutMe, showAboutMe } =
    useContext(AppContext);
  const { addTerminalLines } = useContext(TerminalContext);
  useEffect(() => {
    switch (wallpaper) {
      case "wallpaper_city":
        setWallpaperCurrent(wallpaper_city);
        break;
      case "wallpaper_sky":
        setWallpaperCurrent(wallpaper_sky);
        break;
    }
  }, [wallpaper]);
  // console.log(wallpaperCurrent);

  const closeFolder = () => {
    showProjectsFolder(false);
  };

  const closeAboutMe = () => {
    showAboutMe(false);
  };

  return (
    <div className="h-[100%] relative ">
      <motion.div
        className="bg-[#3d494f] h-[100%] overflow-hidden  desktop-boundary"
        initial={{ backgroundColor: "#3d494f" }}
        animate={{ backgroundColor: "#fff" }}
        transition={{ delay: 2, duration: 1 }}
      >
        {props.screenOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="h-[100%]"
          >
            <Sticky></Sticky>
            {projectsFolder && (
              <ProjectFolder close={closeFolder}></ProjectFolder>
            )}
            {aboutMe && <AboutMe close={closeAboutMe}></AboutMe>}
            <img src={wallpaperCurrent} alt="" className="w-[100%] h-[100%]" />
            <div className="absolute z-50 text-center h-[calc(100%-2rem)] w-[100%] top-0 grid md:grid-cols-6 md:grid-rows-4 lg:grid-cols-6 lg:grid-rows-4 1080:grid-cols-12 1080:grid-rows-6 1440:grid-cols-16 1440:grid-rows-8 place-items-center">
              {/* <div className="flex flex-col items-center icon_hover">
                <img
                  src={bin}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  Recycle Bin
                </p>
              </div> */}
              <div
                className="flex flex-col items-center icon_hover"
                onClick={() => {
                  showAboutMe(true);
                }}
              >
                <img
                  src={chrome}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  About_Me.html
                </p>
              </div>
              <div
                className="flex flex-col items-center icon_hover"
                onClick={() => {
                  showProjectsFolder(true);
                }}
              >
                <img
                  src={projects}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  My Projects
                </p>
              </div>
              <a
                href={resume}
                without
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col items-center icon_hover"
              >
                <img
                  src={doc}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  Resume
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/christianfelix97/"
                without
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col items-center icon_hover"
              >
                <img
                  src={linkedin}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  LinkedIn
                </p>
              </a>
              <a
                href="https://gitlab.com/1christianfelix1"
                without
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col items-center icon_hover"
              >
                <img
                  src={gitlab}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  GitLab
                </p>
              </a>
              <a
                href="https://github.com/1christianfelix"
                without
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col items-center icon_hover"
              >
                <img
                  src={github}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  GitHub
                </p>
              </a>
              <div
                className="flex flex-col items-center icon_hover"
                onClick={() => {
                  setWallpaper("wallpaper_city");
                }}
              >
                <img
                  src={bluelight}
                  alt=""
                  className="h-auto w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white"
                  style={{ textShadow: "0 0 2px black" }}
                >
                  Wallpaper City
                </p>
              </div>
              <div
                className="flex flex-col items-center icon_hover"
                onClick={() => {
                  addTerminalLines((prev) => {
                    let newLines = [
                      <pre data-prefix=">">
                        {"if 'Wallpaper Sky.png' click_count == 2{"}
                      </pre>,
                      <pre data-prefix=">">
                        {"setWallpaper('./Desktop/Wallpaper Sky.png')}"}
                      </pre>,
                      <pre data-prefix=">" className="text-success">
                        {"Wallpaper changed to Wallpaper Sky"}
                      </pre>,
                    ];

                    return [...prev, ...newLines];
                  });
                  setWallpaper("wallpaper_sky");
                }}
              >
                <img
                  src={light}
                  alt=""
                  className="h-[calc(*2)] w-4  md:w-6  lg:w-7  xl:w-8  1080:w-10 1440:w-12"
                />
                <p
                  className="text-xs lg:text-sm text-white "
                  style={{ textShadow: "0 0 2px black" }}
                >
                  Wallpaper Sky
                </p>
              </div>
            </div>
            <Taskbar></Taskbar>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Desktop;
