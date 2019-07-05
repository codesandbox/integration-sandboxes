import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Container } from "@cerebral/react";
import controller from "./controller";

render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById("root")
);
