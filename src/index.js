import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { KnockoutProvider } from "./react-ko";

ReactDOM.render(
  <React.StrictMode>
    <KnockoutProvider>
      <App />
    </KnockoutProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
