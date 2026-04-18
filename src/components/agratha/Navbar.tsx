import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import TopBar from "./TopBar";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#principal", label: "Briefing" },
  { href: "#events", label: "Events" },
  { href: "#developer", label: "Developer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500`}
    >
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden bg-background/80 backdrop-blur-md"
          >
            <TopBar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`container transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <nav
          className={`glass-panel rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all ${
            scrolled ? "shadow-glow-purple" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-md bg-gradient-neon blur-md opacity-70 group-hover:opacity-100 transition" />
              <div className="relative h-9 w-9 rounded-md bg-arena-deep border border-primary/50 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="leading-none">
              <div className="font-display font-black text-lg tracking-widest neon-text">
                AGRATHA
              </div>
              <div className="font-mono-tech text-[10px] text-muted-foreground tracking-[0.3em]">
                2K26 // ARENA
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-display font-medium tracking-wider text-muted-foreground hover:text-primary transition group"
                >
                  <span className="relative z-10">{l.label.toUpperCase()}</span>
                  <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#events"
            className="hidden md:inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full bg-gradient-neon text-background shadow-glow-cyan hover:shadow-glow-magenta transition-all duration-300 hover:scale-105"
          >
            <span className="h-2 w-2 rounded-full bg-background animate-pulse" />
            Explore Events
          </a>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="lg:hidden h-10 w-10 rounded-full glass-panel flex items-center justify-center text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-3 glass-panel rounded-2xl p-4 space-y-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg font-display tracking-wider text-sm hover:bg-primary/10 hover:text-primary transition"
                >
                  {l.label.toUpperCase()}
                </a>
              ))}
              <a
                href="#events"
                onClick={() => setOpen(false)}
                className="block text-center font-display text-sm font-bold tracking-widest uppercase px-5 py-3 mt-2 rounded-lg bg-gradient-neon text-background"
              >
                Explore Events
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
