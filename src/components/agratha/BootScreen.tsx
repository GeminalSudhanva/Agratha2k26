import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> BOOT SEQUENCE INITIATED...",
  "> LOADING ARENA MODULES",
  "> CONNECTING TO MAINFRAME",
  "> SYNCING NEON GRID",
  "> ACCESS GRANTED · WELCOME TO AGRATHA 2K26",
];

const BootScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12 + 4;
        return next >= 100 ? 100 : next;
      });
    }, 120);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    setStep(Math.min(lines.length - 1, Math.floor((progress / 100) * lines.length)));
    if (progress >= 100) {
      const t = setTimeout(onDone, 500);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="relative w-full max-w-xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display font-black text-center text-5xl md:text-7xl neon-text animate-neon-flicker tracking-tight"
          >
            AGRATHA 2K26
          </motion.div>
          <div className="font-mono-tech text-center text-xs tracking-[0.4em] text-primary mt-3 uppercase">
            // System Boot · Arena v2.6
          </div>

          <div className="mt-10 glass-panel rounded-2xl p-5 hud-corners">
            <div className="space-y-1.5 mb-4 min-h-[120px] font-mono-tech text-xs">
              {lines.slice(0, step + 1).map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={i === step ? "text-primary" : "text-muted-foreground"}
                >
                  {l}
                  {i === step && <span className="ml-1 animate-pulse">▌</span>}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between font-mono-tech text-[10px] tracking-widest mb-2">
              <span className="text-muted-foreground uppercase">Loading Arena</span>
              <span className="text-primary tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-arena-deep overflow-hidden">
              <div
                className="h-full bg-gradient-neon transition-all duration-200 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootScreen;
