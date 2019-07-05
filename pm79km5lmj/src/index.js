import React from "react";
import { render } from "react-dom";
import { MyComponent } from "./Hello";

function App() {
  return <MyComponent />;
}

render(<App />, document.getElementById("root"));
