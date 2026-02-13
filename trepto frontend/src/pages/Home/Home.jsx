import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAre from "./components/Whoarewe/whoarewe";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import TradeFinance from "./components/TradeFinancess/TradeFinance";


const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <TradeFinance />
      <VideoComponent />
    </>
  );
};

export default Home;
