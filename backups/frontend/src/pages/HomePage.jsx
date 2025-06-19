import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Assuming you have a Footer component
import rateLimitedUI from "../components/RateLimitedUI"; // Assuming you have a RateLimitedUI component

const HomePage = () => {
  // This is the main home page of the Notes application
  const pageTitle = "Notes - Your Personal Note-Taking App";

  const [isLoading, setIsLoading] = React.useState(true);
  const [isRateLimited, setIsRateLimited] = React.useState(true);


  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Notes</h1>
            <p className="text-lg text-gray-700 mb-6">Your personal note-taking app</p>
            <a href="/create" className="btn btn-primary">Create a New Note</a>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;