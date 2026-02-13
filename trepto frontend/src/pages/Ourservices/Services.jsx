import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Dealrevelution from "./components/Dear&evelution";
import Investment from "./components/Investment.jsx";
import ServicesSection from "./components/Services";
import Stategicadvisory from "./components/Stategicadvisory";
import Technologydatasystem from "./components/Technologydatasystem";
import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
import ctaBg from "../../assets/images/CTA.png";

import Reveal from "../../components/common/Reveal";
import RevealGroup from "../../components/common/RevealGroup";

const Ourservices = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Our Services" />

      <RevealGroup as={React.Fragment}>
        <Reveal direction="up" delay={0.1}>
          <ServicesSection />
        </Reveal>

        <Reveal direction="up" delay={0.18}>
          <Investment />
        </Reveal>

        <Reveal direction="up" delay={0.26}>
          <Dealrevelution />
        </Reveal>

        <Reveal direction="up" delay={0.34}>
          <Technologydatasystem />
        </Reveal>

        <Reveal direction="up" delay={0.42}>
          <Stategicadvisory />
        </Reveal>
      </RevealGroup>

      <CommonCTA
        title="Check About Us"
        subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
        buttonText="Aboout our journey"
        backgroundImage={ctaBg}
        onButtonClick={() => navigate("/about")}
      />
    </>
  );
};

export default Ourservices;
