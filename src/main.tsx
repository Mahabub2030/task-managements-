import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import router from "./routes/index.tsx";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
