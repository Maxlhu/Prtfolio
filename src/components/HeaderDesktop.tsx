import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export function HeaderDesktop() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

    const handleNavClick = (id: string) => {
        if (location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate(`/?scroll=${id}`);
        }
    };

    const navItems = [
        { id: "home", label: t("nav.home") },
        { id: "mainProjects", label: t("nav.mainProjects") },
        { id: "allProjects", label: t("nav.allProjects") },
        { id: "contact", label: t("nav.contact") },
    ];

    return (
        <div className="w-full h-20 flex items-center justify-between px-8 bg-black/60 backdrop-blur-md border-b border-white/5">

            {/* Name */}
            <span className="font-mono text-sm tracking-widest text-zinc-400 uppercase">
                Maxence<span className="text-white text-lg ml-1">Lhuisset</span>
            </span>

            {/* Nav */}
            <div className="flex items-center gap-8">
                {navItems.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className="relative group font-mono text-md tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                    >
                        {label}
                        {/* animated underline */}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                    </button>
                ))}
            </div>

            {/* Language switcher */}
            <div className="flex items-center gap-1 font-mono text-md tracking-widest">
                {["fr", "en"].map((lng, i) => (
                    <span key={lng} className="flex items-center gap-1">
                        <button
                            onClick={() => changeLanguage(lng)}
                            className={`uppercase transition-colors duration-200 border-none bg-transparent cursor-pointer ${
                                i18n.language === lng
                                    ? "text-white"
                                    : "text-zinc-600 hover:text-zinc-300"
                            }`}
                        >
                            {lng}
                        </button>
                        {i === 0 && <span className="text-zinc-700">·</span>}
                    </span>
                ))}
            </div>
        </div>
    );
}