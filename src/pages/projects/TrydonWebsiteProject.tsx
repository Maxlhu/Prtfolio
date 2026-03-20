import { useTranslation } from "react-i18next";
import trydon_home from "../../assets/trydon_home.png";
import trydon_web_screen1 from "../../assets/trydon_web_screen1.png";
import { BulletPoint, MediumProjectImage, ProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

// import trydon_preview from "../../assets/trydon_website_preview.png";
const trydon_preview = "";

export function TrydonWebsiteProjectPage() {
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
            {/* ── Hero — clean product / startup aesthetic ── */}
            <div className="relative flex flex-col justify-end h-screen bg-zinc-900 overflow-hidden">

                {/* Animated gradient mesh background */}
                <div
                    className="absolute inset-0"
                style={{ backgroundImage: `url(${trydon_home})` }}
                />

                {/* Subtle dot grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.5) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Startup · Web
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        Trydon.ca
                    </h1>
                    <p className="text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                        {t("projects.trydonWebsite.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Angular", "AWS Lambda", "Pricing", "ROI Calculator", "Auth"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-zinc-500 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content — white background, dark text ── */}
                <div className="max-w-4xl ml-10 px-6 pb-32">

                    <SectionTitle title={t("projects.trydonWebsite.section1")} />
                    <SectionText text={t("projects.trydonWebsite.section1Text1")} />

                    <SectionTitle title={t("projects.trydonWebsite.section2")} />
                    {trydon_preview && <MediumProjectImage imageUrl={trydon_preview} alt="Trydon Website" />}
                    <SectionText text={t("projects.trydonWebsite.section2Text1")} />
                    <ul className="mt-2">
                        <BulletPoint text={t("projects.trydonWebsite.section2Bullet1")} />
                        <BulletPoint text={t("projects.trydonWebsite.section2Bullet2")} />
                        <BulletPoint text={t("projects.trydonWebsite.section2Bullet3")} />
                        <BulletPoint text={t("projects.trydonWebsite.section2Bullet4")} />
                        <BulletPoint text={t("projects.trydonWebsite.section2Bullet5")} />
                    </ul>
                    <ProjectImage imageUrl={trydon_web_screen1} alt="ROI" />

                    <SectionTitle title={t("projects.trydonWebsite.section3")} />

                    <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                        {t("projects.trydonWebsite.section3Sub1")}
                    </p>
                    <SectionText text={t("projects.trydonWebsite.section3Text1")} />

                    <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                        {t("projects.trydonWebsite.section3Sub2")}
                    </p>
                    <SectionText text={t("projects.trydonWebsite.section3Text2")} />

                    <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                        {t("projects.trydonWebsite.section3Sub3")}
                    </p>
                    <SectionText text={t("projects.trydonWebsite.section3Text3")} />

                    <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                        {t("projects.trydonWebsite.section3Sub4")}
                    </p>
                    <SectionText text={t("projects.trydonWebsite.section3Text4")} />

                    <SectionTitle title={t("projects.trydonWebsite.section4")} />
                    <SectionText text={t("projects.trydonWebsite.section4Text1")} />

                    <SectionTitle title={t("projects.trydonWebsite.section5")} />
                    <SectionText text={t("projects.trydonWebsite.section5Text1")} />
                    <a href="https://trydon.ca" target="_blank" className="text-emerald-400 hover:underline">
                        Trydon.ca
                    </a>
                    <SectionText text={t("projects.trydonWebsite.section5Text2")} />
                    <a href="https://github.com/Trydon-Inc/TrydonWebApp" target="_blank" className="text-emerald-400 hover:underline">
                        Github
                    </a>
                </div>
            </div>
    );
}