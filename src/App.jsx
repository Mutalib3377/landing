import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OperationalStandards from "./components/OperationalStandards";
import DigitalCareJourney from "./components/DigitalCareJourney";
import ExecutiveLeadership from "./components/ExecutiveLeadership";
import EnterpriseInquiry from "./components/EnterpriseInquiry";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="w-full font-inter">
      <Navbar />
      <Hero />
      <OperationalStandards />
      <DigitalCareJourney />
      <ExecutiveLeadership />
      <EnterpriseInquiry />
      <FAQ />
      <Footer />
    </div>
  );
}
