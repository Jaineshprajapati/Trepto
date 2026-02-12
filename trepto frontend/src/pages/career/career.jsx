import React from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Joinourteam from "./components/JoinOurTeam/JoinOurTeam";
import Whyjoinus from "./components/WhyJoinUs/Whyjoinus";
import CurrentOpportunities from "./components/CurrentOpportunities/CurrentOpportunities";
import ContactSection from "./components/ContactSection/ContactSection";

// Assuming you have a Reveal component (such as from Framer Motion or your UI lib)
import Reveal from "../../components/common/Reveal"; // Adjust the path as necessary

const Career = () => {
  return (
    <>
      <PageHeader title="Career" />
      <Reveal>
        <Joinourteam />
      </Reveal>
      <Reveal delay={0.1}>
        <Whyjoinus />
      </Reveal>
      <Reveal delay={0.2}>
        <CurrentOpportunities />
      </Reveal>
      <Reveal delay={0.3}>
        <ContactSection />
      </Reveal>
    </>
  );
};

export default Career;
