import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

// import gamenight_preview from "../../assets/gamenight_preview.png";
const gamenight_preview = "";

export function GameNightProjectPage() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.1);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tools = ["🎲 Dice", "⏱ Timers", "👥 Teams", "🃏 Cards", "🎯 Score", "🔀 Random"];

    return (
        <div className="min-h-screen w-screen bg-black">
            <div
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
                style={{
                    opacity: scrolled ? 1 : 0,
                    transform: scrolled ? "translateY(0)" : "translateY(-110%)",
                    pointerEvents: scrolled ? "auto" : "none",
                }}
            >
                <HeaderDesktop />
            </div>
            {/* ── Hero — loud party energy, multicolor, bold ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-black">

                {/* Multi-color confetti blob background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 50% 50% at 15% 25%, rgba(251,191,36,0.25) 0%, transparent 50%), radial-gradient(ellipse 40% 40% at 85% 20%, rgba(236,72,153,0.2) 0%, transparent 45%), radial-gradient(ellipse 45% 45% at 60% 80%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(ellipse 35% 35% at 10% 80%, rgba(34,211,238,0.15) 0%, transparent 45%), #0a0a0a",
                    }}
                />

                {/* Confetti dots */}
                <div className="absolute inset-0 overflow-hidden">
                    {["#fbbf24", "#ec4899", "#6366f1", "#22d3ee", "#4ade80", "#f97316"].map((color, ci) =>
                        Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={`${ci}-${i}`}
                                className="absolute rounded-sm"
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: color,
                                    opacity: 0.4,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                            />
                        ))
                    )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* "In progress" badge */}
                <div className="absolute top-12 right-10 z-10 border border-yellow-500/50 bg-yellow-950/30 backdrop-blur px-5 py-3 font-mono text-right">
                    <p className="text-yellow-400 text-xs tracking-widest uppercase">🚧 In Progress</p>
                    <p className="text-white text-sm font-bold mt-1">Coming to stores soon</p>
                    <p className="text-yellow-200/60 text-xs mt-0.5">iOS & Android</p>
                </div>

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Personal Project · Mobile App
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        GameNight
                    </h1>
                    <p className="text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                        {t("projects.gameNight.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Expo", "React Native", "NestJS", "WebSocket", "iOS", "Android"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-yellow-500/40 bg-yellow-950/40 text-yellow-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-yellow-700 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.gameNight.section1")} />
                <SectionText text={t("projects.gameNight.section1Text1")} />

                <SectionTitle title={t("projects.gameNight.section2")} />
                {gamenight_preview && <MediumProjectImage imageUrl={gamenight_preview} alt="GameNight App" />}
                <SectionText text={t("projects.gameNight.section2Text1")} />

                {/* Tool grid */}
                <div className="mt-6 mb-6 grid grid-cols-3 gap-3">
                    {tools.map((tool) => (
                        <div
                            key={tool}
                            className="border border-zinc-700 bg-zinc-900 px-4 py-3 font-mono text-sm text-zinc-200 text-center"
                        >
                            {tool}
                        </div>
                    ))}
                </div>

                <ul className="mt-2">
                    <BulletPoint text={t("projects.gameNight.section2Bullet1")} />
                    <BulletPoint text={t("projects.gameNight.section2Bullet2")} />
                    <BulletPoint text={t("projects.gameNight.section2Bullet3")} />
                    <BulletPoint text={t("projects.gameNight.section2Bullet4")} />
                </ul>

                <SectionTitle title={t("projects.gameNight.section3")} />

                <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.gameNight.section3Sub1")}
                </p>
                <SectionText text={t("projects.gameNight.section3Text1")} />

                <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.gameNight.section3Sub2")}
                </p>
                <SectionText text={t("projects.gameNight.section3Text2")} />
                <CodeBlock code={`// Custom game = ordered list of tool configs
type GameConfig = {
  id: string;
  name: string;
  tools: ToolInstance[];   // e.g. [TeamGenerator, Timer(60s), Dice(d6)]
};

// Host emits game state over WS; all clients stay in sync
@SubscribeMessage('game:action')
handleAction(client: Socket, payload: ActionPayload) {
  const next = applyAction(this.gameState, payload);
  this.server.to(payload.roomId).emit('game:state', next);
}`} />

                <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.gameNight.section3Sub3")}
                </p>
                <SectionText text={t("projects.gameNight.section3Text3")} />

                <SectionTitle title={t("projects.gameNight.section4")} />
                <SectionText text={t("projects.gameNight.section4Text1")} />

                <SectionTitle title={t("projects.gameNight.section5")} />
                <SectionText text={t("projects.gameNight.section5Text1")} />
            </div>
        </div>
    );
}