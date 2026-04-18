import { motion } from "framer-motion";
import { Calendar, Zap } from "lucide-react";
import type { AgrathaEvent } from "@/data/events";

const difficultyColor: Record<AgrathaEvent["difficulty"], string> = {
  Rookie: "text-primary border-primary/40 bg-primary/10",
  Pro: "text-accent border-accent/40 bg-accent/10",
  Elite: "text-secondary border-secondary/40 bg-secondary/10",
  Legend: "text-neon-yellow border-neon-yellow/50 bg-neon-yellow/10",
};

const EventCard = ({
  event,
  onOpen,
}: {
  event: AgrathaEvent;
  onOpen: () => void;
}) => {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative text-left rounded-2xl p-px overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-neon opacity-30 group-hover:opacity-100 transition duration-500" />

      <div className="relative h-full rounded-2xl bg-arena-panel/90 backdrop-blur-md p-5 flex flex-col overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-3xl" />

        <div className="relative flex items-start justify-between gap-3 mb-3">
          <span
            className={`font-mono-tech text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded border ${difficultyColor[event.difficulty]}`}
          >
            {event.difficulty}
          </span>
          <div className="flex items-center gap-1 text-neon-yellow font-display font-bold text-sm">
            <Zap className="h-3.5 w-3.5 fill-neon-yellow" />
            {event.xp}
            <span className="text-[10px] font-mono-tech text-muted-foreground ml-0.5">XP</span>
          </div>
        </div>

        <h3 className="relative font-display font-bold text-lg leading-tight text-foreground group-hover:text-primary transition">
          {event.name}
        </h3>
        <div className="relative font-mono-tech text-[10px] tracking-widest text-muted-foreground uppercase mt-1">
          {event.department}
        </div>

        <p className="relative mt-3 font-body text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <div className="relative mt-auto pt-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono-tech">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-[10px] tracking-widest uppercase text-muted-foreground group-hover:text-primary transition">
              View Info →
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (event.registrationUrl) {
                  window.open(event.registrationUrl, "_blank");
                } else {
                  onOpen();
                }
              }}
              className={`px-3 py-1 rounded-full font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-300 ${
                event.registrationUrl
                  ? "bg-primary/20 hover:bg-primary text-primary hover:text-background border border-primary/30"
                  : "bg-muted-foreground/20 text-muted-foreground border border-white/5"
              }`}
            >
              {event.registrationUrl ? "Register" : "Soon"}
            </button>
          </div>
        </div>

        {/* Hover scanline */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
    </motion.button>
  );
};

export default EventCard;
