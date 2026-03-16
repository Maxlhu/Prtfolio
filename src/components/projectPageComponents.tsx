export function SectionTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4 mt-20 mb-6">
            <span className="block w-8 h-[2px] bg-emerald-500 flex-shrink-0" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-200">{title}</h2>
        </div>
    );
}

export function SectionText({ text }: { text: string }) {
    return (
        <p className="text-lg leading-relaxed text-gray-300 mb-4 font-light">{text}</p>
    );
}

export function BulletPoint({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 mb-3 text-gray-300">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-base leading-relaxed">{text}</span>
        </li>
    );
}

export function ProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
    return (
        <figure className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img src={imageUrl} alt={alt} className="w-full h-auto object-cover" />
            <figcaption className="text-sm text-gray-400 text-center py-3 bg-gray-50 font-mono">
                {alt}
            </figcaption>
        </figure>
    );
}

export function MediumProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
    return (
        <figure className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img src={imageUrl} alt={alt} className="w-full h-64 object-cover object-top" />
            <figcaption className="text-sm text-gray-400 text-center py-2 bg-gray-50 font-mono">
                {alt}
            </figcaption>
        </figure>
    );
}

export function SmallProjectImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
    return (
        <figure className="w-48 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0">
            <img src={imageUrl} alt={alt} className="w-full h-36 object-cover object-top" />
            <figcaption className="text-xs text-gray-400 text-center py-2 bg-gray-50 font-mono">
                {alt}
            </figcaption>
        </figure>
    );
}

export function ProjectVideo({ videoUrl, alt }: { videoUrl: string; alt: string }) {
    return (
        <figure className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <video src={videoUrl}
                controls
                className="w-full h-auto object-cover"
            />
            <figcaption className="text-sm text-gray-400 text-center py-3 bg-gray-50 font-mono">
                {alt}
            </figcaption>
        </figure>
    );
}

export function CodeBlock({ code }: { code: string }) {
    return (
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 bg-gray-200 px-4 py-3 border-b border-gray-50">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <pre className="bg-gray-100 p-6 overflow-x-auto">
                <code className="text-sm text-semibold font-mono text-emerald-700 leading-relaxed">{code}</code>
            </pre>
        </div>
    );
}

export function TerminalCommand({ command }: { command: string }) {
    return (
        <div className="my-4 rounded-md bg-gray-800 text-gray-300 font-mono text-sm p-4">
            <code>{command}</code>
        </div>
    );
}