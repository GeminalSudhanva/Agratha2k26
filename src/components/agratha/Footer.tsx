import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-md bg-arena-deep border border-primary/50 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-black text-xl tracking-widest neon-text">AGRATHA 2K26</div>
                <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
                  // ENTER · COMPETE · CONQUER
                </div>
              </div>
            </div>
            <p className="font-body text-muted-foreground max-w-md">
              The flagship techno-cultural festival of A.G.M Rural College of Engineering and
              Technology — five days of pure arena energy.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Linkedin, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-10 w-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-cyan transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
              Navigate
            </div>
            <ul className="space-y-2 font-body">
              {[
                ["About", "#about"],
                ["Briefing", "#principal"],
                ["Events", "#events"],
                ["Developer", "/developers"],
                ["Register", "#register"],
              ].map(([l, h]) => (
                <li key={l}>
                  {h.startsWith("/") ? (
                    <Link to={h} className="text-muted-foreground hover:text-primary transition">
                      {l}
                    </Link>
                  ) : (
                    <a href={h} className="text-muted-foreground hover:text-primary transition">
                      {l}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-tech text-[10px] tracking-[0.3em] text-secondary uppercase mb-4">
              Comms
            </div>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <span>Navagraha Teerth, NH-4 PB Road, VARUR-581207, Hubballi, Karnataka</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:08362312071" className="hover:text-primary transition">
                  0836-2312071
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:principal@agmrcet.com" className="hover:text-primary transition">
                  principal@agmrcet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            © 2026 AGM RCET · All rights reserved
          </div>
          <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Built for the Arena · v2.6.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
