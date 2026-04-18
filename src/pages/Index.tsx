import { useState } from "react";
import Navbar from "@/components/agratha/Navbar";
import Hero from "@/components/agratha/Hero";
import RegistrationTicker from "@/components/agratha/RegistrationTicker";
import About from "@/components/agratha/About";
import PrincipalMessage from "@/components/agratha/PrincipalMessage";
import EventsSection from "@/components/agratha/EventsSection";
import Developer from "@/components/agratha/Leaderboard";
import Footer from "@/components/agratha/Footer";
import BootScreen from "@/components/agratha/BootScreen";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <RegistrationTicker />
          <About />
          <PrincipalMessage />
          <EventsSection />
          <Developer />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
