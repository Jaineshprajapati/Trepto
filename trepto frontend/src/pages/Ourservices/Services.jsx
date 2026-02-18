import React from "react";
import { Helmet } from "react-helmet-async";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Dealrevelution from "./components/Dear&evelution";
import Investment from "./components/Investment.jsx";
import ServicesSection from "./components/Services";
import Stategicadvisory from "./components/Stategicadvisory";
import Technologydatasystem from "./components/Technologydatasystem";
import Tradefinanceservices from "./components/Tradefinanceservice.jsx";

import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
import ctaBg from "../../assets/images/CTA.png";

import Reveal from "../../components/common/Reveal";
import RevealGroup from "../../components/common/RevealGroup";

const Ourservices = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Services | TRePTO Strategic & Trading Solutions</title>
        <meta
          name="description"
          content="Explore TRePTO’s research services, trading frameworks, deal evaluation, technology data systems, and strategic advisory solutions."
        />
      </Helmet>

      {/* Page Header */}
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

        <Reveal direction="up" delay={0.5}>
          <Tradefinanceservices />
        </Reveal>
      </RevealGroup>

      <CommonCTA
        title="Check About Us"
        subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
        buttonText="About our journey"
        backgroundImage={ctaBg}
        onButtonClick={() => (window.location.href = "/about")}
      />
    </>
  );
};

export default Ourservices;
