import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.jsx";
import MainList from "./Components/MainList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <App1 /> */}
  </StrictMode>
);
