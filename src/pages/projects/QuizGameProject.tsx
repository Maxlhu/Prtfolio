import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle, SmallProjectImage } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import quiz_game_home from "../../assets/quiz_game_home.png";
import quiz_game_screen1 from "../../assets/quiz_game_screen1.png";
import quiz_game_screen2 from "../../assets/quiz_game_screen2.png";

// import quiz_preview from "../../assets/quiz_preview.png";
const quiz_preview = "";

export function QuizGameProjectPage() {
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

            {/* ── Hero — playful, energetic, game-like ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-violet-950">

                {/* Bold diagonal color blocks */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${quiz_game_home})` }}
                />

                {/* Question mark pattern */}
                <div className="absolute inset-0 flex flex-wrap content-start overflow-hidden opacity-5 select-none pointer-events-none p-4 gap-8 text-white text-4xl font-black">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <span key={i}>{["?", "✓", "×", "○"][i % 4]}</span>
                    ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-violet-300 font-mono text-sm tracking-widest uppercase mb-3 block">
                        {t("projects.quizGame.context2")}
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.quizGame.heroTitle")}
                    </h1>
                    <p className="text-xl text-violet-200 font-light max-w-xl leading-relaxed">
                        {t("projects.quizGame.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Angular", "Flutter", "NestJS", "WebSocket", "OpenAI"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-violet-400/40 bg-violet-900/40 text-violet-200 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-violet-400 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.quizGame.section1")} />
                <SectionText text={t("projects.quizGame.section1Text1")} />

                <SectionTitle title={t("projects.quizGame.section2")} />
                {quiz_preview && <MediumProjectImage imageUrl={quiz_preview} alt="Quiz Game Screenshot" />}
                <SectionText text={t("projects.quizGame.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.quizGame.section2Bullet1")} />
                    <BulletPoint text={t("projects.quizGame.section2Bullet2")} />
                    <BulletPoint text={t("projects.quizGame.section2Bullet3")} />
                </ul>

                <div className="flex items-center w-full justify-center flex-wrap gap-8 mt-8">
                    <SmallProjectImage imageUrl={quiz_game_screen1} alt={t("projects.quizGame.screen1Alt")} />
                    <SmallProjectImage imageUrl={quiz_game_screen2} alt={t("projects.quizGame.screen2Alt")} />
                </div>

                <SectionTitle title={t("projects.quizGame.section3")} />

                <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.quizGame.section3Sub1")}
                </p>
                <SectionText text={t("projects.quizGame.section3Text1")} />

                <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.quizGame.section3Sub2")}
                </p>
                <SectionText text={t("projects.quizGame.section3Text2")} />

                <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.quizGame.section3Sub3")}
                </p>
                <SectionText text={t("projects.quizGame.section3Text3")} />
                <CodeBlock code={`function sanitizeForLLM(input: string): string {
  return input
    .replace(/ignore (all |previous |above )?instructions?/gi, "[removed]")
    .replace(/you are now|act as|pretend (you are|to be)/gi, "[removed]")
    .trim();
}`} />

                <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.quizGame.section3Sub4")}
                </p>
                <SectionText text={t("projects.quizGame.section3Text4")} />

                <SectionTitle title={t("projects.quizGame.section4")} />
                <SectionText text={t("projects.quizGame.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.quizGame.section4Bullet1")} />
                    <BulletPoint text={t("projects.quizGame.section4Bullet2")} />
                    <BulletPoint text={t("projects.quizGame.section4Bullet3")} />
                    <BulletPoint text={t("projects.quizGame.section4Bullet4")} />
                    <BulletPoint text={t("projects.quizGame.section4Bullet5")} />
                </ul>

                <SectionTitle title={t("projects.quizGame.section5")} />
                <SectionText text={t("projects.quizGame.section5Text1")} />
            </div>
        </div>
    );
}