import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import LorrySwap from "../components/LorrySwap";
import WeatherWhisper from "../components/WeatherWhisper";
import Atelier from "../components/Atelier";
import GardenCleaningTracker from "../components/GardenCleaningTracker";
import Internify from "../components/Internify";
import ManagementSystem from "../components/SupplyChainSystem";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../components/NotFound"; // Create a 404 page component

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lorryswap" element={<LorrySwap />} />
        <Route path="/weatherwhisper" element={<WeatherWhisper />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route
          path="/gardenCleaningTracker"
          element={<GardenCleaningTracker />}
        />
        <Route path="/Internify" element={<Internify />} />
        <Route path="/managementSystem" element={<ManagementSystem />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </>
  );
};

export default AppRoutes;
