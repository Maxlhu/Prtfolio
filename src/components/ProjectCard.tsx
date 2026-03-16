import { useTranslation } from "react-i18next";

export function ProjectCard({
    title,
    description,
    imageUrl,
    projectUrl,
    technologies,
    context,
    reward,
}: {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl?: string;
    technologies?: string[];
    context?: string;
    reward?: string;
}) {
    const { t } = useTranslation();

    return (
        <button
            onClick={() => projectUrl && window.open(projectUrl, "_blank")}
            className="group relative flex gap-5 p-5 rounded-2xl w-full text-left overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #18181b 0%, #1c1c1f 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.12)";
                el.style.borderColor = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
            }}
        >
            {/* Subtle shimmer on hover */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                    background: "radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.03), transparent 60%)",
                    transition: "opacity 0.4s ease",
                }}
            />

            {/* Image */}
            <div
                className="relative shrink-0 overflow-hidden rounded-xl h-32"
                style={{ width: 180, height: 180 }}
            >
                <img
                    src={imageUrl}
                    alt={`${title} logo`}
                    className="h-full w-full object-cover"
                    style={{ transition: "transform 0.4s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                    className="absolute inset-0 rounded-xl"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 min-w-0 gap-2">
                {/* Context label */}
                <div>

                {context && (
                    <div className="flex items-center gap-1.5">
                        <span
                            className="text-xs font-medium tracking-widest uppercase"
                            style={{ color: "#52525b", letterSpacing: "0.08em" }}
                            >
                            {t(context)}
                        </span>
                    </div>
                )}

                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                    <p
                        className="font-semibold leading-tight truncate"
                        style={{
                            fontSize: "1.2rem",
                            color: "#f4f4f5",
                            letterSpacing: "-0.01em",
                        }}
                        >
                        {t(title)}
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                        {reward && (
                            <div
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                            style={{
                                background: "rgba(234,179,8,0.08)",
                                border: "1px solid rgba(234,179,8,0.2)",
                            }}
                            >
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                    <path
                                        d="M6 1l1.3 2.6L10 4.1 8 6l.5 2.9L6 7.5 3.5 8.9 4 6 2 4.1l2.7-.5L6 1z"
                                        fill="#ca8a04"
                                        stroke="#ca8a04"
                                        strokeWidth="0.5"
                                        strokeLinejoin="round"
                                        />
                                </svg>
                                <span
                                    className="text-xs font-medium"
                                    style={{ color: "#ca8a04", letterSpacing: "0.01em" }}
                                    >
                                    {t(reward)}
                                </span>
                            </div>
                        )}

                        {projectUrl && (
                            <div
                            className="flex items-center justify-center rounded-lg opacity-40 group-hover:opacity-100"
                            style={{
                                width: 28,
                                height: 28,
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                transition: "opacity 0.2s ease",
                                color: "#a1a1aa",
                            }}
                            >
                                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                                    <path
                                        d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"
                                        stroke="currentColor"
                                        strokeWidth="1.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                </div>

                {/* Description */}
                <p
                    className="text-sm leading-relaxed line-clamp-3"
                    style={{ color: "#a1a1aa" }}
                >
                    {t(description)}
                </p>

                {/* Attribute badges */}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {technologies.map((attr, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#d4d4d8",
                                    letterSpacing: "0.01em",
                                }}
                            >
                                {t(attr)}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </button>
    );
}