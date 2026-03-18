import { useTranslation } from "react-i18next";
import trydon_hero from "../../assets/trydon_hero.png";
import trydon_screen1 from "../../assets/trydon_screen1.png"
import trydon_screen2 from "../../assets/trydon_screen2.png"
import trydon_screen3 from "../../assets/trydon_screen3.png"
import { BulletPoint, CodeBlock, ProjectImage, SectionText, SectionTitle, SmallProjectImage } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

export function TrydonProjectPage() {

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
            {/* HERO */}
            <div
                style={{ backgroundImage: `url(${trydon_hero})` }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen"
            >

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Startup Project
                    </span>

                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        Trydon
                    </h1>

                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        An AI-powered size recommendation system that uses precise body measurements
                        to determine how garments will fit before purchasing online.
                    </p>
                </div>

                <div className="absolute bottom-6 right-10 text-gray-400 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                {/* CONTEXT */}
                <SectionTitle title={t("projects.trydon.section1")} />
                <SectionText text={t("projects.trydon.section1Text1")} />

                {/* WHAT IT DOES */}
                <SectionTitle title={t("projects.trydon.section2")} />
                <ProjectImage imageUrl={trydon_screen1} alt="Trydon Interface" />

                <SectionText text={t("projects.trydon.section2Text1")} />

                <ul className="mt-2">
                    <BulletPoint text={t("projects.trydon.section2Bullet1")} />
                    <BulletPoint text={t("projects.trydon.section2Bullet2")} />
                    <BulletPoint text={t("projects.trydon.section2Bullet3")} />
                    <BulletPoint text={t("projects.trydon.section2Bullet4")} />
                </ul>

                {/* HOW IT WORKS */}
                <SectionTitle title={t("projects.trydon.section3")} />

                <SectionText text={t("projects.trydon.section3Text1")} />
                <SectionText text={t("projects.trydon.section3Text2")} />
                <SectionText text={t("projects.trydon.section3Text3")} />

                <CodeBlock code={`function calculateFitScore(body, garment) {
    const diffChest = garment.chest - body.chest;
    const diffWaist = garment.waist - body.waist;
    const diffHip = garment.hip - body.hip;

    const score =
        Math.abs(diffChest) * 0.4 +
        Math.abs(diffWaist) * 0.35 +
        Math.abs(diffHip) * 0.25;

    if (score < 2) return "Perfect Fit";
    if (score < 5) return "Good Fit";
    return "Loose Fit";
}`} />

                <SectionText text={t("projects.trydon.section3Text4")} />
                <div className="flex items-center w-full justify-center flex-wrap gap-8 mt-8">
                    <SmallProjectImage imageUrl={trydon_screen2} alt="User recommandations" />
                    <SmallProjectImage imageUrl={trydon_screen3} alt="Commercial Interface" />
                </div>
                
                <SectionTitle title={t("projects.trydon.section4")} />
                <SectionText text={t("projects.trydon.section4Text1")} />

                <SectionTitle title={t("projects.trydon.section5")} />
                <SectionText text={t("projects.trydon.section5Text1")} />

                <SectionTitle title={t("projects.trydon.section6")} />
                <SectionText text={t("projects.trydon.section6Text1")} />

            </div>
        </div>
    );
}