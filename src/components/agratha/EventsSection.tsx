import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { events, type AgrathaEvent } from "@/data/events";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const EventsSection = () => {
  const [deptFilter, setDeptFilter] = useState<string>("all");
  const [active, setActive] = useState<AgrathaEvent | null>(null);

  // Extract unique departments
  const departments = useMemo(() => {
    const deps = events.map((e) => e.department);
    return ["all", ...new Set(deps)];
  }, []);

  const groupedEvents = useMemo(() => {
    const filtered = events.filter((e) => {
      return deptFilter === "all" || e.department === deptFilter;
    });

    const groups: Record<string, AgrathaEvent[]> = {};
    filtered.forEach((e) => {
      if (!groups[e.department]) groups[e.department] = [];
      groups[e.department].push(e);
    });
    return groups;
  }, [deptFilter]);

  return (
    <section id="events" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16"
        >
          <div className="max-w-xl">
            <div className="font-mono-tech text-xs tracking-[0.4em] text-primary uppercase mb-3">
              // 03 — Choose Your Battle
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
              The <span className="neon-text">Events</span> Grid
            </h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Select a branch to explore their specialized arenas. Each event is a chance to earn XP, 
              badges, and legendary status in the arena.
            </p>
          </div>

          {/* Department Filters */}
          <div className="relative w-full max-w-3xl lg:ml-auto group">
            <span className="block w-full lg:text-right font-mono-tech text-[10px] tracking-[0.4em] text-muted-foreground uppercase opacity-60 mb-3">
              // Select Branch
            </span>
            
            <div className="relative">
              {/* Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex overflow-x-auto no-scrollbar pb-4 -mb-4 gap-2 scroll-smooth">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setDeptFilter(dept)}
                    className={`relative flex-shrink-0 px-5 py-2.5 rounded-full font-display text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      deptFilter === dept
                        ? "text-background"
                        : "text-muted-foreground hover:text-foreground border border-primary/20 hover:border-primary/50"
                    }`}
                  >
                    {deptFilter === dept && (
                      <motion.span
                        layoutId="dept-pill"
                        className="absolute inset-0 rounded-full bg-gradient-neon shadow-glow-cyan"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">
                      {dept === "all" ? "All Branches" : dept}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {(Object.entries(groupedEvents) as [string, AgrathaEvent[]][]).map(([dept, deptEvents], deptIdx) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: deptIdx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display font-black text-xl md:text-2xl text-primary tracking-tighter uppercase whitespace-nowrap">
                  {dept}
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {deptEvents.map((e) => (
                  <EventCard
                    key={e.id}
                    event={e}
                    onOpen={() => setActive(e)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <EventModal
        event={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
};

export default EventsSection;
