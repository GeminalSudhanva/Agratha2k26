import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-arena.jpg";
import ParticleField from "./ParticleField";
import CountdownTimer from "./CountdownTimer";
import EventRoadmap from "./EventRoadmap";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-56 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cyberpunk neon arena backdrop for AGRATHA 2K26"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-60" />
      </div>

      {/* Particles */}
      <ParticleField density={70} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono-tech text-xs tracking-[0.25em] text-primary uppercase">
              AGM RURAL COLLEGE OF ENGINEERING AND TECHNOLOGY VARUR , HUBLI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black tracking-tighter leading-[0.9] text-[clamp(3rem,9vw,7.5rem)]"
          >
            <span className="block neon-text animate-neon-flicker">अGRATHA</span>
            <span className="block text-foreground/90 text-glow-cyan">
              2<span className="text-secondary text-glow-magenta">K</span>26
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg md:text-xl font-body text-muted-foreground"
          >
            <span className="font-mono-tech text-primary"> &gt; </span>
            Unlock Your Potential.{" "}
            <span className="text-secondary font-semibold">Enter AGRATHA 2K26.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#events"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-neon font-display font-bold tracking-widest text-background uppercase text-sm overflow-hidden shadow-glow-cyan hover:shadow-glow-magenta transition-all hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="relative">Enter Event</span>
              <ArrowRight className="relative h-4 w-4 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass-panel font-display font-semibold tracking-wider text-sm uppercase text-foreground hover:text-primary border border-primary/30 hover:border-primary transition group"
            >
              <Sparkles className="h-4 w-4 text-secondary" />
              Mission Briefing
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 font-mono-tech text-xs"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground/80">04 — 08 MAY 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span className="text-foreground/80">AGM RCET, VARUR · HUBLI</span>
            </div>
          </motion.div>

          <EventRoadmap />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:col-span-5"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent animate-scan-line pointer-events-none" />
    </section>
  );
};

export default Hero;
