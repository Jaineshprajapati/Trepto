import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import WhoWeAre from './components/Whoarewe/whoarewe';
import TradeFinance from './components/Tradefinance/Tradefinance';
import VideoComponent from './components/VideoComponent/VideoComponent';

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