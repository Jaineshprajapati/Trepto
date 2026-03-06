import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Ourservices from "./pages/Ourservices/Services";
import About from "./pages/About/About";
import Career from "./pages/career/career";
import ScrollToTop from "./components/common/ScrollToTop";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicies";
import AmlPolicy from "./pages/AmlPolicy";
import Disclaimer from "./pages/Disclaimer";
import RiskDisclosure from "./pages/RiskDisclosure";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Ourservices />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/termsofservices" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/amlpolicy" element={<AmlPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/riskdisclosure" element={<RiskDisclosure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
