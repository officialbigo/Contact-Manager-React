import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "Production") disableReactDevTools();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
