import { createContext, useState } from "react";
import { renderToString } from "react-dom/server";

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {
  const [terminalLines, addTerminalLines] = useState([
    renderToString(<div className="text-xl">Hello</div>),
    <pre data-prefix="$">
      <code>npm i daisyui</code>
    </pre>,
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>,
    <pre data-prefix=">" className="text-success">
      <code>Done!</code>
    </pre>,
    <pre data-prefix=">" className="text-success">
      <code>Done!</code>
    </pre>,
    <pre data-prefix=">" className="text-success">
      <code>Done!</code>
    </pre>,
    <pre data-prefix="$">
      <code>npm i daisyui</code>
    </pre>,
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>,
    <pre data-prefix="$">
      <code>npm i daisyui</code>
    </pre>,
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>,
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>,
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>,
  ]);

  return (
    <TerminalContext.Provider value={{ terminalLines, addTerminalLines }}>
      {children}
    </TerminalContext.Provider>
  );
};

export default TerminalContext;
