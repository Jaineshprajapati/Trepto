import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Joinourteam from "./components/JoinOurTeam/JoinOurTeam";
import Whyjoinus from "./components/WhyJoinUs/Whyjoinus";
import CurrentOpportunities from "./components/CurrentOpportunities/CurrentOpportunities";
import ContactSection from "./components/ContactSection/ContactSection";

import Reveal from "../../components/common/Reveal";

const Career = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // delay to allow Reveal animation render
      }
    }
  }, [location]);

  return (
    <>
      <PageHeader title="Career" />

      <Reveal>
        <Joinourteam />
      </Reveal>

      <Reveal>
        <Whyjoinus />
      </Reveal>

      <CurrentOpportunities />

      <ContactSection />
    </>
  );
};

export default Career;
