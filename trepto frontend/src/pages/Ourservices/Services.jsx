
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Dealrevelution from "./components/Dear&evelution";
import Investment from "./components/investment";
import ServicesSection from "./components/Services";
import Stategicadvisory from "./components/Stategicadvisory";
import Technologydatasystem from "./components/Technologydatasystem";
const Ourservices = () => {
  return (
 <>
  <PageHeader title="Our Services" />
  <ServicesSection/>
  <Investment/>
  <Dealrevelution/>
  <Technologydatasystem/>
  <Stategicadvisory/>
  
 </>
  );
};

export default Ourservices;