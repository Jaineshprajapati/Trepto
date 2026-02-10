import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Ourservices from "./pages/Ourservices/Services";
import About from "./pages/About/About";
import Career from "./pages/career/career";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Ourservices />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
