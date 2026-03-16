import { useTranslation } from "react-i18next";

interface ContactLink {
    labelKey: string;
    descKey: string;
    actionKey: string;
    href: string;
}

const CONTACT_LINKS: ContactLink[] = [
    {
        labelKey: "contact.email.label",
        descKey: "contact.email.desc",
        actionKey: "contact.email.action",
        href: "mailto:your@email.com", // ← replace
    },
    {
        labelKey: "contact.github.label",
        descKey: "contact.github.desc",
        actionKey: "contact.github.action",
        href: "https://github.com/yourusername", // ← replace
    },
    {
        labelKey: "contact.linkedin.label",
        descKey: "contact.linkedin.desc",
        actionKey: "contact.linkedin.action",
        href: "https://linkedin.com/in/yourprofile", // ← replace
    },
];

function ContactCard({ link }: { link: ContactLink }) {
    const { t } = useTranslation();
    const isEmail = link.href.startsWith("mailto");

    return (
        <a
            href={link.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="group flex flex-col gap-3 p-6 rounded-xl border border-gray-800 bg-gray-950
                       hover:border-gray-500 hover:bg-gray-900/80 transition-all duration-200
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
                {t(link.labelKey)}
            </span>

            <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors break-all">
                {t(link.descKey)}
            </span>

            <span className="font-mono text-[11px] text-gray-600 group-hover:text-gray-400 transition-colors mt-auto flex items-center gap-1">
                {t(link.actionKey)}
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    →
                </span>
            </span>
        </a>
    );
}

export function ContactSection() {
    const { t } = useTranslation();

    return (
        <div id="contactSection" className="pt-2 px-4 mb-0 mt-4">
            <h1 className="text-4xl font-bold text-slate-100 mb-2">
                {t("sections.contact")}
            </h1>

            <p className="font-mono text-sm text-gray-500 mb-10">
                {t("contact.tagline")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CONTACT_LINKS.map((link) => (
                    <ContactCard key={link.labelKey} link={link} />
                ))}
            </div>
        </div>
    );
}

// ─── i18n keys to add ────────────────────────────────────────────────────────
//
//  "sections": {
//    "contact": "Contact"
//  },
//  "contact": {
//    "tagline": "Let's build something together.",
//    "email":    { "label": "Email",    "desc": "your@email.com",          "action": "Send a message" },
//    "github":   { "label": "GitHub",   "desc": "@yourusername",           "action": "See my code"    },
//    "linkedin": { "label": "LinkedIn", "desc": "linkedin.com/in/yourprofile", "action": "Let's connect"  }
//  }
//
// ─────────────────────────────────────────────────────────────────────────────