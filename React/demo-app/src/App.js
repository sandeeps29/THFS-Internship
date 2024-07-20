import React from "react";
import Navbar from "./Components/Navbar";
import CreditScoreSection from "./Components/CreditScoreSection";
import ProductsSection from "./Components/ProductsSection";
import ToolsSection from "./Components/ToolsSection";
import CheckCreditScore from "./Components/CheckCreditScore";
import WhyPaisaOnClick from "./Components/WhyPaisaOnClick";
import LoanStatsSection from "./Components/LoanStatsSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import AboutUs from "./Components/AboutUs";
import MobileAppDownload from "./Components/MobileAppDownload";
import TestimonialSlider from "./Components/TestimonialSlider";
import PartnerSection from "./Components/PartnerSection";
import InvestorsSection from "./Components/InvestorsSection";
import ReferralSection from "./Components/ReferralSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreditScoreSection />
      <ProductsSection />
      <ToolsSection />
      <CheckCreditScore />
      <WhyPaisaOnClick />
      <LoanStatsSection />
      <WhyChooseUs />
      <AboutUs />
      <MobileAppDownload />
      <TestimonialSlider />
      <PartnerSection />
      <InvestorsSection />
      <ReferralSection />
      <Footer />
    </div>
  );
}

export default App;
