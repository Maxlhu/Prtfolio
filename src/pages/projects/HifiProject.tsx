import { useTranslation } from "react-i18next";
// import hifi_preview from "../../assets/hifi_preview.png";
import {
    BulletPoint,
    CodeBlock,
    MediumProjectImage,
    SectionText,
    SectionTitle,
} from "../../components/ProjectPageComponents";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "../../components/HeaderDesktop";

export function HifiProjectPage() {
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
            {/* Hero */}
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
            <div
                // style={{ backgroundImage: `url(${hifi_preview})` }}
                className="relative flex flex-col justify-end bg-cover bg-center h-screen"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 px-10 pb-16 max-w-4xl">
                    <span className="text-amber-400 font-mono text-sm tracking-widest uppercase mb-3 block">
                        Hardware / Full Stack
                    </span>
                    <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
                        HiFi Multiroom
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        {t("projects.hifi.hero")}
                    </p>
                </div>
                <div className="absolute bottom-6 right-10 text-gray-400 font-mono text-xs tracking-widest animate-bounce">
                    scroll ↓
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl ml-10 px-6 pb-32">

                {/* Section 1 — Overview */}
                <SectionTitle title={t("projects.hifi.section1")} />
                <SectionText text={t("projects.hifi.section1Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.hifi.section1Bullet1")} />
                    <BulletPoint text={t("projects.hifi.section1Bullet2")} />
                    <BulletPoint text={t("projects.hifi.section1Bullet3")} />
                    <BulletPoint text={t("projects.hifi.section1Bullet4")} />
                </ul>

                {/* Section 2 — Architecture */}
                <SectionTitle title={t("projects.hifi.section2")} />
                <SectionText text={t("projects.hifi.section2Text1")} />
                {/* <MediumProjectImage imageUrl={hifi_preview} alt="HiFi System Architecture" /> */}
                <SectionText text={t("projects.hifi.section2Text2")} />
                <CodeBlock code={`# Snapserver config — librespot source
[stream]
source = librespot:///usr/bin/librespot
  ?name=Spotify
  &devicename=HiFi System
  &bitrate=320
  &sampleformat=44100:16:2

# Each Zero 2W client
SNAPCLIENT_OPTS="--host audioserver.local
  --soundcard plughw:CARD=Audio,DEV=0"`} />
                <SectionText text={t("projects.hifi.section2Text3")} />

                {/* Section 3 — Technical Challenges */}
                <SectionTitle title={t("projects.hifi.section3")} />
                <SectionText text={t("projects.hifi.section3Text1")} />
                <SectionText text={t("projects.hifi.section3Text2")} />
                <CodeBlock code={`# Fix clock drift between devices
sudo chronyc makestep

# Snapcast uses monotonic clock —
# devices must boot near-simultaneously
# or use --latency to compensate offset`} />
                <SectionText text={t("projects.hifi.section3Text3")} />
                <SectionText text={t("projects.hifi.section3Text4")} />

                {/* Section 4 — React Dashboard */}
                <SectionTitle title={t("projects.hifi.section4")} />
                <SectionText text={t("projects.hifi.section4Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.hifi.section4Bullet1")} />
                    <BulletPoint text={t("projects.hifi.section4Bullet2")} />
                    <BulletPoint text={t("projects.hifi.section4Bullet3")} />
                    <BulletPoint text={t("projects.hifi.section4Bullet4")} />
                </ul>
                <CodeBlock code={`// Snapcast WebSocket — real-time room control
const ws = new WebSocket('wss://audioserver/snapcast/jsonrpc')

ws.send(JSON.stringify({
  jsonrpc: "2.0",
  method: "Client.SetVolume",
  params: {
    id: clientId,
    volume: { percent: 75, muted: false }
  }
}))

// Spotify Web API — search & playback
await fetch('https://api.spotify.com/v1/me/player/play', {
  method: 'PUT',
  headers: { Authorization: \`Bearer \${token}\` },
  body: JSON.stringify({ context_uri: playlistUri })
})`} />
                <SectionText text={t("projects.hifi.section4Text2")} />

                {/* Section 5 — Bluetooth */}
                <SectionTitle title={t("projects.hifi.section5")} />
                <SectionText text={t("projects.hifi.section5Text1")} />
                <CodeBlock code={`# Each BT speaker = its own systemd service
# with a unique hostID → appears as separate
# room in the dashboard automatically

ExecStart=/usr/bin/snapclient
  --host localhost
  --soundcard pulse
  --hostID bt-kitchen
  --latency 150`} />
                <SectionText text={t("projects.hifi.section5Text2")} />

                {/* Section 6 — Learnings */}
                <SectionTitle title={t("projects.hifi.section6")} />
                <SectionText text={t("projects.hifi.section6Text1")} />
                <ul className="mt-2">
                    <BulletPoint text={t("projects.hifi.section6Bullet1")} />
                    <BulletPoint text={t("projects.hifi.section6Bullet2")} />
                    <BulletPoint text={t("projects.hifi.section6Bullet3")} />
                    <BulletPoint text={t("projects.hifi.section6Bullet4")} />
                </ul>
            </div>
        </div>
    );
}