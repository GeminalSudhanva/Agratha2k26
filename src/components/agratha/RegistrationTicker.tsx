import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const messages = [
  "PRIZE POOL: Over ₹5,00,000+ in rewards to be won across all arenas!",
  "REGISTER LIVE: Technical Paper Presentation is now open for all technical disciplines!",
  "COMING SOON: Registrations for other arenas opening shortly. Keep your eyes on the grid.",
  "NOTICE: Accommodation provided for students traveling from distances exceeding 100km.",
  "SYSTEM STATUS: All systems operational. Prepare for Agratha 2K26 entering the arena.",
];

const RegistrationTicker = () => {
  return (
    <div className="container py-8">
      <div className="relative overflow-hidden glass-panel border-primary/30 rounded-2xl bg-primary/5 p-4 flex items-center gap-4">
        {/* Fixed Title Label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/40 text-primary shadow-glow-cyan z-10">
          <Bell className="h-4 w-4 animate-bounce" />
          <span className="font-display font-black text-xs tracking-wider uppercase">Notice</span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-20 items-center w-fit"
            >
              {[...messages, ...messages].map((msg, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-cyan" />
                  <span className="font-mono-tech text-xs md:text-sm font-bold tracking-[0.1em] text-primary/90 uppercase">
                    {msg}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background/10 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationTicker;
