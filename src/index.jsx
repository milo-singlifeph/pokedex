import React from "react";
import ReactDOM from "react-dom/client";
import MyProvider from "./MyProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyProvider>
  </React.StrictMode>
);
