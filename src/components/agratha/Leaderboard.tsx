import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Cpu, Code2, Rocket, ExternalLink, Database } from "lucide-react";

const DEVELOPERS = [
  {
    name: "Sanjeev Nadgir",
    role: "Lead Systems Architect",
    description: "Building the digital infrastructure for AGRATHA 2K26. Focused on creating high-performance, immersive experiences that push the boundaries of technical festival platforms.",
    github: "https://github.com/sanjeevnadgir123",
    linkedin: "#",
    portfolio: "#",
    icon: Code2,
    color: "primary"
  },
  {
    name: "Krishi Navale",
    role: "Frontend Engineer",
    description: "Specializing in high-performance React architectures and immersive UI animations that bring the digital arena's visual identity to life through code.",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    icon: Cpu,
    color: "secondary"
  },
  {
    name: "Sudhanva Ballary",
    role: "Systems Developer",
    description: "Implementing robust backend logic and technical protocols to power the arena's infrastructure, ensuring seamless stability for all participants.",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    icon: Rocket,
    color: "accent"
  },
  {
    name: "Shrusti Patil",
    role: "Data Engineer",
    description: "Architecting intelligence and data-driven insights to optimize the digital arena, ensuring every data point contributes to a superior participant experience.",
    github: "#",
    linkedin: "#",
    portfolio: "#",
    icon: Database,
    color: "emerald"
  }
];

const colorMap = {
  primary: {
    border: "border-primary/30",
    text: "text-primary",
    shadow: "shadow-glow-cyan",
    bg: "bg-primary/5"
  },
  secondary: {
    border: "border-secondary/30",
    text: "text-secondary",
    shadow: "shadow-glow-purple",
    bg: "bg-secondary/5"
  },
  accent: {
    border: "border-accent/30",
    text: "text-accent",
    shadow: "shadow-glow-yellow",
    bg: "bg-accent/5"
  },
  emerald: {
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    shadow: "shadow-[0_0_20px_rgba(52,211,153,0.3)]",
    bg: "bg-emerald-500/5"
  }
};

const Developer = () => {
  return (
    <section id="developer" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="font-mono-tech text-xs tracking-[0.4em] text-primary uppercase mb-3">
              // PROJECT ARCHITECTS
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight uppercase">
              Platform <span className="neon-text">Developers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {DEVELOPERS.map((dev, index) => {
              const colors = colorMap[dev.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative glass-panel rounded-3xl p-8 overflow-hidden hud-corners flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-display font-black text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {dev.name}
                      </h3>
                      <p className="font-mono-tech text-[10px] text-primary uppercase tracking-[0.2em] mt-1">
                        {dev.role}
                      </p>
                    </div>
                    <div className={`h-12 w-12 rounded-xl bg-arena-deep border ${colors.border} flex items-center justify-center ${colors.text} ${colors.shadow} animate-pulse`}>
                      <dev.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 italic">
                    "{dev.description}"
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass-panel hover:border-primary hover:text-primary transition-all"
                      title="Github"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={dev.linkedin}
                      className="p-2 rounded-full glass-panel hover:border-secondary hover:text-secondary transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={dev.portfolio}
                      className="p-2 rounded-full glass-panel hover:border-accent hover:text-accent transition-all"
                      title="Portfolio"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Decorative scanline */}
                  <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity scanline" />
                </motion.div>
              );
            })}
          </div>

          {/* Project Stats and Tech Stack Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-panel rounded-2xl p-6 border-l-4 border-l-primary"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Cpu className="h-5 w-5" />
                <span className="font-display font-bold text-sm tracking-widest uppercase text-foreground">
                  Core Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React 18", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-md bg-arena-deep border border-border text-[10px] font-mono-tech text-muted-foreground uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-panel rounded-2xl p-6 border-l-4 border-l-secondary"
            >
              <div className="flex items-center gap-3 mb-4 text-secondary">
                <Rocket className="h-5 w-5" />
                <span className="font-display font-bold text-sm tracking-widest uppercase text-foreground">
                  Project Stats
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono-tech text-[10px] text-muted-foreground uppercase">Stability</span>
                  <span className="font-display text-xs text-secondary font-bold">99.9%</span>
                </div>
                <div className="w-full h-1 bg-arena-deep rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[99.9%]" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono-tech text-[10px] text-muted-foreground uppercase">Efficiency</span>
                  <span className="font-display text-xs text-secondary font-bold">OPTIMIZED</span>
                </div>
                <div className="w-full h-1 bg-arena-deep rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[85%]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Developer;
