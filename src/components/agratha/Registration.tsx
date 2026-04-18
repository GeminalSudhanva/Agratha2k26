import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { events } from "@/data/events";
import { toast } from "sonner";

interface Props {
  presetEventId?: string;
  onConsumePreset?: () => void;
}

type Status = "idle" | "loading" | "success";

const Registration = ({ presetEventId, onConsumePreset }: Props) => {
  const [form, setForm] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    eventId: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (presetEventId) {
      setForm((f) => ({ ...f, eventId: presetEventId }));
      onConsumePreset?.();
    }
  }, [presetEventId, onConsumePreset]);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const filledCount = Object.values(form).filter(Boolean).length;
  const xpProgress = Math.round((filledCount / 5) * 100);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.college || !form.email || !form.phone || !form.eventId) {
      toast.error("All fields required, cadet.");
      return;
    }
    setStatus("loading");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStatus("success");
            toast.success("Registration locked in!");
          }, 300);
          return 100;
        }
        return next;
      });
    }, 200);
  };

  const reset = () => {
    setForm({ name: "", college: "", email: "", phone: "", eventId: "" });
    setStatus("idle");
    setProgress(0);
  };

  return (
    <div className="relative py-8 md:py-12">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-mono-tech text-xs tracking-[0.4em] text-primary uppercase mb-3">
            // 05 — Initialize Player
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
            Join the <span className="neon-text">Arena</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Create your operator profile. One submission, infinite possibilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-neon opacity-30 blur-xl" />
          <div className="relative glass-panel rounded-3xl p-6 md:p-10 hud-corners scanline overflow-hidden">
            {/* XP bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between font-mono-tech text-[10px] tracking-[0.3em] uppercase mb-2">
                <span className="text-primary flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  Profile XP
                </span>
                <span className="text-foreground">{xpProgress}%</span>
              </div>
              <div className="h-2 rounded-full bg-arena-deep overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-neon relative"
                  initial={false}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </motion.div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse-glow" />
                    <CheckCircle2 className="relative h-20 w-20 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display font-black text-3xl md:text-4xl neon-text">
                    YOU'RE IN, OPERATOR
                  </h3>
                  <p className="mt-3 font-body text-muted-foreground max-w-md mx-auto">
                    Your registration for{" "}
                    <span className="text-foreground font-semibold">
                      {events.find((e) => e.id === form.eventId)?.name}
                    </span>{" "}
                    is locked. A confirmation transmission will hit your inbox shortly.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-primary/40 font-display font-semibold tracking-widest text-sm uppercase text-primary hover:text-secondary hover:border-secondary transition"
                  >
                    Register Another Event
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  className="grid md:grid-cols-2 gap-5"
                >
                  <Field
                    label="Operator Name"
                    name="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="John_Doe"
                    disabled={status === "loading"}
                  />
                  <Field
                    label="College"
                    name="college"
                    value={form.college}
                    onChange={update("college")}
                    placeholder="AGM RCET"
                    disabled={status === "loading"}
                  />
                  <Field
                    label="Email Channel"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@arena.com"
                    disabled={status === "loading"}
                  />
                  <Field
                    label="Phone Frequency"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="98XXXXXXXX"
                    disabled={status === "loading"}
                  />

                  <div className="md:col-span-2">
                    <label className="block font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      Select Mission
                    </label>
                    <div className="relative">
                      <select
                        value={form.eventId}
                        onChange={update("eventId")}
                        disabled={status === "loading"}
                        className="w-full appearance-none px-4 py-3.5 rounded-xl bg-arena-deep/80 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none font-body text-foreground transition"
                      >
                        <option value="">— Choose your event —</option>
                        {events.map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.name} · {e.department}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary">▼</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full overflow-hidden rounded-xl px-6 py-4 bg-gradient-neon font-display font-bold tracking-widest text-background uppercase shadow-glow-cyan hover:shadow-glow-magenta transition disabled:opacity-80"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <span className="relative flex items-center justify-center gap-2">
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Authenticating · {Math.round(progress)}%
                          </>
                        ) : (
                          <>Initialize Player →</>
                        )}
                      </span>
                      {status === "loading" && (
                        <span
                          className="absolute bottom-0 left-0 h-1 bg-background/60"
                          style={{ width: `${progress}%`, transition: "width 200ms linear" }}
                        />
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}) => (
  <div>
    <label
      htmlFor={name}
      className="block font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full px-4 py-3.5 rounded-xl bg-arena-deep/80 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none font-body text-foreground placeholder:text-muted-foreground/50 transition"
    />
  </div>
);

export default Registration;
