import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Plane, Car, Code, Music, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "04 MAY",
    title: "Auto Expo",
    icon: Car,
    color: "primary",
    description: "Witness the clash of engineering and design with futuristic machines.",
    nodePos: { x: "10%", y: "50%" },
    mobilePos: { x: "50%", y: "15%" },
  },
  {
    date: "05—06 MAY",
    title: "Hackathon",
    icon: Code,
    color: "secondary",
    description: "48 hours of non-stop coding to solve real-world cyber challenges.",
    nodePos: { x: "35%", y: "30%" },
    mobilePos: { x: "50%", y: "35%" },
  },
  {
    date: "06 MAY",
    title: "Ethnic Day",
    icon: Music,
    color: "accent",
    description: "A vibrant celebration of culture, fashion, and tradition.",
    nodePos: { x: "60%", y: "70%" },
    mobilePos: { x: "50%", y: "55%" },
  },
  {
    date: "07—08 MAY",
    title: "AGRATHA 2K26",
    icon: Trophy,
    color: "neon-pink",
    description: "The grand finale: National Level Techno-Cultural Extravaganza.",
    nodePos: { x: "90%", y: "50%" },
    mobilePos: { x: "50%", y: "85%" },
  },
];

const EventRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // SVG Paths
  const desktopPath = "M 50,250 C 150,250 250,150 350,150 S 550,350 650,350 S 850,250 950,250";
  const mobilePath = "M 250,50 L 250,950";

  return (
    <div ref={containerRef} className="relative w-full py-20 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="font-display font-black text-2xl md:text-4xl text-glow-cyan uppercase tracking-tighter">
            Mission <span className="text-secondary">Roadmap</span>
          </h3>
          <p className="font-mono-tech text-xs text-muted-foreground mt-2 tracking-[0.2em]">
            // TRACKING EVENT PROGRESS //
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative h-[600px] md:h-[400px] w-full">
          {/* Desktop SVG Path */}
          <svg
            viewBox="0 0 1000 500"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d={desktopPath}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/10"
            />
            <motion.path
              d={desktopPath}
              fill="none"
              stroke="url(#neon-gradient)"
              strokeWidth="3"
              strokeDasharray="10 5"
              style={{ pathLength: smoothProgress }}
            />
            <defs>
              <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--neon-pink))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile SVG Path */}
          <svg
            viewBox="0 0 500 1000"
            className="md:hidden absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d={mobilePath}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/10"
            />
            <motion.path
              d={mobilePath}
              fill="none"
              stroke="url(#neon-gradient-mobile)"
              strokeWidth="3"
              strokeDasharray="10 5"
              style={{ pathLength: smoothProgress }}
            />
            <defs>
              <linearGradient id="neon-gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--neon-pink))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Event Nodes */}
          {events.map((event, i) => (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: event.nodePos.x,
                top: event.nodePos.y,
              }}
            >
              {/* Desktop View Node */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                   whileHover={{ scale: 1.1 }}
                   className={cn(
                     "w-12 h-12 rounded-full glass-panel flex items-center justify-center border-2 border-transparent transition-all duration-500",
                     `hover:border-${event.color} group`
                   )}
                >
                  <event.icon className={cn("h-5 w-5", `text-${event.color}`)} />
                  <div className={cn("absolute inset-0 rounded-full blur-none group-hover:blur-md opacity-0 group-hover:opacity-50 transition-all", `bg-${event.color}`)} />
                </motion.div>
                
                <div className="absolute top-16 w-48 text-center pointer-events-none">
                  <div className="font-display font-bold text-xs text-foreground bg-background/80 px-2 py-1 rounded inline-block">
                    {event.date}
                  </div>
                  <div className="font-display font-black text-sm text-primary mt-1 uppercase tracking-tight">
                    {event.title}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Specific Nodes - simpler vertical layout overlay */}
          <div className="md:hidden absolute inset-0 flex flex-col justify-around py-10">
            {events.map((event, i) => (
              <div key={i} className="flex items-center justify-between px-6 w-full relative">
                <div className="w-1/3 text-right pr-4">
                   <div className="font-display font-bold text-[10px] text-muted-foreground">{event.date}</div>
                   <div className="font-display font-black text-xs text-foreground uppercase tracking-tight leading-none">{event.title}</div>
                </div>
                
                <div className="relative z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center">
                  <event.icon className={cn("h-4 w-4", `text-${event.color}`)} />
                </div>

                <div className="w-1/3 text-left pl-4 text-[10px] text-muted-foreground leading-tight italic">
                   {event.description.split('.')[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Moving Airplane (Desktop) */}
          <motion.div
            className="hidden md:block absolute z-20"
            style={{
               left: useTransform(smoothProgress, [0, 0.1, 0.35, 0.6, 0.9, 1], ["5%", "10%", "35%", "60%", "90%", "95%"]),
               top: useTransform(smoothProgress, [0, 0.1, 0.35, 0.6, 0.9, 1], ["50%", "50%", "30%", "70%", "50%", "50%"]),
               rotate: useTransform(smoothProgress, [0, 0.1, 0.35, 0.6, 0.9, 1], [0, -20, 15, -15, 10, 0]),
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-lg bg-primary/40 rounded-full" />
              <Plane className="h-8 w-8 text-primary fill-primary/20 rotate-90" />
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-1 bg-gradient-to-r from-transparent to-primary/60 blur-sm rounded-full" />
            </div>
          </motion.div>

           {/* Moving Airplane (Mobile) */}
           <motion.div
            className="md:hidden absolute z-20 left-1/2 -translate-x-1/2"
            style={{
               top: useTransform(smoothProgress, [0, 1], ["5%", "95%"]),
            }}
          >
            <div className="relative translate-x-px">
              <div className="absolute inset-0 blur-lg bg-secondary/40 rounded-full" />
              <Plane className="h-6 w-6 text-secondary fill-secondary/20 rotate-180" />
            </div>
          </motion.div>
        </div>

        {/* Legend / Hover description for desktop */}
        <div className="hidden md:grid grid-cols-4 gap-6 mt-12">
            {events.map((event, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="glass-panel p-4 rounded-xl border-l-4"
                    style={{ borderLeftColor: `hsl(var(--${event.color === 'neon-pink' ? 'accent' : event.color}))` }}
                >
                    <p className="text-[10px] font-mono-tech uppercase text-muted-foreground mb-1">
                        MISSION LOG // {event.date}
                    </p>
                    <p className="text-xs font-body text-foreground/80 leading-snug">
                        {event.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventRoadmap;
