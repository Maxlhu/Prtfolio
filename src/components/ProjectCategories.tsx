import { useState } from "react";
import desjungles_preview from "../assets/desjungles_preview.png";
import dia_jiro_preview   from "../assets/dia_jiro_preview.png";
import trydon_preview     from "../assets/trydon_preview.png";
import obelisk_preview    from "../assets/obelisk_preview.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

type CategoryId = "Web & Desktop" | "hardware" | "ai" | "cybersecurity" | "videogame" | "mobile";

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    techs: string[];
    context: string;
    reward?: string;
    categories: CategoryId[];
};

type Category = {
    id: CategoryId;
    index: string;
    label: string;
    summary: string;
    projects: Project[];
};

const CATEGORY_META: Record<CategoryId, { index: string; label: string; summary: string }> = {
    "Web & Desktop": {
        index: "01",
        label: "Web & Desktop",
        summary: "Web platforms, full-stack systems & developer tooling.",
    },
    mobile: {
        index: "02",
        label: "Mobile",
        summary: "iOS, Android & cross-platform development.",
    },
    hardware: {
        index: "03",
        label: "Hardware",
        summary: "Embedded systems, electronics & physical computing.",
    },
    ai: {
        index: "04",
        label: "AI",
        summary: "Machine learning, intelligent agents & data pipelines.",
    },
    cybersecurity: {
        index: "05",
        label: "Cybersecurity",
        summary: "Security automation, monitoring & cyber tooling.",
    },
    videogame: {
        index: "06",
        label: "VideoGame",
        summary: "Game design, interactive experiences & real-time engines.",
    },
};

const PROJECTS: Project[] = [
    {
        title: "Desjungles",
        description: "AI-powered banking app for money transfers using natural-language commands.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/desjungles",
        techs: ["React", "Python", "NLP", "Regex"],
        context: "Hackathon",
        reward: "1st - ConUHacks VI sponsor prize",
        categories: ["ai", "mobile"],
    },
    {
        title: "Trydon",
        description: "AI size recommendation engine that predicts garment fit from body measurements.",
        imageUrl: trydon_preview,
        projectUrl: "/project/trydon",
        techs: ["React", "Machine Learning", "Scoring"],
        context: "Entrepreneurship",
        categories: ["Web & Desktop", "ai", "mobile"],
    },
    {
        title: "Dia Jiro",
        description: "Voice-controlled cave exploration game where sound frequency activates crystals.",
        imageUrl: dia_jiro_preview,
        projectUrl: "/project/diajiro",
        techs: ["Unity", "C#", "Audio Analysis"],
        context: "School",
        categories: ["videogame"],
    },
    {
        title: "Obelisk",
        description: "Recommendation system using a 2-Tower architecture for personalized results.",
        imageUrl: obelisk_preview,
        projectUrl: "/project/obelisk",
        techs: ["React", "NestJS", "Python", "PostgreSQL"],
        context: "Work",
        categories: ["Web & Desktop", "ai"],
    },
    {
        title: "Desjardins KPI",
        description: "Cybersecurity KPI automation platform for enterprise perimeter monitoring.",
        imageUrl: obelisk_preview,
        projectUrl: "/project/desjardins-kpi",
        techs: ["Python", "Automation", "Monitoring"],
        context: "Work",
        categories: ["cybersecurity"],
    },
    {
        title: "Hex AI",
        description: "Hex game AI agent built with minimax and alpha-beta pruning.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/hex-ai",
        techs: ["Python", "Minimax", "Alpha-Beta"],
        context: "School",
        categories: ["ai"],
    },
    {
        title: "Quiz Game",
        description: "Real-time multiplayer quiz with WebSockets and AI-generated questions.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/quiz-game",
        techs: ["Angular", "Flutter", "NestJS", "WebSocket", "OpenAI"],
        context: "Hackathon",
        categories: ["Web & Desktop", "videogame", "ai"],
    },
    {
        title: "Trydon.ca",
        description: "Startup website with ROI calculator, pricing flow and authentication.",
        imageUrl: trydon_preview,
        projectUrl: "/project/trydon-website",
        techs: ["Angular", "AWS Lambda", "React", "Auth"],
        context: "Entrepreneurship",
        categories: ["Web & Desktop"],
    },
    {
        title: "Escape The Engine",
        description: "2D platformer where one player mechanic is removed at each new level.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/escape-the-engine",
        techs: ["Unity", "C#", "2D Physics"],
        context: "Personal",
        categories: ["videogame"],
    },
    {
        title: "Homunculus",
        description: "Neuroscience MEA software with real-time acquisition and signal processing.",
        imageUrl: obelisk_preview,
        projectUrl: "/project/homunculus",
        techs: ["Rust", "Tauri", "React", "Serial"],
        context: "School",
        categories: ["hardware", "Web & Desktop"],
    },
    {
        title: "Solar Navigation",
        description: "Space trajectory planner using gravity assists and NASA data.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/solar-system",
        techs: ["Python", "React", "NASA API", "Orbital Mechanics"],
        context: "Hackathon",
        reward: "2nd - PolyHX 2024",
        categories: ["Web & Desktop", "videogame"],
    },
    {
        title: "GameNight",
        description: "In-progress mobile party game with timers, dice and multiplayer sessions.",
        imageUrl: desjungles_preview,
        projectUrl: "/project/game-night",
        techs: ["React Native", "NestJS", "Expo", "WebSocket"],
        context: "Startup",
        categories: ["mobile"],
    },
    {
        title: "HiFi Multiroom",
        description: "Raspberry Pi multiroom audio system with synchronized network playback.",
        imageUrl: obelisk_preview,
        projectUrl: "/project/hifi",
        techs: ["Snapcast", "Raspberry Pi", "Linux", "React"],
        context: "Personal",
        categories: ["hardware", "Web & Desktop"],
    },
];

const CATEGORIES: Category[] = (Object.keys(CATEGORY_META) as CategoryId[]).map((id) => ({
    id,
    ...CATEGORY_META[id],
    projects: PROJECTS.filter((project) => project.categories.includes(id)),
}));

// ─── Inner project card ───────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
    return (
        <button className="group flex flex-col justify-between border border-white/10 rounded-sm p-5 gap-4
                        transition-all duration-300 hover:border-white/30 hover:bg-white/3"
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

function CategoryRow({ category, isOpen, onToggle }: { category: Category; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-white/10">

            {/* Header */}
            <button
                onClick={onToggle}
                className="group w-full flex items-center gap-6 py-6 px-1 text-left
                           transition-colors duration-300 hover:bg-white/2"
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
    const [openId, setOpenId] = useState<CategoryId | null>(null);
    const toggle = (id: CategoryId) => setOpenId((prev) => (prev === id ? null : id));

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