import { useTranslation } from "react-i18next";
import { SectionText, SectionTitle } from "../../components/projectPageComponents";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { useEffect, useState } from "react";

export function DesjardinsKPIProjectPage() {

    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
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

            {/* ── Hero — corporate / security / dark red ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-zinc-950">

                {/* Scan-line / radar aesthetic */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(239,68,68,0.15) 3px, rgba(239,68,68,0.15) 4px)",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 55% at 15% 60%, rgba(220,38,38,0.2) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 85% 30%, rgba(185,28,28,0.1) 0%, transparent 50%), #09090b",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Stat badge — top right */}
                <div className="absolute top-12 right-10 z-10 border border-red-800/50 bg-red-950/30 backdrop-blur px-6 py-4 font-mono text-right">
                    <p className="text-red-400 text-xs tracking-widest uppercase mb-1">Before → After</p>
                    <p className="text-white text-sm">12 KPIs · 3K assets · 6h</p>
                    <p className="text-red-300 text-xs my-1">↓</p>
                    <p className="text-white text-sm font-bold">18 KPIs · 17K assets · 2h30</p>
                </div>

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-red-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Internship · Cybersecurity · Internal Tool
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.desjardinsKPI.heroTitle")}
                    </h1>
                    <p className="text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                        {t("projects.desjardinsKPI.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Python", "Cybersecurity", "Automation", "Perimeter Surveillance"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-red-700/40 bg-red-950/40 text-red-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-red-700 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.desjardinsKPI.section1")} />
                <SectionText text={t("projects.desjardinsKPI.section1Text1")} />
                <SectionText text={t("projects.desjardinsKPI.section1Text2")} />

                <SectionTitle title={t("projects.desjardinsKPI.section2")} />
                <SectionText text={t("projects.desjardinsKPI.section2Text1")} />

                {/* Performance comparison block */}
                <div className="mt-6 mb-8 grid grid-cols-2 gap-4">
                    <div className="border border-zinc-700 bg-zinc-900 p-5">
                        <p className="text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">Before</p>
                        <p className="text-4xl font-black text-white mb-1">6</p>
                        <p className="text-zinc-400 text-sm">KPIs tracked</p>
                        <p className="text-4xl font-black text-white mt-4 mb-1">3 000</p>
                        <p className="text-zinc-400 text-sm">assets monitored</p>
                        <p className="text-4xl font-black text-white mt-4 mb-1">6h</p>
                        <p className="text-zinc-400 text-sm">per full run</p>
                    </div>
                    <div className="border border-red-800/60 bg-red-950/20 p-5">
                        <p className="text-red-400 font-mono text-xs tracking-widest uppercase mb-3">After</p>
                        <p className="text-4xl font-black text-white mb-1">18</p>
                        <p className="text-zinc-400 text-sm">KPIs tracked <span className="text-red-400">+50%</span></p>
                        <p className="text-4xl font-black text-white mt-4 mb-1">17 000</p>
                        <p className="text-zinc-400 text-sm">assets monitored <span className="text-red-400">+467%</span></p>
                        <p className="text-4xl font-black text-white mt-4 mb-1">2h30</p>
                        <p className="text-zinc-400 text-sm">per full run <span className="text-red-400">−58%</span></p>
                    </div>
                </div>

                <SectionTitle title={t("projects.desjardinsKPI.section3")} />

                <p className="text-red-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjardinsKPI.section3Sub1")}
                </p>
                <SectionText text={t("projects.desjardinsKPI.section3Text1")} />

                <p className="text-red-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjardinsKPI.section3Sub2")}
                </p>
                <SectionText text={t("projects.desjardinsKPI.section3Text2")} />

                <p className="text-red-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.desjardinsKPI.section3Sub3")}
                </p>
                <SectionText text={t("projects.desjardinsKPI.section3Text3")} />

                <SectionTitle title={t("projects.desjardinsKPI.section4")} />
                <SectionText text={t("projects.desjardinsKPI.section4Text1")} />

            </div>
        </div>
    );
}