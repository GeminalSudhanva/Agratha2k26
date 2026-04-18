import { motion } from "framer-motion";
import { Cpu, Trophy, Users, Rocket } from "lucide-react";

const stats = [
  { icon: Cpu, label: "Events", value: "40+", color: "text-primary" },
  { icon: Users, label: "Departments", value: "12", color: "text-secondary" },
  { icon: Trophy, label: "Prize Pool", value: "₹5L+", color: "text-accent" },
  { icon: Rocket, label: "Days of Action", value: "05", color: "text-neon-pink" },
];

const perks = [
  {
    title: "Career XP",
    desc: "Hackathons, paper presentations, and tech battles that build resumes recruiters actually want to read.",
  },
  {
    title: "Skill Power-Ups",
    desc: "Hands-on workshops, design sprints, and prompt-to-product challenges. Learn by shipping.",
  },
  {
    title: "Pure Fun",
    desc: "LAN gaming, dance, fashion show, escape rooms — the arena is part Comic-Con, part esports lounge.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
            What is <span className="neon-text">AGRATHA 2K26?</span>
          </h2>
          <div className="mt-6 space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              AGRATHA 2K26 is a 2-day <span className="text-primary font-semibold">National Level</span>{" "}
              <span className="text-secondary font-semibold">Techno-Cultural Fest</span> organized by AGM
              Rural College of Engineering & Technology, Varur, taking place on{" "}
              <span className="text-accent font-semibold">May 7th & 8th</span>.
            </p>
            <p>
              It is a dynamic platform where innovation meets creativity — bringing together students
              from across the country to compete, collaborate, and celebrate talent. From
              cutting-edge technical challenges to vibrant cultural competitions, AGRATHA offers an
              electrifying environment to showcase skills, explore new ideas, and push beyond limits.
            </p>
            <p>
              Step into an <span className="text-foreground font-semibold">arena</span> filled with
              energy, creativity, and opportunity — where every participant gets a chance to learn,
              perform, and shine.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass-panel rounded-2xl p-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-neon opacity-0 group-hover:opacity-30 blur-md transition" />
              <s.icon className={`h-7 w-7 ${s.color} mb-3`} />
              <div className="font-display font-black text-3xl md:text-4xl text-foreground">
                {s.value}
              </div>
              <div className="font-mono-tech text-xs tracking-widest text-muted-foreground uppercase mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative glass-panel rounded-2xl p-7 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-display font-black text-7xl text-primary/10 leading-none p-4">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="font-display font-bold text-xl text-foreground group-hover:text-primary transition">
                  {p.title}
                </div>
                <p className="mt-3 font-body text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
