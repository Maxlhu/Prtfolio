import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import portfolio_preview from "../assets/portfolio_preview.png"; // swap for your actual asset
import desjungles_preview from "../assets/desjungles_preview.png"; // temporary placeholder

export function PortfolioSection() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const techs = ["React", "Vite", "Tailwind", "i18next", "Three.js"];

    return (
        <div id="thisPortfolio" className="pt-2 px-4 mb-16 mt-10">
            <h1 className="text-4xl font-bold text-slate-100 mb-8">
                {t("sections.thisPortfolio")}
            </h1>

            <button
                onClick={() => navigate("/project/portfolio")}
                className="group relative w-full rounded-2xl border border-gray-800 bg-gray-950
                           overflow-hidden hover:border-gray-500 transition-all duration-300
                           text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
                {/* Hover radial glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                               duration-500 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at top left, rgba(255,255,255,0.05) 0%, transparent 60%)",
                    }}
                />

                <div className="flex flex-col md:flex-row">
                    {/* ── Left: text content ─────────────────────────────── */}
                    <div className="flex-1 p-8 flex flex-col justify-between gap-6 z-10">
                        <div>
                            {/* Badge row */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 border border-gray-700 px-2.5 py-1 rounded-full">
                                    {t("portfolio.badge")}
                                </span>
                                <span className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                                    ↗
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                                {t("portfolio.title")}
                            </h2>

                            <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-xl">
                                {t("portfolio.description")}
                            </p>
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="font-mono text-[11px] text-gray-400 border border-gray-700 px-2.5
                                               py-0.5 rounded-full group-hover:border-gray-500
                                               group-hover:text-gray-300 transition-all duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 font-mono text-xs text-gray-500 group-hover:text-gray-200 transition-colors">
                            <span>{t("portfolio.cta")}</span>
                            <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                                →
                            </span>
                        </div>
                    </div>

                    {/* ── Right: screenshot ─────────────────────────────── */}
                    <div className="md:w-96 h-52 md:h-auto relative overflow-hidden shrink-0">
                        <img
                            src={desjungles_preview}
                            alt="Portfolio preview"
                            className="w-full h-full object-cover object-top opacity-50
                                       group-hover:opacity-75 scale-100 group-hover:scale-[1.04]
                                       transition-all duration-500"
                        />
                        {/* Left-to-right fade on desktop */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent hidden md:block pointer-events-none" />
                        {/* Bottom-up fade on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent md:hidden pointer-events-none" />
                    </div>
                </div>
            </button>
        </div>
    );
}