import { createContext, useState } from "react";
import { renderToString } from "react-dom/server";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projectsFolder, showProjectsFolder] = useState(false);
  const [aboutMe, showAboutMe] = useState(false);

  return (
    <AppContext.Provider
      value={{ projectsFolder, showProjectsFolder, aboutMe, showAboutMe }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
