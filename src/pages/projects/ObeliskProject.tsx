import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

// Replace this with your actual obelisk preview image import:
// import obelisk_preview from "../../assets/obelisk_preview.png";
const obelisk_preview = ""; // placeholder

export function ObeliskProjectPage() {
    const { t } = useTranslation();
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
            {/* ── Hero ── */}
            <div
                style={{ backgroundImage: obelisk_preview ? `url(${obelisk_preview})` : undefined }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen bg-zinc-950"
            >
                {/* Subtle grid overlay — gives a "systems / infra" feel */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Case Study · Final Year Project
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.obelisk.title").split(" - ")[0]}
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        {t("projects.obelisk.heroSubtitle")}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["React", "NestJS", "Python", "PostgreSQL", "ML · 2-Tower", "PyTorch"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-indigo-500/40 bg-indigo-950/40 text-indigo-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-gray-500 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                {/* Section 1 — Context */}
                <SectionTitle title={t("projects.obelisk.section1")} />
                <SectionText text={t("projects.obelisk.section1Text1")} />
                <SectionText text={t("projects.obelisk.section1Text2")} />

                {/* Section 2 — What it does */}
                <SectionTitle title={t("projects.obelisk.section2")} />
                {obelisk_preview && (
                    <MediumProjectImage imageUrl={obelisk_preview} alt="Obelisk Screenshot" />
                )}
                <SectionText text={t("projects.obelisk.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.obelisk.section2Bullet1")} />
                    <BulletPoint text={t("projects.obelisk.section2Bullet2")} />
                    <BulletPoint text={t("projects.obelisk.section2Bullet3")} />
                </ul>

                {/* Section 3 — Architecture */}
                <SectionTitle title={t("projects.obelisk.section3")} />
                <SectionText text={t("projects.obelisk.section3Text1")} />

                {/* Sub-section: Web App */}
                <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.obelisk.section3Sub1")}
                </p>
                <SectionText text={t("projects.obelisk.section3Text2")} />

                {/* Sub-section: Backend */}
                <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.obelisk.section3Sub2")}
                </p>
                <SectionText text={t("projects.obelisk.section3Text3")} />

                {/* Sub-section: ML System */}
                <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.obelisk.section3Sub3")}
                </p>
                <SectionText text={t("projects.obelisk.section3Text4")} />
                <SectionText text={t("projects.obelisk.section3Text5")} />

                {/* 2-Tower diagram in code */}
                <CodeBlock code={`# 2-Tower architecture (simplified)

CalendarEvent ──► [Semantic Tower  (SEMMODEL)]──┐
                                                 ├──► [Fusion Head] ──► WrikeTask
CalendarEvent ──► [Structured Tower (trained)] ──┘

# Feedback loop: user corrections re-train Structured + Fusion towers`} />

                <SectionText text={t("projects.obelisk.section3Text6")} />

                {/* Section 4 — My role */}
                <SectionTitle title={t("projects.obelisk.section4")} />
                <SectionText text={t("projects.obelisk.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.obelisk.section4Bullet1")} />
                    <BulletPoint text={t("projects.obelisk.section4Bullet2")} />
                    <BulletPoint text={t("projects.obelisk.section4Bullet3")} />
                    <BulletPoint text={t("projects.obelisk.section4Bullet4")} />
                </ul>

                {/* Section 5 — Check it out */}
                <SectionTitle title={t("projects.obelisk.section5")} />
                <SectionText text={t("projects.obelisk.section5Text1")} />
            </div>
        </div>
    );
}