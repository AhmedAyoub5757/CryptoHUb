import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MarketTable from "./components/MarketTable";
import PromoSection from "./components/PromoSection";
import 'aos/dist/aos.css';
import AOS from 'aos';
import WhyChooseUs from "./components/WhyChooseUs";
import PreSaleSection from "./components/PreSaleSection";
import DistributionSection from "./components/DistributionSection";
import RoadmapSection from "./components/RoadmapSection";
import AppInstallSection from "./components/AppInstallSection";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FaqSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import FooterSection from "./components/FooterSection";
import ScrollToTopButton from "./components/ScrollToTopButton";




function App() {
  
  return (
    
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Header />
      <MarketTable />
      <PromoSection />
      <WhyChooseUs />
      <PreSaleSection />
      <DistributionSection />
      <RoadmapSection />
      <AppInstallSection />
      <TeamSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <MapSection />
      <FooterSection />
            <ScrollToTopButton />

    </div>
  );
}

export default App;
