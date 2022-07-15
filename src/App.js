import "./App.css";
import { useEffect } from "react";

import Timer from "./Components/Timer/Timer";
import Tasks from "./Components/Tasks/Tasks";

function App() {
  useEffect(() => {
    document.title = "Pomodoro App";
  }, []);

  return (
    <div className="App ">
      <div className="App-header">
        <h1>Pomodoro App</h1>
      </div>
      <div className="App-row">
        <Timer></Timer>
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default App;
