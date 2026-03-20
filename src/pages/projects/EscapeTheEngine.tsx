import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

// import escape_preview from "../../assets/escape_preview.png";
const escape_preview = "";

export function EscapeTheEngineProjectPage() {
    const { t } = useTranslation();
    // The 5 mechanics lost per level — rendered as a visual progression strip
    const levels = [
        { level: 1, lose: "1" },
        { level: 2, lose: "2" },
        { level: 3, lose: "3" },
        { level: 4, lose: "4" },
        { level: 5, lose: "5" },
    ];

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.1);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            {/* ── Hero — dark industrial, train / steam aesthetic ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-zinc-900">

                {/* Diagonal steel plating texture */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 12px)",
                    }}
                />

                {/* Steam / smoke glow from bottom */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 90% 40% at 50% 100%, rgba(251,146,60,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(113,113,122,0.3) 0%, transparent 50%), #18181b",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Hackathon badge */}
                <div className="absolute top-12 right-10 z-10 border border-orange-700/50 bg-orange-950/30 backdrop-blur px-5 py-3 font-mono text-right">
                    <p className="text-orange-400 text-xs tracking-widest uppercase">CreativeJam 2024</p>
                    <p className="text-white text-sm font-bold mt-1">{t("projects.escapeEngine.teamSize")}</p>
                </div>

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-orange-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        {t("projects.escapeEngine.context2")}
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-2">
                        Escape
                    </h1>
                    <h1 className="text-7xl font-black text-orange-400 leading-none tracking-tight mb-4">
                        The Engine
                    </h1>
                    <p className="text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                        {t("projects.escapeEngine.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Unity", "C#", "2D Platformer", "Game Jam", "Losing Mechanics"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-orange-600/40 bg-orange-950/40 text-orange-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-orange-700 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.escapeEngine.section1")} />
                <SectionText text={t("projects.escapeEngine.section1Text1")} />
                <SectionText text={t("projects.escapeEngine.section1Text2")} />

                <SectionTitle title={t("projects.escapeEngine.section2")} />
                {escape_preview && <MediumProjectImage imageUrl={escape_preview} alt="Escape The Engine Screenshot" />}
                <SectionText text={t("projects.escapeEngine.section2Text1")} />

                {/* Level progression strip */}
                <div className="mt-8 mb-6 flex flex-col gap-2">
                    {levels.map(({ level, lose }) => (
                        <div
                            key={level}
                            className="flex items-center gap-4 border border-zinc-700 bg-zinc-900 px-5 py-3"
                            style={{ opacity: 1 - (level - 1) * 0.12 }}
                        >
                            <span className="text-orange-400 font-mono text-xs tracking-widest uppercase w-16">
                                {t("projects.escapeEngine.level")} {level}
                            </span>
                            <span className="text-zinc-500 font-mono text-xs">—</span>
                            <span className="text-zinc-300 font-mono text-sm">
                                {t("projects.escapeEngine.lose")} <span className="text-orange-300">{t(`projects.escapeEngine.loss${lose}`)}</span>
                            </span>
                        </div>
                    ))}
                </div>

                <SectionTitle title={t("projects.escapeEngine.section3")} />

                <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.escapeEngine.section3Sub1")}
                </p>
                <SectionText text={t("projects.escapeEngine.section3Text1")} />
                <CodeBlock code={`// Movement framework — capability flags stripped per level
public class PlayerController : MonoBehaviour {
    public bool canMoveHorizontal = true;
    public bool canJump           = true;
    public bool visionEnabled     = true;

    void Update() {
        if (canMoveHorizontal) HandleHorizontal();
        if (canJump)           HandleJump();
        if (!visionEnabled)    ApplyBlindEffect();
    }
}`} />

                <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.escapeEngine.section3Sub2")}
                </p>
                <SectionText text={t("projects.escapeEngine.section3Text2")} />

                <SectionTitle title={t("projects.escapeEngine.section4")} />
                <SectionText text={t("projects.escapeEngine.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.escapeEngine.section4Bullet1")} />
                    <BulletPoint text={t("projects.escapeEngine.section4Bullet2")} />
                    <BulletPoint text={t("projects.escapeEngine.section4Bullet3")} />
                </ul>

                <SectionTitle title={t("projects.escapeEngine.section5")} />
                <SectionText text={t("projects.escapeEngine.section5Text1")} />
                <a href="https://cxssiopee.itch.io/escape-the-engine" target="_blank" className="text-emerald-400 hover:underline">
                    Itch.io
                </a>
            </div>
        </div>
    );
}