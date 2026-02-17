import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAre from "./components/Whoarewe/whoarewe";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import TradeFinance from "./components/TradeFinancess/TradeFinance";
import CollaborateSection from "./components/CollaborateSection/CollaborateSection";
import HomeContactForm from "./components/HomeContactForm/HomeContactForm";


const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <TradeFinance />
      <VideoComponent />
      <CollaborateSection />
      <HomeContactForm />
    </>
  );
};

export default Home;
