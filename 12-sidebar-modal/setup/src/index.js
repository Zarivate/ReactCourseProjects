import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvider } from "./context";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    {/* Because we wrapped our app in AppProvider all our components now have access to whatever value we passed into AppProvider */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
