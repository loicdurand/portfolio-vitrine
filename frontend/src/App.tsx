import React from "react";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import { AppProvider } from "./context/AppContext";
import "./App.scss";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app">
        <Bio />
        <Projects />
        <Posts />
      </div>
    </AppProvider>
  );
};
export default App;
