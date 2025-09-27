import React from "react";
import Bio from "./components/Bio";
import Timeline from "./components/Timeline";
// import Posts from "./components/Posts";
import { AppProvider } from "./context/AppContext";
import "./App.scss";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app">
        <Bio />
        <Timeline />
      </div>
    </AppProvider>
  );
};
export default App;
