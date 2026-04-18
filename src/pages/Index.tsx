import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/agratha/Navbar";
import Hero from "@/components/agratha/Hero";
import RegistrationTicker from "@/components/agratha/RegistrationTicker";
import About from "@/components/agratha/About";
import PrincipalMessage from "@/components/agratha/PrincipalMessage";
import EventsSection from "@/components/agratha/EventsSection";
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
          
          {/* Footer Link to Developers */}
          <section className="py-20 border-t border-white/5 bg-arena-deep/30">
            <div className="container text-center">
              <div className="font-mono-tech text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-4">
                // System Architects
              </div>
              <Link 
                to="/developers" 
                className="font-display text-xl md:text-2xl font-black neon-text hover:text-primary transition-colors tracking-tight uppercase group inline-flex items-center gap-3"
              >
                Platform <span className="text-foreground">Developers</span>
                <span className="text-primary group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
