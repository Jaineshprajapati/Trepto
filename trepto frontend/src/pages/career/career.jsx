import React from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Joinourteam from "./components/JoinOurTeam/JoinOurTeam";
// import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
// import ctaBg from "../../assets/images/CTA.png";

const Career = () => {
  return (
    <>
      <PageHeader title="Career" />
      <Joinourteam />

{/* <CommonCTA
  title="Connect With TRePTO"
  subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
  buttonText="Contact With Us"
  backgroundImage={ctaBg}
  onButtonClick={() => window.location.href = "/contact"}
/> */}

    </>
  );
};

export default Career;
