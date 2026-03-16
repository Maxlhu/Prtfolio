import { useTranslation } from "react-i18next";

export function TextSectionCard({ title, text, width }: { title: string, text: string, width?: string }) {
    const { t } = useTranslation();

    return (
        <div className={`bg-zinc-900 rounded-lg shadow-md p-6 mb-4 ${width || 'w-full'}`}>
            <h2 className="text-xl text-white font-semibold mb-2">{t(title)}</h2>
            <p className="text-gray-300">{t(text)}</p>
        </div>
    )
}