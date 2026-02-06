import React from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import AboutOne from "./components/Aboutone/Aboutone";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import OurMission from "./components/Ourmission/Ourmission";
import OurPhilosophy from "./components/Ourphilosophy/OurPhilosophy";
import OurApproach from "./components/OurApproach/OurApproach";

const About = () => {
  return (
    <>
      {/* About Page Header */}
      <PageHeader title="About Us" />
      <AboutOne />
      <Whychooseus />
      <OurMission />
      <OurPhilosophy />
      <OurApproach/>
    </>
  );
};

export default About;
