import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { events, type AgrathaEvent } from "@/data/events";
import { ChevronDown, Filter, Search } from "lucide-react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import { Input } from "@/components/ui/input";

const EventsSection = () => {
  const [deptFilter, setDeptFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState<AgrathaEvent | null>(null);

  // Extract unique departments
  const departments = useMemo(() => {
    const deps = events.map((e) => e.department);
    return ["all", ...new Set(deps)];
  }, []);

  const groupedEvents = useMemo(() => {
    const filtered = events.filter((e) => {
      const matchesDept = deptFilter === "all" || e.department === deptFilter;
      const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });

    const groups: Record<string, AgrathaEvent[]> = {};
    filtered.forEach((e) => {
      if (!groups[e.department]) groups[e.department] = [];
      groups[e.department].push(e);
    });
    return groups;
  }, [deptFilter, searchQuery]);

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
          {/* Search and Filters */}
          <div className="w-full max-w-xl lg:max-w-md space-y-8">
            {/* Search Bar */}
            <div className="relative group">
              <span className="block font-mono-tech text-[10px] tracking-[0.4em] text-muted-foreground uppercase opacity-60 mb-3">
                // Search Arena
              </span>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Enter event name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-arena-deep/40 border-primary/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-xl h-14 font-display text-sm tracking-wider placeholder:text-muted-foreground/30 transition-all shadow-inner shadow-black/20"
                />
              </div>
            </div>

            {/* Department Filters */}
            <div className="relative group">
              <span className="block w-full lg:text-right font-mono-tech text-[10px] tracking-[0.4em] text-muted-foreground uppercase opacity-60 mb-3">
                // Filter by Branch
              </span>
              
              <div className="relative">
                {/* Mobile Dropdown */}
                <div className="lg:hidden relative">
                  <select
                    value={deptFilter}
                    onChange={(e) => setDeptFilter(e.target.value)}
                    className="w-full bg-arena-deep border border-primary/30 rounded-xl px-5 py-4 font-display text-sm font-bold tracking-widest uppercase text-foreground appearance-none shadow-glow-cyan/20 focus:outline-none focus:border-primary transition-all"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept === "all" ? "All Branches" : dept}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>

                {/* Desktop Pills */}
                <div className="hidden lg:flex flex-wrap justify-end gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setDeptFilter(dept)}
                      className={`relative px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
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
          </div>
        </motion.div>

        <div className="space-y-16">
          {Object.keys(groupedEvents).length > 0 ? (
            (Object.entries(groupedEvents) as [string, AgrathaEvent[]][]).map(
              ([dept, deptEvents], deptIdx) => (
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
                      <EventCard key={e.id} event={e} onOpen={() => setActive(e)} />
                    ))}
                  </div>
                </motion.div>
              )
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center border border-dashed border-primary/20 rounded-3xl"
            >
              <p className="font-display text-lg text-muted-foreground uppercase tracking-[0.2em]">
                No arenas found matching "
                <span className="text-primary italic">{searchQuery}</span>"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setDeptFilter("all");
                }}
                className="mt-6 text-xs font-mono-tech text-primary/60 hover:text-primary underline underline-offset-4 tracking-widest uppercase transition-colors"
              >
                // Reset All Filters
              </button>
            </motion.div>
          )}
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
