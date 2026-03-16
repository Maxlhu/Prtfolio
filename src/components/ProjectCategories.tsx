import { useState } from "react";
import desjungles_preview from "../assets/desjungles_preview.png";
import dia_jiro_preview   from "../assets/dia_jiro_preview.png";
import trydon_preview     from "../assets/trydon_preview.png";
import obelisk_preview    from "../assets/obelisk_preview.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    {
        id: "software",
        index: "01",
        label: "Software",
        summary: "Web platforms, full-stack systems & developer tooling.",
        projects: [
            {
                title: "Trydon Website",
                description: "Full-stack marketing & dashboard platform for Trydon's commercial operations.",
                imageUrl: trydon_preview,
                techs: ["React", "Node.js", "PostgreSQL"],
                context: "Entrepreneurship",
            },
            {
                title: "ConUHacks VI",
                description: "AI-powered financial tool built in 24 h for the Desjardins sponsor challenge.",
                imageUrl: desjungles_preview,
                techs: ["Python", "React", "FastAPI", "OpenAI"],
                context: "Hackathon",
                reward: "1st — sponsor prize",
            },
            {
                title: "PI3 Capstone",
                description: "End-to-end engineering capstone with full-stack implementation and ML pipeline.",
                imageUrl: desjungles_preview,
                techs: ["Python", "React", "TensorFlow"],
                context: "School",
            },
        ],
    },
    {
        id: "hardware",
        index: "02",
        label: "Hardware",
        summary: "Embedded systems, electronics & physical computing.",
        projects: [
            {
                title: "PolyHX Challenge",
                description: "Embedded system built during a hardware-focused hackathon at Polytechnique.",
                imageUrl: desjungles_preview,
                techs: ["Arduino", "C++", "Python"],
                context: "Hackathon",
                reward: "Finalist",
            },
            {
                title: "Sound System",
                description: "Custom DSP audio system with real-time equalizer and wireless control.",
                imageUrl: desjungles_preview,
                techs: ["C++", "Arduino"],
                context: "Personal",
            },
        ],
    },
    {
        id: "ai",
        index: "03",
        label: "AI",
        summary: "Machine learning, intelligent agents & data pipelines.",
        projects: [
            {
                title: "Trydon Algo",
                description: "Proprietary ML matching algorithm powering Trydon's core recommendation engine.",
                imageUrl: trydon_preview,
                techs: ["Python", "FastAPI", "Docker", "TensorFlow"],
                context: "Entrepreneurship",
            },
            {
                title: "HMC-LS Research",
                description: "Academic research on hierarchical multi-label classification systems.",
                imageUrl: desjungles_preview,
                techs: ["Python", "PyTorch"],
                context: "School",
            },
            {
                title: "Hex AI Agent",
                description: "Minimax + MCTS agent that plays the Hex board game at competitive level.",
                imageUrl: desjungles_preview,
                techs: ["Java", "Python"],
                context: "School",
            },
        ],
    },
    {
        id: "cybersecurity",
        index: "04",
        label: "Cybersecurity",
        summary: "Low-level exploitation, CTF tooling & reverse engineering.",
        projects: [
            {
                title: "KPI extraction system",
                description: "Internal tool for extracting and processing security KPIs from raw telemetry at Desjardins.",
                imageUrl: obelisk_preview,
                projectUrl: "/project/desjardins-kpi",
                techs: ["Python", "Undisclosed security tools"],
                context: "Work",
            },
        ],
    },
    {
        id: "videogame",
        index: "05",
        label: "VideoGame",
        summary: "Game design, interactive experiences & real-time engines.",
        projects: [
            {
                title: "Dia-Jiro",
                description: "2D platformer developed for the PolyGames student game jam.",
                imageUrl: dia_jiro_preview,
                techs: ["Unity", "C#"],
                context: "School",
                reward: "Best gameplay",
            },
            {
                title: "Escape the Engine",
                description: "First-person puzzle escape room built from scratch in Unity.",
                imageUrl: desjungles_preview,
                techs: ["Unity", "C#"],
                context: "Personal",
            },
        ],
    },
];

// ─── Inner project card ───────────────────────────────────────────────────────

function ProjectCard({ project }) {
    return (
        <button className="group flex flex-col justify-between border border-white/10 rounded-sm p-5 gap-4
                        transition-all duration-300 hover:border-white/30 hover:bg-white/[0.03]"
                        onClick={() => window.open(project.projectUrl || "#", "_blank")}>
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-mono text-sm font-semibold text-white leading-snug">
                        {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-white/30 whitespace-nowrap pt-0.5">
                        {project.context}
                    </span>
                </div>
                <p className="font-mono text-xs text-white/40 leading-relaxed">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-col gap-2">
                {project.reward && (
                    <p className="font-mono text-[10px] text-white/50">↳ {project.reward}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-white/30 rounded-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </button>
    );
}

// ─── Single accordion row ─────────────────────────────────────────────────────

function CategoryRow({ category, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/10">

            {/* Header */}
            <button
                onClick={onToggle}
                className="group w-full flex items-center gap-6 py-6 px-1 text-left
                           transition-colors duration-300 hover:bg-white/[0.02]"
            >
                <span
                    className="font-mono text-xs tabular-nums transition-colors duration-300"
                    style={{ color: isOpen ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.18)" }}
                >
                    {category.index}
                </span>

                <span
                    className="font-mono text-4xl font-black uppercase tracking-tight leading-none
                               transition-colors duration-300 flex-1"
                    style={{ color: isOpen ? "#fff" : "rgba(255,255,255,0.5)" }}
                >
                    {category.label}
                </span>

                <span
                    className="hidden md:block font-mono text-xs text-white/25 max-w-xs text-right
                               transition-opacity duration-300"
                    style={{ opacity: isOpen ? 0 : 1 }}
                >
                    {category.summary}
                </span>

                <span className="font-mono text-xs text-white/25 tabular-nums whitespace-nowrap">
                    {category.projects.length}&nbsp;project{category.projects.length !== 1 ? "s" : ""}
                </span>

                <span
                    className="font-mono text-base text-white/35 transition-transform duration-500"
                    style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                    }}
                >
                    +
                </span>
            </button>

            {/* Expanding panel — grid-template-rows: 0fr → 1fr */}
            <div
                className="grid transition-[grid-template-rows] duration-500"
                style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                {/* overflow:hidden is required for the 0fr trick */}
                <div className="overflow-hidden">
                    <div
                        className="pb-10 transition-[opacity,transform] duration-500"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                            transitionDelay: isOpen ? "90ms" : "0ms",
                            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                        }}
                    >
                        <p className="font-mono text-xs text-white/25 mb-6 px-1">
                            {category.summary}
                        </p>

                        <div
                            className="grid gap-3"
                            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
                        >
                            {category.projects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export function ProjectCategories() {
    const [openId, setOpenId] = useState(null);
    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <div className="w-full px-4">
            <div className="border-t border-white/10" />
            {CATEGORIES.map((cat) => (
                <CategoryRow
                    key={cat.id}
                    category={cat}
                    isOpen={openId === cat.id}
                    onToggle={() => toggle(cat.id)}
                />
            ))}
        </div>
    );
}