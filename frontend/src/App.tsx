import React from "react";
import Bio from "./components/Bio";
import Timeline from "./components/Timeline";
// import Posts from "./components/Posts";
import { AppProvider } from "./context/AppContext";
import "./App.scss";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app container">
        {/* <Bio /> */}
        <div className="grid">
          <div className="col s12">
            <Timeline />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
