import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./components/Context.jsx";
import AppWrapper from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <AppWrapper />
  </AppProvider>
);
