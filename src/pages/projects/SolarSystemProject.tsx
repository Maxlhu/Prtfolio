import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, ProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import solar_nav_home from "../../assets/solar_nav_home.png";
import solar_nav_screen1 from "../../assets/solar_nav_screen1.png";

// import solar_preview from "../../assets/solar_preview.png";
const solar_preview = "";

export function SolarSystemProjectPage() {
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
            {/* ── Hero — deep space, star field, cosmic ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-black" style={{ backgroundImage: `url(${solar_nav_screen1})` }}>

                {/* Star field */}
                

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Award badge */}
                <div className="absolute top-12 right-10 z-10 border border-yellow-600/50 bg-yellow-950/30 backdrop-blur px-5 py-3 font-mono text-right">
                    <p className="text-yellow-400 text-xs tracking-widest uppercase">{t("projects.solarNav.competition")}</p>
                    <p className="text-white text-sm font-bold mt-1">{t("projects.solarNav.reward")}</p>
                    <p className="text-yellow-200/60 text-xs mt-0.5">{t("projects.solarNav.awardDescription")}</p>
                </div>

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Hackathon · Space Challenge
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.solarNav.heroTitle")}
                    </h1>
                    <p className="text-xl text-blue-100 font-light max-w-xl leading-relaxed">
                        {t("projects.solarNav.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Python", "React", "Unity", "NASA API", "Gravity Assist"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-blue-500/40 bg-blue-950/40 text-blue-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-blue-700 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.solarNav.section1")} />
                <SectionText text={t("projects.solarNav.section1Text1")} />

                <SectionTitle title={t("projects.solarNav.section2")} />
                {solar_preview && <MediumProjectImage imageUrl={solar_preview} alt="Solar Navigation Screenshot" />}
                <SectionText text={t("projects.solarNav.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.solarNav.section2Bullet1")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet2")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet3")} />
                    <BulletPoint text={t("projects.solarNav.section2Bullet4")} />
                </ul>
                <ProjectImage imageUrl={solar_nav_home} alt="Solar Navigation Home Screen" />

                <SectionTitle title={t("projects.solarNav.section3")} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub1")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text1")} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub2")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text2")} />
                <CodeBlock code={`def getPlanetPosition(planet_name, date_time):
    planet_ids = getPlanetIds()
    planet_id = planet_ids[planet_name]  
    planet_data = getPlanetData()

    # Convert current datetime to Julian Date (JD)
    jd_now = date_time.timestamp() / 86400 + 2440587.5 

    # Query planetary position data from NASA JPL Horizons
    obj = Horizons(id=planet_id, location='500@0', epochs=[jd_now], id_type='majorbody')
    eph = obj.vectors()

    # Convert AU (astronomical units) to meters
    x = eph['x'][0] * 1.496e+11  
    y = eph['y'][0] * 1.496e+11
    z = eph['z'][0] * 1.496e+11  

    return {"x": x, "y": y, "z": z, "gravity": planet_data[planet_name]["gravity"]} `} />

                <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.solarNav.section3Sub3")}
                </p>
                <SectionText text={t("projects.solarNav.section3Text3")} />
                <SectionText text={t("projects.solarNav.section3Text4")} />

                <SectionTitle title={t("projects.solarNav.section4")} />
                <SectionText text={t("projects.solarNav.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.solarNav.section4Bullet1")} />
                    <BulletPoint text={t("projects.solarNav.section4Bullet2")} />
                </ul>

                <SectionTitle title={t("projects.solarNav.section5")} />
                <SectionText text={t("projects.solarNav.section5Text1")} />
                <a href="https://github.com/Tibab222/polystar" target="_blank" className="text-emerald-400 hover:underline">
                    Github
                </a>
                <br />
                <a href="https://devpost.com/software/polystar" target="_blank" className="text-emerald-400 hover:underline">
                    Devpost
                </a>
            </div>
        </div>
    );
}