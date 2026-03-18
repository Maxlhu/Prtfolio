import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import hex_home from "../../assets/hex_home.png";

export function HexAIProjectPage() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

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
            {/* ── Hero — geometric / algorithmic ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-black" style={{ backgroundImage: `url(${hex_home})` }}>

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251,146,60,0.12) 0%, transparent 70%)",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-orange-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        AI · Game Theory · Solo Project
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.hexAI.heroTitle")}
                    </h1>
                    <p className="text-xl text-orange-100 font-light max-w-xl leading-relaxed">
                        {t("projects.hexAI.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Python", "Minimax", "Alpha-Beta", "Heuristics", "Game AI"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-orange-500/40 bg-orange-950/40 text-orange-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-orange-600 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.hexAI.section1")} />
                <SectionText text={t("projects.hexAI.section1Text1")} />
                <SectionText text={t("projects.hexAI.section1Text2")} />

                <SectionTitle title={t("projects.hexAI.section2")} />
                <SectionText text={t("projects.hexAI.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.hexAI.section2Bullet1")} />
                    <BulletPoint text={t("projects.hexAI.section2Bullet2")} />
                    <BulletPoint text={t("projects.hexAI.section2Bullet3")} />
                </ul>

                <SectionTitle title={t("projects.hexAI.section3")} />

                <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.hexAI.section3Sub1")}
                </p>
                <SectionText text={t("projects.hexAI.section3Text1")} />

                <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.hexAI.section3Sub2")}
                </p>
                <SectionText text={t("projects.hexAI.section3Text2")} />
                <SectionText text={t("projects.hexAI.section3Text3")} />

                <CodeBlock code={`def extract_chain_from_position(self, rep, start_i, start_j, piece_type: str) -> list:
        chain = []
        stack = [(start_i, start_j)]
        visited = set()

        while stack:
            i, j = stack.pop()
            if (i, j) in visited:
                continue
            
            visited.add((i, j))
            chain.append((i, j))

            for _, (ptype, (ni, nj)) in rep.get_neighbours(i, j).items():
                if ptype == piece_type and (ni, nj) not in visited:
                    stack.append((ni, nj))

        return chain`} />

                <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.hexAI.section3Sub3")}
                </p>
                <SectionText text={t("projects.hexAI.section3Text4")} />

                <SectionTitle title={t("projects.hexAI.section4")} />
                <SectionText text={t("projects.hexAI.section4Text1")} />

                <SectionTitle title={t("projects.hexAI.section5")} />
                <SectionText text={t("projects.hexAI.section5Text1")} />
            </div>
        </div>
    );
}