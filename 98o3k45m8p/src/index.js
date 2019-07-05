import React from "react";
import ReactDOM from "react-dom";
import startOfDay from "date-fns/fp/startOfDay";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>The day is {startOfDay(new Date()).toString()}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
