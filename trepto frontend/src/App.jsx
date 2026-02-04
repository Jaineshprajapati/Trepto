import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
