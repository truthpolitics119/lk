import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PromisesSection from "./components/PromisesSection";
import ScandalsSection from "./components/ScandalsSection";
import MinistersSection from "./components/MinistersSection";
import StatisticsSection from "./components/StatisticsSection";
import TimelineSection from "./components/TimelineSection";
import HistorySection from "./components/HistorySection";
import IdeologySection from "./components/IdeologySection";
import SriLankaMapSection from "./components/SriLankaMapSection";
import ConclusionSection from "./components/ConclusionSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <NavBar />
      <Hero />
      <PromisesSection />
      <ScandalsSection />
      <MinistersSection />
      <StatisticsSection />
      <SriLankaMapSection />
      <TimelineSection />
      <HistorySection />
      <IdeologySection />
      <ConclusionSection />
      <Footer />
    </div>
  );
};

export default App;
