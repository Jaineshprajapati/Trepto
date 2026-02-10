
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Dealrevelution from "./components/Dear&evelution";
import Investment from "./components/Investment.jsx";
import ServicesSection from "./components/Services";
import Stategicadvisory from "./components/Stategicadvisory";
import Technologydatasystem from "./components/Technologydatasystem";
import CommonCTA from "../../components/common/CTA/CommonCTA.jsx";
import ctaBg from "../../assets/images/CTA.png";

const Ourservices = () => {
  return (
 <>
  <PageHeader title="Our Services" />
  <ServicesSection/>
  <Investment/>
  <Dealrevelution/>
  <Technologydatasystem/>
  <Stategicadvisory/>
  


<CommonCTA
  title="Check About Us"
  subtitle="Speak with our team about research, trading frameworks, or strategic advisory."
  buttonText="Aboout our journey"
  backgroundImage={ctaBg}
  onButtonClick={() => window.location.href = "/contact"}
/>
 </>
  );
};

export default Ourservices;