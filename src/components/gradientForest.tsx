import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const lerp = (a, b, t) => a + (b - a) * t;

const COLORS = [
  { h: 140, s: 60, l: 12 },
  { h: 155, s: 55, l: 16 },
  { h: 130, s: 50, l: 10 },
  { h: 160, s: 65, l: 14 },
  { h: 145, s: 58, l: 13 },
];

export default function ForestBg() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [smooth, setSmooth] = useState({ x: 50, y: 50 });
  const [colorIdx, setColorIdx] = useState(0);
  const [nextColorIdx, setNextColorIdx] = useState(1);
  const [colorT, setColorT] = useState(0);
  const rafRef = useRef();
  const lastShiftRef = useRef(Date.now());
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setSmooth((prev) => ({
        x: lerp(prev.x, mouse.x, 0.06),
        y: lerp(prev.y, mouse.y, 0.06),
      }));

      const now = Date.now();
      if (now - lastShiftRef.current > 3500) {
        lastShiftRef.current = now;
        setColorIdx((i) => (i + 1) % COLORS.length);
        setNextColorIdx((i) => (i + 1) % COLORS.length);
        setColorT(0);
      }

      setColorT((t) => Math.min(t + 0.004, 1));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouse]);

  const c1 = COLORS[colorIdx];
  const c2 = COLORS[nextColorIdx];
  const ch = lerp(c1.h, c2.h, colorT);
  const cs = lerp(c1.s, c2.s, colorT);
  const cl = lerp(c1.l, c2.l, colorT);

  const centerColor = `hsl(${ch}, ${cs}%, ${cl + 18}%)`;
  const midColor    = `hsl(${ch - 10}, ${cs - 5}%, ${cl + 6}%)`;
  const edgeColor   = `hsl(${ch - 20}, ${cs - 15}%, ${cl - 2}%)`;
  const deepColor   = `hsl(${ch - 25}, ${cs - 20}%, ${cl - 6}%)`;
  const textColor   = `hsl(${ch + 20}, 50%, 82%)`;
  const dimColor    = `hsl(${ch + 20}, 30%, 35%)`;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-none"
      style={{
        fontFamily: "'Georgia', serif",
        background: `radial-gradient(ellipse 55% 55% at ${smooth.x}% ${smooth.y}%, ${centerColor} 0%, ${midColor} 30%, ${edgeColor} 65%, ${deepColor} 100%)`,
      }}
    >
      {/* Language toggle — top right */}
      <div className="absolute top-6 right-8 z-20 flex items-center gap-3 font-mono">
        {["fr", "en"].map((lng, i) => (
          <span key={lng} className="flex items-center gap-3">
            <button
              onClick={() => i18n.changeLanguage(lng)}
              className="bg-transparent border-none cursor-pointer uppercase font-mono text-lg tracking-widest transition-all duration-300"
              style={{
                color: i18n.language === lng ? textColor : dimColor,
                fontWeight: i18n.language === lng ? 600 : 400,
              }}
            >
              {lng}
            </button>
            {i === 0 && (
              <span className="text-lg" style={{ color: dimColor }}>·</span>
            )}
          </span>
        ))}
      </div>

      {/* Custom cursor */}
      <div
        className="absolute pointer-events-none z-10 w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${smooth.x}%`,
          top: `${smooth.y}%`,
          background: `hsl(${ch}, 80%, 75%)`,
          boxShadow: `0 0 20px 6px hsl(${ch}, 70%, 55%, 0.35)`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)" }}
      />

      {/* Noise */}
      <svg className="absolute inset-0 opacity-[0.06] pointer-events-none" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Center content */}
      <div className="text-center z-10 select-none" style={{ color: textColor }}>
        <div
          className="text-8xl font-light leading-tight mb-8 opacity-[0.18]"
          style={{ letterSpacing: "-0.01em", textShadow: `0 2px 40px hsl(${ch}, 60%, 40%)` }}
        >
          Maxence Lhuisset
        </div>
        <div className="text-base uppercase tracking-[0.35em] opacity-50">
          ↓ My Portfolio ↓
        </div>
      </div>
    </div>
  );
}