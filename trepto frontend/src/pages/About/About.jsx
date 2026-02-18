import React from "react";
import { Helmet } from "react-helmet-async";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import AboutOne from "./components/Aboutone/Aboutone";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import OurMission from "./components/Ourmission/Ourmission";
import OurPhilosophy from "./components/Ourphilosophy/OurPhilosophy";
import OurApproach from "./components/OurApproach/OurApproach";
import WhatSetsUsApart from "./components/WhatSetsUsApart/WhatSetsUsApart";
import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
import ctaBg from "../../assets/images/CTA.png";

import Reveal from "../../components/common/Reveal";
import RevealGroup from "../../components/common/RevealGroup";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/career");
    setTimeout(() => {
      const el = document.querySelector("#contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About TRePTO | Research-First Trading & Advisory Firm</title>
        <meta
          name="description"
          content="Learn about TRePTO’s mission, philosophy, and research-first approach to trading frameworks and strategic advisory."
        />
      </Helmet>

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
