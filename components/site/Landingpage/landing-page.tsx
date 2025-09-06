import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">
        <HeroSection />
      </main>
    </div>
  );
};

export default LandingPage;
