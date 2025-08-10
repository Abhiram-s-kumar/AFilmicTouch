import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages

import Aboutus from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import BrandingMedia from "./pages/BrandingMedia";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import WeddingEvents from "./pages/WeddingEvents";

// Components (can be nested or used in pages)
import Ads from "./components/Ads";
import Photoshoots from "./components/Photoshoots";
import Videoshoots from "./components/Videoshoots";


function App() {
  return (
    <Router>
      <Routes>
        {/* Pages */}

        <Route path="/" element={<LandingPage/>} />
         <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/branding-media" element={<BrandingMedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/wedding" element={<WeddingEvents />} />

        {/* Component routes (optional if you want direct routes to these) */}
        <Route path="/ads" element={<Ads />} />
        <Route path="/photoshoots" element={<Photoshoots />} />
        <Route path="/videoshoots" element={<Videoshoots />} />
      </Routes>
    </Router>
  );
}

export default App;
