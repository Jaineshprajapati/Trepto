import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </>
  );
}

export default App;
