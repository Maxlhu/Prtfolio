import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { SmallProjectCard } from "../components/SmallProjectCard";
import { ProjectCategories } from "../components/ProjectCategories";
import { HeaderDesktop } from "../components/HeaderDesktop";
import { Footer } from "../components/Footer";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactSection } from "../components/ContactSection";
import ForestBg from "../components/gradientForest";
import { useTranslation } from "react-i18next";
import desjungles_preview from "../assets/desjungles_preview.png";
import dia_jiro_preview from "../assets/dia_jiro_preview.png";
import trydon_preview from "../assets/trydon_preview.png";
import obelisk_preview from "../assets/obelisk_preview.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectType = "Hackathon" | "School" | "Work" | "Personal";
type Domain = "AI" | "Web" | "VideoGame" | "Hardware" | "Cybersecurity";

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
    technologies: string[];
    context: string;
    reward?: string;
    type: ProjectType;
    techs: string[];
    domains: Domain[];
    /** Higher = more featured. Used as tiebreaker when filtering. */
    priority?: number;
}

// ─── Target → selector mapping ───────────────────────────────────────────────
// ?target=ai      → top 4 AI projects
// ?target=web     → top 4 Web projects
// ?target=game    → top 4 VideoGame projects
// ?target=hardware→ top 4 Hardware projects
// ?target=security→ top 4 Cybersecurity projects
// ?target=hackathon→ top 4 Hackathon projects
// ?target=work    → top 4 Work projects
// ?target=school  → top 4 School projects
// (no param)      → default featured 4

const TARGET_DOMAIN_MAP: Record<string, Domain> = {
    ai: "AI",
    web: "Web",
    game: "VideoGame",
    hardware: "Hardware",
    security: "Cybersecurity",
};

const TARGET_TYPE_MAP: Record<string, ProjectType> = {
    hackathon: "Hackathon",
    work: "Work",
    school: "School",
    personal: "Personal",
};

// ─── Master project list ──────────────────────────────────────────────────────

const ALL_PROJECTS: Project[] = [
    {
        title: "projects.desjungles.title",
        description: "projects.desjungles.description",
        imageUrl: desjungles_preview,
        projectUrl: "/project/desjungles",
        technologies: [
            "projects.desjungles.techno1",
            "projects.desjungles.techno2",
            "projects.desjungles.techno3",
            "projects.desjungles.techno4",
            "projects.desjungles.techno5",
        ],
        context: "projects.desjungles.context",
        reward: "projects.desjungles.reward",
        type: "Hackathon",
        techs: ["Python", "React", "Docker"],
        domains: ["AI", "Web"],
        priority: 10,
    },
    {
        title: "projects.pi3.title",
        description: "projects.pi3.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.pi3.techno1",
            "projects.pi3.techno2",
            "projects.pi3.techno3",
            "projects.pi3.techno4",
            "projects.pi3.techno5",
        ],
        context: "projects.pi3.context",
        reward: "projects.pi3.reward",
        type: "School",
        techs: ["Python", "TensorFlow", "React"],
        domains: ["AI", "Web"],
        priority: 7,
    },
    {
        title: "projects.trydonWebsite.title",
        description: "projects.trydonWebsite.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.trydonWebsite.techno1",
            "projects.trydonWebsite.techno2",
            "projects.trydonWebsite.techno3",
            "projects.trydonWebsite.techno4",
            "projects.trydonWebsite.techno5",
        ],
        context: "projects.trydonWebsite.context",
        reward: "projects.trydonWebsite.reward",
        type: "Work",
        techs: ["React"],
        domains: ["Web"],
        priority: 6,
    },
    {
        title: "projects.polyHX.title",
        description: "projects.polyHX.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.polyHX.techno1",
            "projects.polyHX.techno2",
            "projects.polyHX.techno3",
            "projects.polyHX.techno4",
            "projects.polyHX.techno5",
        ],
        context: "projects.polyHX.context",
        reward: "projects.polyHX.reward",
        type: "Hackathon",
        techs: ["Unity", "C#", "Python"],
        domains: ["Hardware"],
        priority: 7,
    },
    {
        title: "projects.hmcls.title",
        description: "projects.hmcls.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.hmcls.techno1",
            "projects.hmcls.techno2",
            "projects.hmcls.techno3",
            "projects.hmcls.techno4",
            "projects.hmcls.techno5",
        ],
        context: "projects.hmcls.context",
        reward: "projects.hmcls.reward",
        type: "School",
        techs: ["Python"],
        domains: ["AI"],
        priority: 5,
    },
    {
        title: "projects.soundSystem.title",
        description: "projects.soundSystem.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.soundSystem.techno1",
            "projects.soundSystem.techno2",
            "projects.soundSystem.techno3",
            "projects.soundSystem.techno4",
            "projects.soundSystem.techno5",
        ],
        context: "projects.soundSystem.context",
        reward: "projects.soundSystem.reward",
        type: "Personal",
        techs: ["Linux", "Raspberry", "React"],
        domains: ["Hardware"],
        priority: 6,
    },
    {
        title: "projects.escapeTheEngine.title",
        description: "projects.escapeTheEngine.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.escapeTheEngine.techno1",
            "projects.escapeTheEngine.techno2",
            "projects.escapeTheEngine.techno3",
            "projects.escapeTheEngine.techno4",
            "projects.escapeTheEngine.techno5",
        ],
        context: "projects.escapeTheEngine.context",
        reward: "projects.escapeTheEngine.reward",
        type: "Personal",
        techs: ["Unity", "C#"],
        domains: ["VideoGame"],
        priority: 6,
    },
    {
        title: "projects.hex.title",
        description: "projects.hex.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.hex.techno1",
            "projects.hex.techno2",
            "projects.hex.techno3",
            "projects.hex.techno4",
            "projects.hex.techno5",
        ],
        context: "projects.hex.context",
        reward: "projects.hex.reward",
        type: "School",
        techs: ["Python"],
        domains: ["AI"],
        priority: 5,
    },
    {
        title: "projects.conuhahacks.title",
        description: "projects.desjungles.description",
        imageUrl: desjungles_preview,
        technologies: [
            "projects.desjungles.techno1",
            "projects.desjungles.techno2",
            "projects.desjungles.techno3",
            "projects.desjungles.techno4",
            "projects.desjungles.techno5",
        ],
        context: "projects.desjungles.context",
        reward: "projects.desjungles.reward",
        type: "Hackathon",
        techs: ["Expo", "TensorFlow", "NestJS", "MongoDB", "IOS", "Android"],
        domains: ["Web", "AI"],
        priority: 8,
    },
    {
        title: "projects.polygames.title",
        description: "projects.polygames.description",
        imageUrl: dia_jiro_preview,
        projectUrl: "/project/diajiro",
        technologies: ["projects.polygames.techno1", "projects.polygames.techno2"],
        context: "projects.polygames.context",
        reward: "projects.polygames.reward",
        type: "School",
        techs: ["Unity", "C#"],
        domains: ["VideoGame"],
        priority: 9,
    },
    {
        title: "projects.trydonAlgo.title",
        description: "projects.trydonAlgo.description",
        imageUrl: trydon_preview,
        projectUrl: "/project/trydon",
        technologies: [
            "projects.trydonAlgo.techno1",
            "projects.trydonAlgo.techno2",
            "projects.trydonAlgo.techno3",
            "projects.trydonAlgo.techno4",
            "projects.trydonAlgo.techno5",
            "projects.trydonAlgo.techno6",
        ],
        context: "projects.trydonAlgo.context",
        type: "Work",
        techs: ["NestJS", "TensorFlow", "MongoDB", "React", "Shopify", "AWS"],
        domains: ["AI", "Web"],
        priority: 9,
    },
    {
        title: "projects.obelisk.title",
        description: "projects.obelisk.description",
        imageUrl: obelisk_preview,
        projectUrl: "/project/obelisk",
        technologies: [
            "projects.obelisk.techno1",
            "projects.obelisk.techno2",
            "projects.obelisk.techno3",
            "projects.obelisk.techno4",
            "projects.obelisk.techno5",
        ],
        context: "projects.obelisk.context",
        type: "Personal",
        techs: ["React", "Python", "NestJS", "Docker", "SQL"],
        domains: ["Cybersecurity"],
        priority: 9,
    },
];

// ─── Default featured 4 (original hardcoded picks) ───────────────────────────
const DEFAULT_FEATURED_TITLES = [
    "projects.desjungles.title",
    "projects.polygames.title",
    "projects.trydonAlgo.title",
    "projects.obelisk.title",
];

// ─── Hook: resolve featured projects from ?target= ───────────────────────────

function useFeaturedProjects(target: string | null): Project[] {
    return useMemo(() => {
        if (!target) {
            // No param → return the original default 4 in order
            return DEFAULT_FEATURED_TITLES.map(
                (t) => ALL_PROJECTS.find((p) => p.title === t)!
            ).filter(Boolean);
        }

        const key = target.toLowerCase();
        const domainFilter = TARGET_DOMAIN_MAP[key];
        const typeFilter = TARGET_TYPE_MAP[key];

        let candidates: Project[];

        if (domainFilter) {
            candidates = ALL_PROJECTS.filter((p) => p.domains.includes(domainFilter));
        } else if (typeFilter) {
            candidates = ALL_PROJECTS.filter((p) => p.type === typeFilter);
        } else {
            // Unknown target value → fall back to defaults
            return DEFAULT_FEATURED_TITLES.map(
                (t) => ALL_PROJECTS.find((p) => p.title === t)!
            ).filter(Boolean);
        }

        // Sort by priority descending, take top 4
        const sorted = [...candidates].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
        const top4 = sorted.slice(0, 4);

        // If fewer than 4 matched, pad with highest-priority defaults not already included
        if (top4.length < 4) {
            const existing = new Set(top4.map((p) => p.title));
            const padding = ALL_PROJECTS.filter((p) => !existing.has(p.title))
                .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
                .slice(0, 4 - top4.length);
            top4.push(...padding);
        }

        return top4;
    }, [target]);
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HomePage() {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();

    const target = searchParams.get("target");
    const featuredProjects = useFeaturedProjects(target);

    // Derive a readable label for the section heading when a target is active
    const sectionLabel = useMemo(() => {
        if (!target) return t("sections.bigProjects");
        const key = target.toLowerCase();
        const i18nKey = `sections.bigProjects_${key}`;
        const translated = t(i18nKey);
        // If no specific translation exists, fall back gracefully
        return translated === i18nKey ? t("sections.bigProjects") : translated;
    }, [target, t]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.1);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen">
            {/* ── Sticky header ──────────────────────────────────────────── */}
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

            {/* ── Hero ───────────────────────────────────────────────────── */}
            <div className="relative h-screen w-full overflow-hidden">
                <ForestBg />
            </div>

            {/* ── Fade transition ────────────────────────────────────────── */}
            <div
                className="relative z-10 h-32 pointer-events-none"
                style={{
                    marginTop: "-8rem",
                    background: "linear-gradient(to bottom, transparent 0%, rgb(0,0,0) 100%)",
                }}
            />

            {/* ── Main content ───────────────────────────────────────────── */}
            <div className="relative z-10 bg-[rgb(0,0,0)] w-screen items-center pt-32">

                {/* About blurb */}
                <div id="about" className="mb-10">
                    <p className="text-center text-2xl font-mono text-gray-300 mb-2">{t("home.summary.part1")}</p>
                    <p className="text-center text-2xl font-mono text-gray-300 mb-2">{t("home.summary.part2")}</p>
                    <p className="text-center text-2xl font-mono text-gray-300 mb-2">{t("home.summary.part3")}</p>
                    <p className="text-center text-2xl font-mono text-gray-300 mb-2">{t("home.summary.part4")}</p>
                </div>

                {/* ── Featured (dynamic) 4 projects ────────────────────── */}
                <div id="projects" className="pt-2">
                    <div className="flex items-center gap-4 justify-center mb-8 mt-10">
                        <h1 className="text-4xl text-slate-200 font-bold text-center">{sectionLabel}</h1>
                        {/* Show a target badge when filtered */}
                        {target && (
                            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 border border-gray-700 px-2.5 py-1 rounded-full">
                                {target}
                            </span>
                        )}
                    </div>
                </div>

                <div className="w-full px-4 grid grid-cols-2 gap-4 mt-4 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            projectUrl={project.projectUrl}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            context={project.context}
                            reward={project.reward}
                        />
                    ))}
                </div>

                {/* ── All projects ─────────────────────────────────────── */}
                <div id="allProjects">
                    <div className="flex items-baseline gap-4 ml-4 mb-8 mt-10">
                        <h1 className="text-slate-100 text-4xl font-bold">{t("sections.allProjects")}</h1>
                        <p>- 13 {t("sections.projectsTitle2")}</p>
                    </div>
                </div>

                <ProjectCategories />

                {/* ── This Portfolio ───────────────────────────────────── */}
                <PortfolioSection />

                {/* ── Contact ──────────────────────────────────────────── */}
                <ContactSection />

                {/* ── Footer ───────────────────────────────────────────── */}
                <div id="contact">
                    <Footer />
                </div>
            </div>
        </div>
    );
}