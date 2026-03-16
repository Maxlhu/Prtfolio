import { useTranslation } from "react-i18next";
import desjungles_preview from "../../assets/desjungles_preview.png";
import desjungles_home from "../../assets/desjungles_home.png";
import desjungles_screen1 from "../../assets/desjungles_screen1.png";
import desjungles_screen2 from "../../assets/desjungles_screen2.png";
import desjungles_screen3 from "../../assets/desjungles_screen3.png";
import { BulletPoint, CodeBlock, MediumProjectImage, ProjectImage, SectionText, SectionTitle, SmallProjectImage } from "../../components/ProjectPageComponents";

export function DesjunglesProjectPage() {

    const { t } = useTranslation();
    return (
        <div className="min-h-screen w-screen bg-black">
            {/* Hero */}
            <div
                style={{ backgroundImage: `url(${desjungles_home})` }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen"
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        {t("projects.desjungles.context")}
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.desjungles.title")}
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        {t("projects.desjungles.description")}
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
                <ProjectImage imageUrl={desjungles_screen1} alt="Your Account" />

                <SectionText text={t("projects.desjungles.section2Text1")} />

                <ul className="mt-2">
                    <BulletPoint text={t("projects.desjungles.section2Bullet1")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet2")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet3")} />
                    <BulletPoint text={t("projects.desjungles.section2Bullet4")} />
                </ul>
                <div className="flex items-center w-full justify-center flex-wrap gap-8 mt-8">
                    <SmallProjectImage imageUrl={desjungles_screen2} alt="secret mode" />
                    <SmallProjectImage imageUrl={desjungles_screen3} alt="Transaction UI" />
                </div>

                <SectionTitle title={t("projects.desjungles.section3")} />
                <SectionText text={t("projects.desjungles.section3Text1")} />
                <p className="text-green-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjungles.section3Sub1")}
                </p>
                <SectionText text={t("projects.desjungles.section3Text2")} />
                <p className="text-green-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjungles.section3Sub2")}
                </p>
                <SectionText text={t("projects.desjungles.section3Text3")} />
                <p className="text-green-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjungles.section3Sub3")}
                </p>
                <SectionText text={t("projects.desjungles.section3Text4")} />
                <CodeBlock code={`    const transferMatch = text.match(
        /transfer\s+(\d+)\s*(?:coins?)?\s+from\s+(?:my\s+)?([\w\s]+?)\s+to\s+(?:my\s+)?([\w\s]+)/i
    );`} title="Regex example"/>
                <SectionText text={t("projects.desjungles.section3Text5")} />

                <SectionTitle title={t("projects.desjungles.section4")} />
                <SectionText text={t("projects.desjungles.section4Text1")} />

                <SectionTitle title={t("projects.desjungles.section5")} />
                <SectionText text={t("projects.desjungles.section5Text1")} />
                <a href="https://github.com/cristina-trofimov/desjungles/tree/master" target="_blank" className="text-emerald-400 hover:underline">
                    Github
                </a>
                <br />
                <a href="https://devpost.com/software/desjungles" target="_blank" className="text-emerald-400 hover:underline">
                    Devpost
                </a>

            </div>
        </div>
    );
}