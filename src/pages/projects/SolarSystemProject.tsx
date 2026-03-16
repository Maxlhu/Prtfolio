import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/ProjectPageComponents";

// import solar_preview from "../../assets/solar_preview.png";
const solar_preview = "";

export function SolarSystemProjectPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-screen bg-black">

            {/* ── Hero — deep space, star field, cosmic ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-black">

                {/* Star field */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 120 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.7 + 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Nebula glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(99,102,241,0.2) 0%, transparent 55%), radial-gradient(ellipse 40% 60% at 20% 70%, rgba(168,85,247,0.15) 0%, transparent 50%), radial-gradient(ellipse 30% 30% at 85% 75%, rgba(59,130,246,0.1) 0%, transparent 45%)",
                    }}
                />

                {/* Planet silhouette — decorative */}
                <div
                    className="absolute right-20 top-16 rounded-full opacity-20"
                    style={{
                        width: "280px",
                        height: "280px",
                        background: "radial-gradient(circle at 35% 35%, rgba(251,191,36,0.8), rgba(180,83,9,0.4), transparent 70%)",
                        boxShadow: "0 0 80px 20px rgba(251,191,36,0.08)",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Award badge */}
                <div className="absolute top-12 right-10 z-10 border border-yellow-600/50 bg-yellow-950/30 backdrop-blur px-5 py-3 font-mono text-right">
                    <p className="text-yellow-400 text-xs tracking-widest uppercase">PolyHX 2024</p>
                    <p className="text-white text-sm font-bold mt-1">🥈 Second Place</p>
                    <p className="text-yellow-200/60 text-xs mt-0.5">Space Challenge</p>
                </div>

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Hackathon · Space Challenge
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.solarNav.heroTitle")}
                    </h1>
                    <p className="text-xl text-blue-100 font-light max-w-xl leading-relaxed">
                        {t("projects.solarNav.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Python", "React", "Unity", "NASA API", "Gravity Assist"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-blue-500/40 bg-blue-950/40 text-blue-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-blue-700 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.solarNav.section1")} />
                <SectionText text={t("projects.solarNav.section1Text1")} />

                <SectionTitle title={t("projects.solarNav.section2")} />
                {solar_preview && <MediumProjectImage imageUrl={solar_preview} alt="Solar Navigation Screenshot" />}
                <SectionText text={t("projects.solarNav.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.solarNav.section2Bullet1")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet2")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet3")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet4")} />
                </ul>

                <SectionTitle title={t("projects.solarNav.section3")} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub1")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text1")} />
                <CodeBlock code={`# Gravity-assist aware pathfinding
# Graph nodes  = planets at discretized time steps
# Edge weight  = delta-v cost of transfer + gravity-assist reduction
# Goal         = minimise total delta-v from origin to destination

def build_spacetime_graph(planets, time_steps):
    G = {}
    for t in time_steps:
        for p in planets:
            pos = nasa_ephemeris(p, t)          # real-time NASA data
            G[(p, t)] = neighbours(p, t, pos)   # reachable planets + cost
    return G

path = modified_dijkstra(G, start=(origin, t0), end=(destination, ...))`} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub2")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text2")} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub3")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text3")} />
                <SectionText text={t("projects.solarNav.section3Text4")} />

                <SectionTitle title={t("projects.solarNav.section4")} />
                <SectionText text={t("projects.solarNav.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.solarNav.section4Bullet1")} />
                    <BulletPoint text={t("projects.solarNav.section4Bullet2")} />
                </ul>

                <SectionTitle title={t("projects.solarNav.section5")} />
                <SectionText text={t("projects.solarNav.section5Text1")} />
            </div>
        </div>
    );
}