import { useTranslation } from "react-i18next";
import desjungles_preview from "../../assets/desjungles_preview.png";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/ProjectPageComponents";

export function DesjunglesProjectPage() {

    const { t } = useTranslation();
    return (
        <div className="min-h-screen w-screen bg-black">
            {/* Hero */}
            <div
                style={{ backgroundImage: `url(${desjungles_preview})` }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen"
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Case Study
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        Project Title
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        Project description goes here. A short, punchy summary of what this is about.
                    </p>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-6 right-10 text-gray-400 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl ml-10 px-6 pb-32">
                <SectionTitle title={t("projects.desjungles.section1")} />
                <SectionText text={t("projects.desjungles.section1Text1")} />

                <SectionTitle title={t("projects.desjungles.section2")} />
                <MediumProjectImage imageUrl={desjungles_preview} alt="Project Screenshot" />

                <SectionText text={t("projects.desjungles.section2Text1")} />

                <ul className="mt-2">
                    <BulletPoint text={t("projects.desjungles.section2Bullet1")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet2")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet3")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet4")} />
                </ul>

                <SectionTitle title={t("projects.desjungles.section3")} />
                <SectionText text={t("projects.desjungles.section3Text1")} />
                // SUBTITLE
                <SectionText text={t("projects.desjungles.section3Text2")} />
                // SUBTITLE
                <SectionText text={t("projects.desjungles.section3Text3")} />
                // SUBTITLE
                <SectionText text={t("projects.desjungles.section3Text4")} />
                <CodeBlock code={`function example() {
                console.log("This is an example code block.");
                }`} />
                <SectionText text={t("projects.desjungles.section3Text5")} />

                <SectionTitle title={t("projects.desjungles.section4")} />
                <SectionText text={t("projects.desjungles.section4Text1")} />

                <SectionTitle title={t("projects.desjungles.section5")} />
                <SectionText text={t("projects.desjungles.section5Text1")} />
            </div>
        </div>
    );
}