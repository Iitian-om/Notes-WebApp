// Importing necessary libraries and components
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </StrictMode>
);