import { useEffect, useState } from "react";
import { EVENT_START_DATE, SEASON_START_DATE } from "@/data/events";

const calc = () => {
  const diff = EVENT_START_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

const calcLoad = () => {
  const total = EVENT_START_DATE.getTime() - SEASON_START_DATE.getTime();
  const elapsed = Date.now() - SEASON_START_DATE.getTime();
  const progress = Math.min(100, Math.max(0, (elapsed / total) * 100));
  return Math.round(progress * 10) / 10;
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 rounded-xl bg-gradient-neon opacity-30 blur-md group-hover:opacity-70 transition" />
    <div className="relative glass-panel rounded-xl p-2 sm:p-3 md:p-4 text-center hud-corners">
      <div className="font-display text-2xl sm:text-3xl md:text-5xl font-black neon-text tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-1 font-mono-tech text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  </div>
);

const CountdownTimer = () => {
  const [t, setT] = useState(calc());
  const [load, setLoad] = useState(calcLoad());

  useEffect(() => {
    const i = setInterval(() => {
      setT(calc());
      setLoad(calcLoad());
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 hud-corners scanline">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary uppercase">
            // Countdown
          </div>
          <div className="font-display font-bold text-xl text-foreground mt-1">
            Arena Boots In
          </div>
        </div>
        <div className="h-10 w-10 rounded-lg bg-gradient-neon flex items-center justify-center text-background font-display font-black animate-pulse-glow">
          T-
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        <Cell value={t.d} label="Days" />
        <Cell value={t.h} label="Hours" />
        <Cell value={t.m} label="Mins" />
        <Cell value={t.s} label="Secs" />
      </div>

      <div className="mt-6 pt-5 border-t border-border/60">
        <div className="flex items-center justify-between text-xs font-mono-tech text-muted-foreground mb-2">
          <span>SEASON LOAD</span>
          <span className="text-primary">{load}%</span>
        </div>
        <div className="h-2 rounded-full bg-arena-deep overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-neon relative transition-all duration-1000"
            style={{ width: `${load}%` }}
          >
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
