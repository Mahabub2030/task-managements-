import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import routes from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
