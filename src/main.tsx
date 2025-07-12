import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import routes from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
