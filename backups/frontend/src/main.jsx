// Importing necessary components and styles
import "./index.css";
import App from "./App.jsx";

// Importing necessary libraries and packages
import { StrictMode } from "react"; // StrictMode is a tool for highlighting potential problems in an application
import { Toaster } from "react-hot-toast"; // Toaster is a component for displaying react (or pop up) notifications
import { createRoot } from "react-dom/client"; // createRoot is a method for creating a root DOM node for React to render into
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is a component that uses the HTML5 history API to keep your UI in sync with the URL

// Render the React application into the root DOM node
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </StrictMode>
);