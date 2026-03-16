import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <div className="w-full h-16 flex items-center justify-center bg-zinc-800 mt-8">
            <p className="text-sm text-gray-300">{t("footer.copyright")}</p>
        </div>  
    )
}