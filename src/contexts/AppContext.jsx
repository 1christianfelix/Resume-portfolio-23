import { createContext, useState } from "react";
import { renderToString } from "react-dom/server";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projectsFolder, showProjectsFolder] = useState(false);

  return (
    <AppContext.Provider value={{ projectsFolder, showProjectsFolder }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
