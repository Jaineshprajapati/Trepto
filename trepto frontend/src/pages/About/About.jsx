import React from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import AboutOne from "./components/Aboutone/Aboutone";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import OurMission from "./components/Ourmission/Ourmission";
import OurPhilosophy from "./components/Ourphilosophy/OurPhilosophy";
import OurApproach from "./components/OurApproach/OurApproach";
import WhatSetsUsApart from "./components/WhatSetsUsApart/WhatSetsUsApart";
import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
import ctaBg from "../../assets/images/CTA.png";

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
      <WhatSetsUsApart />



<CommonCTA
  title="Connect With TRePTO"
  subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
  buttonText="Contact With Us"
  backgroundImage={ctaBg}
  onButtonClick={() => window.location.href = "/contact"}
/>

    </>
  );
};

export default About;
