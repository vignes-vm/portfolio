import { useEffect, useRef, useState } from "react";

export function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: "smooth" });
}

export function useCountUp(target: number, duration = 1500, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, display: decimals ? value.toFixed(decimals) : Math.round(value).toString() };
}

export function SectionTitle({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <span
        className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-mono mb-4"
        style={{
          color: "var(--accent)",
          background: "color-mix(in oklab, var(--accent) 10%, transparent)",
          border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
        }}
      >
        {badge}
      </span>
      <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
        {title}
      </h2>
      <div className="mx-auto mt-4 h-[3px] rounded-full" style={{ width: 60, background: "var(--gradient-1)" }} />
    </div>
  );
}
