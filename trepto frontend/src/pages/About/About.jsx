import React from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import AboutOne from "./components/Aboutone/Aboutone";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import OurMission from "./components/Ourmission/Ourmission";

const About = () => {
  return (
    <>
      {/* About Page Header */}
      <PageHeader title="About Us" />
      <AboutOne />
      <Whychooseus />
      <OurMission />
    </>
  );
};

export default About;
