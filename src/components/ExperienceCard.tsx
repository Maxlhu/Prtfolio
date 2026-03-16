import { useTranslation } from "react-i18next";

export function ExperienceCard({ title, company, duration }: { title: string, company: string, duration: string }) {
    const { t } = useTranslation();
    
    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md w-1/3">
            <img
                src="https://defienergie.ca/wp-content/uploads/2025/05/Desjardins-icon.png"
                alt="Polytechnique Montreal Logo"
                className="w-16"
            />
            <div>
                <h2 className="text-xl text-gray-200 font-semibold mb-2">{t(title)}</h2>
                <h3 className="text-lg text-gray-500 mb-1">{t(company)}</h3>
                <p className="text-sm text-gray-500 mb-2">{t(duration)}</p>
            </div>
        </div>
    )
}