import { useTranslation } from "react-i18next";
import diajiro_preview from "../../assets/dia_jiro_preview.png";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/ProjectPageComponents";

export function DiaJiroProjectPage() {

    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-screen bg-black">

            {/* HERO */}
            <div
                style={{ backgroundImage: `url(${diajiro_preview})` }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Game Jam Project
                    </span>

                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        Dia Jiro
                    </h1>

                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        A cave exploration game where players interact with magical crystals
                        using their voice. Each sound frequency activates a different crystal
                        color to progress deeper into the cave.
                    </p>
                </div>

                <div className="absolute bottom-6 right-10 text-gray-400 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                {/* CONTEXT */}
                <SectionTitle title={t("projects.diajiro.section1")} />
                <SectionText text={t("projects.diajiro.section1Text1")} />

                {/* GAMEPLAY */}
                <SectionTitle title={t("projects.diajiro.section2")} />
                <MediumProjectImage imageUrl={diajiro_preview} alt="Dia Jiro gameplay" />

                <SectionText text={t("projects.diajiro.section2Text1")} />

                <ul className="mt-2">
                    <BulletPoint text={t("projects.diajiro.section2Bullet1")} />
                    <BulletPoint text={t("projects.diajiro.section2Bullet2")} />
                    <BulletPoint text={t("projects.diajiro.section2Bullet3")} />
                    <BulletPoint text={t("projects.diajiro.section2Bullet4")} />
                </ul>

                {/* HOW IT WORKS */}
                <SectionTitle title={t("projects.diajiro.section3")} />

                <SectionText text={t("projects.diajiro.section3Text1")} />
                <SectionText text={t("projects.diajiro.section3Text2")} />
                <SectionText text={t("projects.diajiro.section3Text3")} />

                <CodeBlock code={`float GetDominantFrequency(float[] spectrum, float sampleRate)
{
    int maxIndex = 0;

    for (int i = 1; i < spectrum.Length; i++)
    {
        if (spectrum[i] > spectrum[maxIndex])
            maxIndex = i;
    }

    float frequency = maxIndex * sampleRate / spectrum.Length;
    return frequency;
}`} />

                <SectionText text={t("projects.diajiro.section3Text4")} />
                <SectionText text={t("projects.diajiro.section3Text5 n ")} />

                {/* WHAT WE USED */}
                <SectionTitle title={t("projects.diajiro.section4")} />

                <ul className="mt-2">
                    <BulletPoint text={t("projects.diajiro.section4Bullet1")} />
                    <BulletPoint text={t("projects.diajiro.section4Bullet2")} />
                    <BulletPoint text={t("projects.diajiro.section4Bullet3")} />
                    <BulletPoint text={t("projects.diajiro.section4Bullet4")} />
                    <BulletPoint text={t("projects.diajiro.section4Bullet5")} />
                </ul>

                {/* MY ROLE */}
                <SectionTitle title={t("projects.diajiro.section5")} />
                <SectionText text={t("projects.diajiro.section5Text1")} />

                <SectionTitle title={t("projects.diajiro.section6")} />
                <SectionText text={t("projects.diajiro.section6Text1")} />

            </div>
        </div>
    );
}