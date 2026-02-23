import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAre from "./components/Whoarewe/whoarewe";
import TradeFinance from "./components/TradeFinancess/TradeFinance";
import CollaborateWithUs from "./components/CollaborateWithUs/CollaborateWithUs";
import MarqueeGallery from "./components/JamboGallery/marqueeGallery";


const Home = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>TRePTO | Research-Driven Trading & Strategic Advisory</title>
        <meta
          name="description"
          content="TRePTO delivers research-backed trading frameworks, market intelligence, and strategic advisory for modern financial markets."
        />
      </Helmet>

      {/* Page Content */}
      <HeroSection />
      <WhoWeAre />
      <TradeFinance />
      <MarqueeGallery />
      <CollaborateWithUs />
    </>
  );
};

export default Home;
