import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, Zap, Trophy, Users, Scroll, Award, MapPin, CreditCard } from "lucide-react";
import type { AgrathaEvent } from "@/data/events";
import { useEffect } from "react";

interface Props {
  event: AgrathaEvent | null;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = event ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] p-4 bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          data-lenis-prevent
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl mx-auto my-8 md:my-16"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-neon opacity-50 blur-xl" />
            <div className="relative glass-panel rounded-3xl overflow-hidden hud-corners">
              {/* Header */}
              <div className="relative p-6 md:p-8 border-b border-primary/20 bg-gradient-glass">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full glass-panel flex items-center justify-center text-foreground hover:text-secondary hover:rotate-90 transition-all duration-300"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary uppercase">
                  // Event Briefing · {event.department}
                </div>
                <h3 className="font-display font-black text-3xl md:text-4xl mt-2 neon-text leading-tight">
                  {event.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs px-3 py-1 rounded-full glass-panel">
                    <Calendar className="h-3 w-3 text-primary" />
                    {event.date} {event.time && `| ${event.time}`}
                  </span>
                  {event.venue && (
                    <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs px-3 py-1 rounded-full glass-panel">
                      <MapPin className="h-3 w-3 text-secondary" />
                      {event.venue}
                    </span>
                  )}
                  {event.entryFee && (
                    <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs px-3 py-1 rounded-full glass-panel bg-primary/10 border-primary/20">
                      <CreditCard className="h-3 w-3 text-primary" />
                      Entry Fee: {event.entryFee}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs px-3 py-1 rounded-full glass-panel">
                    <Trophy className="h-3 w-3 text-secondary" />
                    {event.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs px-3 py-1 rounded-full glass-panel">
                    <Zap className="h-3 w-3 text-neon-yellow fill-neon-yellow" />
                    {event.xp} XP
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Event Poster inside Modal - Optimized for high visibility */}
                {event.image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group/poster relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-arena-deep/30 shadow-glow-cyan/10 mb-8"
                  >
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                    />
                    
                    {/* View Full Size Overlay */}
                    <div 
                      className="absolute inset-0 bg-background/20 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                      onClick={() => window.open(event.image, "_blank")}
                    >
                      <div className="px-6 py-3 rounded-full bg-primary text-background font-display font-bold text-xs tracking-widest uppercase shadow-glow-cyan flex items-center gap-2 transform translate-y-4 group-hover/poster:translate-y-0 transition-transform">
                        <span>View Full Poster</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div>
                  <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                    Mission Description
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                    <Users className="h-3 w-3" /> Coordinators
                  </div>
                  <div className="space-y-2">
                    {event.coordinators.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between gap-3 p-3 rounded-lg glass-panel"
                      >
                        <span className="font-display font-semibold text-sm">{c.name}</span>
                        <a
                          href={`tel:${c.phone}`}
                          className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-primary hover:text-secondary transition"
                        >
                          <Phone className="h-3 w-3" />
                          {c.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {event.rules && (
                  <div>
                    <div className="flex items-center gap-2 font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                      <Scroll className="h-3 w-3" /> Mission Rules
                    </div>
                    <ul className="space-y-2">
                      {event.rules.map((rule, index) => (
                        <li key={index} className="flex gap-3 text-sm text-foreground/80 leading-relaxed font-body">
                          <span className="text-primary font-bold">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.prizes && (
                  <div>
                    <div className="flex items-center gap-2 font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                      <Award className="h-3 w-3" /> Rewards
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {event.prizes.map((prize, index) => (
                        <div key={index} className="p-3 rounded-lg glass-panel border border-secondary/20 flex flex-col items-center text-center">
                          <Trophy className={`h-4 w-4 mb-2 ${index === 0 ? 'text-neon-yellow' : index === 1 ? 'text-zinc-300' : 'text-amber-600'}`} />
                          <span className="font-display font-bold text-sm tracking-tight">{prize}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 pt-4 border-t border-primary/20 bg-arena-deep/30">
                <button
                  disabled={!event.registrationUrl}
                  onClick={() => {
                    if (event.registrationUrl) {
                      window.open(event.registrationUrl, "_blank");
                    }
                    onClose();
                  }}
                  className={`group w-full relative overflow-hidden rounded-xl px-6 py-4 font-display font-bold tracking-widest text-background uppercase transition shadow-glow-cyan hover:shadow-glow-magenta ${
                    event.registrationUrl 
                      ? "bg-gradient-neon hover:scale-[1.02]" 
                      : "bg-muted-foreground/30 opacity-50 cursor-not-allowed"
                  }`}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <span className="relative flex items-center justify-center gap-2">
                    {event.registrationUrl ? "Register on Google Forms →" : "Registrations Opening Soon"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
