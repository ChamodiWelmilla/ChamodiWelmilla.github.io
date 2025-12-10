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
import MythicEcology from "../components/MythicEcology";
import Internify from "../components/Internify";
import MoveMate from "../components/MoveMate";
import Lolz from "../components/Lolz";
import ScrollToTop from "../components/ScrollToTop";
import PopcornPick from "../components/PopcornPick";
import NotFound from "../components/NotFound";

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
        <Route path="/popcornpick" element={<PopcornPick />} />
        <Route
          path="/gardenCleaningTracker"
          element={<GardenCleaningTracker />}
        />
        <Route path="/MythicEcology" element={<MythicEcology />} />
        <Route path="/Internify" element={<Internify />} />
        <Route path="/MoveMate" element={<MoveMate />} />
        <Route path="/Lolz" element={<Lolz />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
};

export default AppRoutes;
