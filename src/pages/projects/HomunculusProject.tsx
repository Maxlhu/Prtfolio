import { useTranslation } from "react-i18next";
import { BulletPoint, CodeBlock, MediumProjectImage, SectionText, SectionTitle } from "../../components/projectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

// import homunculus_preview from "../../assets/homunculus_preview.png";
const homunculus_preview = "";

export function HomunculusProjectPage() {
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
            {/* ── Hero — clinical, biotech, precise — ── */}
            <div className="relative flex flex-col justify-end h-screen overflow-hidden bg-black">

                {/* Oscilloscope / EEG wave lines */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ pointerEvents: "none" }}
                    preserveAspectRatio="none"
                >
                    {[20, 35, 50, 65, 80].map((y, i) => (
                        <polyline
                            key={i}
                            fill="none"
                            stroke="rgba(34,211,238,0.8)"
                            strokeWidth="1"
                            points={Array.from({ length: 200 }, (_, x) => {
                                const px = (x / 199) * 100;
                                const spike = x % 40 === 20 ? -8 : x % 40 === 21 ? 12 : x % 40 === 22 ? -6 : 0;
                                const noise = Math.sin(x * 0.3 + i) * 0.5;
                                return `${px}%,${y + spike + noise}%`;
                            }).join(" ")}
                        />
                    ))}
                </svg>

                {/* Soft biotech glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(6,182,212,0.12) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 75% 70%, rgba(16,185,129,0.08) 0%, transparent 50%), #000000",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Industry Collaboration · Neuroscience Software
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        {t("projects.homunculus.heroTitle")}
                    </h1>
                    <p className="text-xl text-cyan-100 font-light max-w-xl leading-relaxed">
                        {t("projects.homunculus.heroSubtitle")}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {["Rust", "Tauri", "React", "MEA", "UDP", "Serial", "Hardware"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-6 right-10 text-cyan-800 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                <SectionTitle title={t("projects.homunculus.section1")} />
                <SectionText text={t("projects.homunculus.section1Text1")} />
                <SectionText text={t("projects.homunculus.section1Text2")} />

                <SectionTitle title={t("projects.homunculus.section2")} />
                {homunculus_preview && <MediumProjectImage imageUrl={homunculus_preview} alt="Homunculus Software" />}
                <SectionText text={t("projects.homunculus.section2Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.homunculus.section2Bullet1")} />
                    <BulletPoint text={t("projects.homunculus.section2Bullet2")} />
                    <BulletPoint text={t("projects.homunculus.section2Bullet3")} />
                </ul>

                <SectionTitle title={t("projects.homunculus.section3")} />

                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.homunculus.section3Sub1")}
                </p>
                <SectionText text={t("projects.homunculus.section3Text1")} />

                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.homunculus.section3Sub2")}
                </p>
                <SectionText text={t("projects.homunculus.section3Text2")} />
                <CodeBlock code={`// Auto-connect: scan UDP broadcast + serial ports, identify device
async fn auto_connect(state: &AppState) -> Result<DeviceHandle> {
    // 1. Listen for UDP broadcast from MEA device on LAN
    let udp_socket = UdpSocket::bind("0.0.0.0:0").await?;
    if let Ok(device_ip) = discover_via_udp(&udp_socket).await {
        return connect_tcp(device_ip).await;
    }
    // 2. Fallback: enumerate serial ports and probe for device signature
    for port in serialport::available_ports()? {
        if let Ok(handle) = probe_serial(&port.port_name).await {
            return Ok(handle);
        }
    }
    Err(anyhow!("No MEA device found"))
}`} />

                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mt-8 mb-2">
                    {t("projects.homunculus.section3Sub3")}
                </p>
                <SectionText text={t("projects.homunculus.section3Text3")} />

                <SectionTitle title={t("projects.homunculus.section4")} />
                <SectionText text={t("projects.homunculus.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.homunculus.section4Bullet1")} />
                    <BulletPoint text={t("projects.homunculus.section4Bullet2")} />
                    <BulletPoint text={t("projects.homunculus.section4Bullet3")} />
                </ul>

                <SectionTitle title={t("projects.homunculus.section5")} />
                <SectionText text={t("projects.homunculus.section5Text1")} />
            </div>
        </div>
    );
}