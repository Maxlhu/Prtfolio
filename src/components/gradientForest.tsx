import { useState, useEffect, useRef } from "react";

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

  const gradient = `radial-gradient(ellipse 55% 55% at ${smooth.x}% ${smooth.y}%, 
    ${centerColor} 0%, 
    ${midColor} 30%, 
    ${edgeColor} 65%, 
    ${deepColor} 100%)`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",           /* fills the parent h-screen container */
        position: "relative",     /* anchor for absolute children */
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Georgia', serif",
        cursor: "none",
      }}
    >
      {/* Custom cursor — absolute, clipped to hero */}
      <div
        style={{
          position: "absolute",   /* was fixed */
          left: `${smooth.x}%`,
          top: `${smooth.y}%`,
          transform: "translate(-50%, -50%)",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: `hsl(${ch}, 80%, 75%)`,
          boxShadow: `0 0 20px 6px hsl(${ch}, 70%, 55%, 0.35)`,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Vignette overlay — absolute, clipped to hero */}
      <div
        style={{
          position: "absolute",   /* was fixed */
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Noise texture overlay */}
      <svg style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Center content */}
      <div
        style={{
          textAlign: "center",
          color: `hsl(${ch + 20}, 50%, 82%)`,
          zIndex: 1,
          userSelect: "none",
        }}
      >
        <div style={{ fontSize: "5rem", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.1, opacity: 0.18, textShadow: `0 2px 40px hsl(${ch}, 60%, 40%)`, marginBottom: "2rem" }}>
          Maxence Lhuisset
        </div>
        <div style={{ fontSize: "1rem", letterSpacing: "0.35em", textTransform: "uppercase", opacity: 0.5, marginBottom: "1rem" }}>
          ↓ My Portfolio ↓
        </div>
      </div>
    </div>
  );
}