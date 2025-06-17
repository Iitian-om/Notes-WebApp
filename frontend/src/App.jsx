// Importing necessary libraries
import React from "react";
import { Routes, Route } from "react-router"

// Importing all the page components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import ContactPage from "./pages/ContactPage";
import ViewNotePage from "./pages/ViewNotePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import DevelopersPage from "./pages/DevelopersPage";
import NotFoundPage from "./pages/NotFoundPage";
import toast from "react-hot-toast";

// Main component for the App
const Notes_WebApp = () => {
  return (
    // Main container for the application
    <div>
      <button onClick={() => toast.error("uvuf")}>Click me</button>
      {/* Setting up the routes for the application */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/view/:id" element={<ViewNotePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
        <Route path="/ourdevelopers" element={<DevelopersPage />} />
        {/* Catch-all route for 404 Not Found and make sure to add this in last route place */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
};
// Exporting the main component for use in main.jsx
export default Notes_WebApp;