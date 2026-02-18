import React from "react";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAre from "./components/Whoarewe/whoarewe";
import TradeFinance from "./components/TradeFinancess/TradeFinance";
import CollaborateWithUs from "./components/CollaborateWithUs/CollaborateWithUs";

const Home = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <TradeFinance />
      <CollaborateWithUs />
    </>
  );
};

export default Home;
