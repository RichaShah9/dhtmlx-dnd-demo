import React from "react";

import Scheduler from "./components/Scheduler";
import "./App.css";

function App() {
  
  const onDragStart = e => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
  };

  return (
    <div className="app-screen">
      <div className="app-header">
        <h1>Scheduler</h1>
      </div>
      <div className="app-page">
        <div className="app-sidebar">
          <h3>Drag Items Panel</h3>
          <div
            draggable="true"
            onDragStart={onDragStart}
            id="Event 1"
            style={{
              background: "lightblue",
              padding: 15,
              margin: 10
            }}
          >
            Drag me into the list
          </div>
        </div>
        <div className="app-content">
          <Scheduler />
        </div>
      </div>
    </div>
  );
}

export default App;
