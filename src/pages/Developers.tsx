import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Developer from "@/components/agratha/Leaderboard";
import Footer from "@/components/agratha/Footer";

const Developers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Mini Top Bar */}
      <nav className="fixed top-0 inset-x-0 z-50 py-6">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel font-display text-xs font-bold tracking-widest uppercase text-foreground hover:text-primary border border-primary/20 hover:border-primary transition-all group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Return to Arena
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        <Developer />
      </main>

      <Footer />
    </div>
  );
};

export default Developers;
