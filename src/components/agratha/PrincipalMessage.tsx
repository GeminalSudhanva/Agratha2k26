import { motion } from "framer-motion";
import { Quote, Shield } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <section id="principal" className="relative py-24 md:py-32">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-mono-tech text-xs tracking-[0.4em] text-secondary uppercase mb-3">
            // 02 — Mission Briefing
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
            From <span className="neon-text">Command</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glowing ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-neon opacity-40 blur-xl animate-pulse-glow" />

          <div className="relative glass-panel rounded-3xl p-8 md:p-10 hud-corners scanline overflow-hidden">
            {/* HUD top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-neon flex items-center justify-center">
                  <Shield className="h-5 w-5 text-background" />
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary uppercase">
                    Transmission · Priority Alpha
                  </div>
                  <div className="font-display font-bold text-foreground">PRINCIPAL_MSG.exe</div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-neon-yellow animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image Side */}
              <div className="md:col-span-4 relative group">
                <div className="absolute -inset-2 bg-gradient-neon opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                  <img
                    src="/Dr.Sandeep_Kyatannavar.png"
                    alt="Dr. Sandeep Kyatannavar"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* HUD Overlays on Image */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="font-mono-tech text-[8px] tracking-widest text-primary uppercase mb-1">
                        Identity Confirmed
                      </div>
                      <div className="h-1 w-24 bg-primary/20">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-primary shadow-[0_0_5px_#var(--primary)]"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Scan Line Animation */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      animate={{ top: ["-10%", "110%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-0.5 bg-primary/40 shadow-[0_0_10px_#var(--primary)]"
                    />
                  </div>
                </div>
                {/* ID Tag */}
                <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 w-fit">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                  <span className="font-mono-tech text-[10px] tracking-widest text-primary uppercase">
                    ID: AGM-RCET-001
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="md:col-span-8">
                <Quote className="h-10 w-10 text-primary/40 mb-4" />

                <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90">
                  <span className="font-mono-tech text-primary">&gt;</span> Welcome, cadets, to{" "}
                  <span className="text-secondary font-semibold">AGRATHA 2K26</span> — the arena where
                  ideas spark, talent collides and tomorrow's engineers are forged. At AGM RCET, we
                  believe innovation is a team sport. These five days are your chance to{" "}
                  <span className="text-primary font-semibold">build, compete, perform</span> and most
                  importantly — connect with peers who'll shape the industry alongside you.
                  <br />
                  <br />
                  Step into the arena. Push your limits. Make every event count.{" "}
                  <span className="neon-text font-semibold">Game on.</span>
                </p>

                <div className="mt-8 pt-6 border-t border-primary/20 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-display font-bold text-xl text-foreground">
                      Dr. Sandeep Kyatannavar
                    </div>
                    <div className="font-mono-tech text-xs tracking-widest text-muted-foreground uppercase">
                      Principal · AGM RCET
                    </div>
                  </div>
                  <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary uppercase">
                    Signal: Encrypted · 256-bit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
