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

// Import Reveal animation components
import Reveal from "../../components/common/Reveal";
import RevealGroup from "../../components/common/RevealGroup";

const About = () => {
  return (
    <>
      {/* About Page Header */}
      <PageHeader title="About Us" />
      <RevealGroup as={React.Fragment}>
        <Reveal direction="up" delay={0.1}>
          <AboutOne />
        </Reveal>
        <Reveal direction="up" delay={0.18}>
          <Whychooseus />
        </Reveal>
        <Reveal direction="up" delay={0.26}>
          <OurMission />
        </Reveal>
        <Reveal direction="up" delay={0.34}>
          <OurPhilosophy />
        </Reveal>

        <OurApproach />

        <Reveal direction="up" delay={0.5}>
          <WhatSetsUsApart />
        </Reveal>
      </RevealGroup>

      <CommonCTA
        title="Connect With TRePTO"
        subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
        buttonText="Contact With Us"
        backgroundImage={ctaBg}
        onButtonClick={() => {
          window.location.href = "/#collaboratewithus";
        }}
      />
    </>
  );
};

export default About;
