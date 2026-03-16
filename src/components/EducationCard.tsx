import { useTranslation } from "react-i18next"

export function EducationCard({ schoolKey, degreeKey, durationKey }: { schoolKey: string, degreeKey: string, durationKey: string }) {

    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md w-1/4">
            <img
                src="https://www.polymtl.ca/salle-de-presse/sites/salle-de-presse.lxpolywebprod.polymtl.ca/files/sceau-grand.png"
                alt="Polytechnique Montreal Logo"
                className="w-16 h-16 rounded-full"
            />
            <div>
                <h3 className="text-lg text-gray-200 font-semibold">{t(schoolKey)}</h3>
                <p className="text-lg text-gray-500">{t(degreeKey)}</p>
                <p className="text-sm text-gray-500">{t(durationKey)}</p>
            </div>
        </div>
    )
}