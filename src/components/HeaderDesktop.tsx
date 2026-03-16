import { useTranslation } from "react-i18next";

export function HeaderDesktop() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="relative w-full h-16 flex items-center justify-between px-4 bg-zinc-800 border-b border-gray-700">
            
            <div className="text-xl font-bold text-zinc-200">Maxence Lhuisset</div>

            <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:font-semibold bg-transparent border-none cursor-pointer">{t("nav.home")}</button>
                <button onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:font-semibold bg-transparent border-none cursor-pointer">{t("nav.education")}</button>
                <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:font-semibold bg-transparent border-none cursor-pointer">{t("nav.experience")}</button>
                <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:font-semibold bg-transparent border-none cursor-pointer">{t("nav.projects")}</button>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-white hover:font-semibold bg-transparent border-none cursor-pointer">{t("nav.contact")}</button>
            </div>

            <div className="flex gap-2">
                <button onClick={() => changeLanguage("fr")}>FR</button>
                <button onClick={() => changeLanguage("en")}>EN</button>
            </div>

        </div>
    )
}