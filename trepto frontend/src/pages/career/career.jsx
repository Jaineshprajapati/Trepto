import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Careers at TRePTO | Join Our Research & Advisory Team</title>
        <meta
          name="description"
          content="Explore career opportunities at TRePTO. Join our research-driven team working on trading frameworks, market intelligence, and strategic advisory."
        />
      </Helmet>

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
