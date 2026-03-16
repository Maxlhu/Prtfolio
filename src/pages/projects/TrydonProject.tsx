import { useTranslation } from "react-i18next";
import trydon_preview from "../../assets/trydon_preview.png";
import { BulletPoint, CodeBlock, MediumProjectImage, ProjectImage, SectionText, SectionTitle, SmallProjectImage } from "../../components/ProjectPageComponents";

export function TrydonProjectPage() {

    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-screen bg-black">

            {/* HERO */}
            <div
                style={{ backgroundImage: `url(${trydon_preview})` }}
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
                <MediumProjectImage imageUrl={trydon_preview} alt="Trydon Interface" />

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
                <ProjectImage imageUrl={trydon_preview} alt="Trydon Interface" />

                <SectionText text={t("projects.trydon.section3Text4")} />
                <ProjectImage imageUrl={trydon_preview} alt="Trydon Interface" />
                
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