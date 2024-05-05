import "./index.css";
import React from "react";
import Routes from "./routes";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
    <React.StrictMode>
      <Routes />
    </React.StrictMode>,
    document.getElementById("root")
  );
  


